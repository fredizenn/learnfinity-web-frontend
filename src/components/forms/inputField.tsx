"use client"

import type React from "react"
import { forwardRef, useState } from "react"
import { useController } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { useFormContext } from "./form"
import { FormField, FormLabel, FormError, FormDescription } from "./form"
import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react"

// Base Form Field Props
interface BaseFormFieldProps {
  name: string
  label?: string
  description?: string
  required?: boolean
  className?: string
  disabled?: boolean
}

interface FormInputProps
  extends BaseFormFieldProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "name" | "disabled"> {
  showPasswordToggle?: boolean
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      name,
      label,
      description,
      required,
      className,
      disabled,
      type = "text",
      showPasswordToggle = false,
      icon,
      iconPosition = "left",
      ...props
    },
    ref,
  ) => {
    const { form } = useFormContext()
    const [showPassword, setShowPassword] = useState(false)
    const [isFocused, setIsFocused] = useState(false)

    const {
      field,
      fieldState: { error },
    } = useController({
      name,
      control: form.control,
    })

    const inputType = type === "password" && showPassword ? "text" : type
    const hasError = !!error
    const isPasswordField = type === "password" && showPasswordToggle

    return (
      <FormField className={className}>
        {label && (
          <FormLabel htmlFor={name} required={required}>
            {label}
          </FormLabel>
        )}
        {description && <FormDescription>{description}</FormDescription>}

        <div className="relative">
          {/* Left Icon */}
          {icon && iconPosition === "left" && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
              {icon}
            </div>
          )}

          <Input
            {...field}
            {...props}
            ref={ref}
            id={name}
            type={inputType}
            disabled={disabled}
            onFocus={(e) => {
              setIsFocused(true)
              props.onFocus?.(e)
            }}
            onBlur={(e) => {
              setIsFocused(false)
              field.onBlur()
              props.onBlur?.(e)
            }}
            className={cn(
              "transition-all duration-200",
              hasError && "border-red-500 focus:border-red-500 focus:ring-red-500",
              isFocused && !hasError && "border-blue-500 ring-2 ring-blue-500/20",
              icon && iconPosition === "left" && "pl-10",
              (icon && iconPosition === "right") || isPasswordField ? "pr-10" : "",
            )}
            aria-invalid={hasError}
            aria-describedby={hasError ? `${name}-error` : description ? `${name}-description` : undefined}
          />

          {/* Right Icon */}
          {icon && iconPosition === "right" && !isPasswordField && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
              {icon}
            </div>
          )}

          {/* Password Toggle */}
          {isPasswordField && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          )}
        </div>

        <FormError message={error?.message} />
      </FormField>
    )
  },
)
FormInput.displayName = "FormInput"
