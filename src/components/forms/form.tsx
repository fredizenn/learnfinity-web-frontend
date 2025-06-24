"use client"

import type React from "react"
import { createContext, useContext } from "react"
import { useForm, FormProvider, type UseFormReturn, type FieldValues, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import type { ZodSchema } from "zod"
import { cn } from "@/lib/utils"

// Form Context
interface FormContextType<T extends FieldValues = FieldValues> {
  form: UseFormReturn<T>
}

const FormContext = createContext<FormContextType<any> | null>(null);

export function useFormContext<T extends FieldValues = FieldValues>() {
  const context = useContext(FormContext) as FormContextType<T> | null;
  if (!context) {
    throw new Error("useFormContext must be used within a Form component");
  }
  return context;
}

// Main Form Component
interface FormProps<T extends FieldValues = FieldValues> {
  children: React.ReactNode
  onSubmit: SubmitHandler<T>
  schema?: ZodSchema<T>
  defaultValues?: import("react-hook-form").DefaultValues<T>
  className?: string
  mode?: "onChange" | "onBlur" | "onSubmit" | "onTouched" | "all"
}

export function Form<T extends FieldValues = FieldValues>({
  children,
  onSubmit,
  schema,
  defaultValues,
  className,
  mode = "onSubmit",
}: FormProps<T>) {
  const form = useForm<T>({
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues,
    mode,
  })

  return (
    <FormProvider {...form}>
      <FormContext.Provider value={{ form }}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={cn("space-y-6", className)}>
          {children}
        </form>
      </FormContext.Provider>
    </FormProvider>
  )
}

// Form Field Wrapper
interface FormFieldProps {
  children: React.ReactNode
  className?: string
}

export function FormField({ children, className }: FormFieldProps) {
  return <div className={cn("space-y-2", className)}>{children}</div>
}

// Form Label
interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean
}

export function FormLabel({ children, required, className, ...props }: FormLabelProps) {
  return (
    <label className={cn("text-sm font-medium text-gray-700", className)} {...props}>
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  )
}

// Form Error Message
interface FormErrorProps {
  message?: string
  className?: string
}

export function FormError({ message, className }: FormErrorProps) {
  if (!message) return null

  return (
    <p className={cn("text-sm text-red-600 flex items-center gap-1", className)}>
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
      {message}
    </p>
  )
}

// Form Description
interface FormDescriptionProps {
  children: React.ReactNode
  className?: string
}

export function FormDescription({ children, className }: FormDescriptionProps) {
  return <p className={cn("text-sm text-gray-500", className)}>{children}</p>
}

// Form Submit Button
import { Button } from "@/components/ui/button"

interface FormSubmitProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  loadingText?: string
  variant?:
    | "default"
    | "gradient"
    | "success"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "warning"
    | "info"
  size?: "default" | "sm" | "lg" | "xl"
  icon?: React.ComponentType<{ className?: string }> | React.ReactElement
  iconPosition?: "left" | "right"
  fullWidth?: boolean
}

export function FormSubmit({
  children,
  isLoading = false,
  loadingText = "Submitting...",
  variant = "gradient",
  size = "default",
  icon,
  iconPosition = "left",
  fullWidth = true,
  className,
  disabled,
  ...props
}: FormSubmitProps) {
  return (
    <Button
      type="submit"
      variant={variant}
      size={size}
      icon={icon}
      iconPosition={iconPosition}
      isLoading={isLoading}
      loadingText={loadingText}
      fullWidth={fullWidth}
      disabled={disabled}
      className={className}
      {...props}
    >
      {children}
    </Button>
  )
}
