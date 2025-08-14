"use client"

import type React from "react"
import { forwardRef, JSX } from "react"
import { useController } from "react-hook-form"
import { useFormContext } from "./form"
import { FormField, FormLabel, FormError, FormDescription } from "./form"
import { cn } from "@/lib/utils"

interface BaseFormFieldProps {
  name: string
  label?: JSX.Element | string
  description?: string
  required?: boolean
  className?: string
  disabled?: boolean
}

interface FormCheckboxProps
  extends BaseFormFieldProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "name" | "type" | "disabled"> {
  variant?: "default" | "card"
}

export const FormCheckbox = forwardRef<HTMLInputElement, FormCheckboxProps>(
  ({ name, label, description, required, className, disabled, variant = "default", ...props }, ref) => {
    const { form } = useFormContext()

    const {
      field: { value, onChange, ...field },
      fieldState: { error },
    } = useController({
      name,
      control: form.control,
    })

    const hasError = !!error
    const isChecked = Boolean(value)

    if (variant === "card") {
      return (
        <FormField className={className}>
          <div
            className={cn(
              "relative flex items-start space-x-3 rounded-lg border p-4 cursor-pointer transition-all",
              "hover:bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2",
              isChecked && "border-blue-500 bg-blue-50",
              hasError && "border-red-500",
              disabled && "opacity-50 cursor-not-allowed",
            )}
          >
            <input
              {...field}
              {...props}
              ref={ref}
              type="checkbox"
              id={name}
              checked={isChecked}
              disabled={disabled}
              onChange={(e) => onChange(e.target.checked)}
              className={cn(
                "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1",
                hasError && "border-red-500 focus:border-red-500 focus:ring-red-500",
              )}
              aria-invalid={hasError}
              aria-describedby={hasError ? `${name}-error` : description ? `${name}-description` : undefined}
            />
            <div className="flex-1">
              {label && (
                <FormLabel htmlFor={name} required={required} className="cursor-pointer font-medium">
                  {label}
                </FormLabel>
              )}
              {description && <FormDescription className="mt-1">{description}</FormDescription>}
            </div>
          </div>
          <FormError message={error?.message} />
        </FormField>
      )
    }

    return (
      <FormField className={className}>
        <div className="flex items-start space-x-2">
          <input
            {...field}
            {...props}
            ref={ref}
            type="checkbox"
            id={name}
            checked={isChecked}
            disabled={disabled}
            onChange={(e) => onChange(e.target.checked)}
            className={cn(
              "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1",
              hasError && "border-red-500 focus:border-red-500 focus:ring-red-500",
            )}
            aria-invalid={hasError}
            aria-describedby={hasError ? `${name}-error` : description ? `${name}-description` : undefined}
          />
          <div className="flex-1">
            {label && (
              <FormLabel htmlFor={name} required={required} className="cursor-pointer">
                {label}
              </FormLabel>
            )}
            {description && <FormDescription>{description}</FormDescription>}
          </div>
        </div>
        <FormError message={error?.message} />
      </FormField>
    )
  },
)
FormCheckbox.displayName = "FormCheckbox"
