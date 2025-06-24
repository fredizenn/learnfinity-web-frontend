"use client"

import type React from "react"
import { forwardRef } from "react"
import { useController } from "react-hook-form"
import { useFormContext } from "./form"
import { FormField, FormLabel, FormError, FormDescription } from "./form"
import { cn } from "@/lib/utils"

interface BaseFormFieldProps {
  name: string
  label?: string
  description?: string
  required?: boolean
  className?: string
  disabled?: boolean
}

interface FormSwitchProps extends BaseFormFieldProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, "name" | "size"> {
  switchSize?: "sm" | "default" | "lg"
}

export const FormSwitch = forwardRef<HTMLInputElement, FormSwitchProps>(
  ({ name, label, description, required, className, disabled, switchSize = "default", ...props }, ref) => {
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

    const sizeClasses = {
      sm: "h-4 w-7",
      default: "h-5 w-9",
      lg: "h-6 w-11",
    }

    const thumbSizeClasses = {
      sm: "h-3 w-3",
      default: "h-4 w-4",
      lg: "h-5 w-5",
    }

    return (
      <FormField className={className}>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {label && (
              <FormLabel htmlFor={name} required={required} className="text-base font-medium">
                {label}
              </FormLabel>
            )}
            {description && <FormDescription>{description}</FormDescription>}
          </div>

          <div className="relative">
            <input
              {...field}
              {...props}
              ref={ref}
              type="checkbox"
              id={name}
              checked={isChecked}
              disabled={disabled}
              onChange={(e) => onChange(e.target.checked)}
              className="sr-only"
              aria-invalid={hasError}
              aria-describedby={hasError ? `${name}-error` : description ? `${name}-description` : undefined}
            />
            <label
              htmlFor={name}
              className={cn(
                "relative inline-flex cursor-pointer items-center rounded-full transition-colors",
                sizeClasses[switchSize],
                isChecked ? "bg-blue-600" : "bg-gray-200",
                disabled && "opacity-50 cursor-not-allowed",
                hasError && "ring-2 ring-red-500 ring-offset-2",
              )}
            >
              <span
                className={cn(
                  "inline-block rounded-full bg-white shadow-sm transition-transform",
                  thumbSizeClasses[switchSize],
                  switchSize === "sm"
                    ? isChecked
                      ? "translate-x-3"
                      : "translate-x-0.5"
                    : switchSize === "lg"
                    ? isChecked
                      ? "translate-x-5"
                      : "translate-x-0.5"
                    : isChecked
                    ? "translate-x-4"
                    : "translate-x-0.5",
                )}
              />
            </label>
          </div>
        </div>

        <FormError message={error?.message} />
      </FormField>
    )
  },
)
FormSwitch.displayName = "FormSwitch"
