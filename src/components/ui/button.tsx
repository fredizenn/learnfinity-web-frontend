"use client"

import React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700",
        success: "bg-green-600 text-white hover:bg-green-700",
        warning: "bg-yellow-600 text-white hover:bg-yellow-700",
        info: "bg-blue-600 text-white hover:bg-blue-700",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-12 w-12",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  // Icon props
  icon?: React.ComponentType<{ className?: string }> | React.ReactElement
  iconPosition?: "left" | "right"
  iconOnly?: boolean
  // Loading state
  isLoading?: boolean
  loadingText?: string
  loadingIcon?: React.ComponentType<{ className?: string }>
  // Additional props
  href?: string
  external?: boolean
  fullWidth?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    variant,
    size,
    fullWidth,
    asChild = false,
    children,
    icon,
    iconPosition = "left",
    iconOnly = false,
    isLoading = false,
    loadingText,
    loadingIcon: LoadingIcon = Loader2,
    disabled,
    href,
    external = false,
    ...rest
  } = props

  const isDisabled = disabled || isLoading

  // Handle icon rendering
  const renderIcon = (iconElement: ButtonProps["icon"], position: "left" | "right") => {
    if (!iconElement) return null

    const iconClassName = cn(
      "flex-shrink-0",
      size === "sm" || size === "icon-sm" ? "h-4 w-4" : size === "lg" || size === "icon-lg" ? "h-5 w-5" : "h-4 w-4",
      iconOnly ? "" : position === "left" ? "mr-1" : "ml-1",
    )

    if (React.isValidElement(iconElement)) {
      const element = iconElement as React.ReactElement<{ className?: string }>;
      return React.cloneElement(element, {
        className: cn(iconClassName, element.props.className),
      })
    }

    if (typeof iconElement === "function") {
      const IconComponent = iconElement
      return <IconComponent className={iconClassName} />
    }

    return null
  }

  // Render as Slot (for asChild)
  if (asChild) {
    const Comp = Slot
    const commonProps = {
      className: cn(buttonVariants({ variant, size, fullWidth, className })),
      ref,
      ...rest,
    }
    if (isLoading) {
      return (
        <Comp {...commonProps}>
          <LoadingIcon className={cn("animate-spin", size === "sm" ? "h-4 w-4" : "h-4 w-4")} />
          {!iconOnly && (loadingText || children)}
        </Comp>
      )
    }
    if (iconOnly && icon) {
      return (
        <Comp {...commonProps}>
          {renderIcon(icon, "left")}
          <span className="sr-only">{children}</span>
        </Comp>
      )
    }
    return (
      <Comp {...commonProps}>
        {icon && iconPosition === "left" && renderIcon(icon, "left")}
        {children}
        {icon && iconPosition === "right" && renderIcon(icon, "right")}
      </Comp>
    )
  }

  // Render as anchor
  if (href) {
    return (
      <a
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-disabled={isDisabled ? "true" : undefined}
        style={isDisabled ? { pointerEvents: "none" } : undefined}
        {...rest}
      >
        {isLoading ? (
          <>
            <LoadingIcon className={cn("animate-spin", size === "sm" ? "h-4 w-4" : "h-4 w-4")} />
            {!iconOnly && (loadingText || children)}
          </>
        ) : iconOnly && icon ? (
          <>
            {renderIcon(icon, "left")}
            <span className="sr-only">{children}</span>
          </>
        ) : (
          <>
            {icon && iconPosition === "left" && renderIcon(icon, "left")}
            {children}
            {icon && iconPosition === "right" && renderIcon(icon, "right")}
          </>
        )}
      </a>
    )
  }

  // Render as button
  return (
    <button
      type="button"
      className={cn(buttonVariants({ variant, size, fullWidth, className }))}
      ref={ref}
      disabled={isDisabled}
      {...rest}
    >
      {isLoading ? (
        <>
          <LoadingIcon className={cn("animate-spin", size === "sm" ? "h-4 w-4" : "h-4 w-4")} />
          {!iconOnly && (loadingText || children)}
        </>
      ) : iconOnly && icon ? (
        <>
          {renderIcon(icon, "left")}
          <span className="sr-only">{children}</span>
        </>
      ) : (
        <>
          {icon && iconPosition === "left" && renderIcon(icon, "left")}
          {children}
          {icon && iconPosition === "right" && renderIcon(icon, "right")}
        </>
      )}
    </button>
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
