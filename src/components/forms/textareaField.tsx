"use client"

import type React from "react"
import { forwardRef, useState } from "react"
import { useController } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea"
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

interface FormTextareaProps
  extends BaseFormFieldProps,
    Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "name" | "disabled"> {
  resize?: boolean
  maxLength?: number
  showCount?: boolean
}

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  (
    { name, label, description, required, className, disabled, resize = true, maxLength, showCount = false, ...props },
    ref,
  ) => {
    const { form } = useFormContext()
    const [isFocused, setIsFocused] = useState(false)

    const {
      field,
      fieldState: { error },
    } = useController({
      name,
      control: form.control,
    })

    const hasError = !!error
    const currentLength = field.value?.length || 0

    return (
      <FormField className={className}>
        {label && (
          <FormLabel htmlFor={name} required={required}>
            {label}
          </FormLabel>
        )}
        {description && <FormDescription>{description}</FormDescription>}

        <div className="relative">
          <Textarea
            {...field}
            {...props}
            ref={ref}
            id={name}
            disabled={disabled}
            maxLength={maxLength}
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
              !resize && "resize-none",
              hasError && "border-red-500 focus:border-red-500 focus:ring-red-500",
              isFocused && !hasError && "border-blue-500 ring-2 ring-blue-500/20",
            )}
            aria-invalid={hasError}
            aria-describedby={hasError ? `${name}-error` : description ? `${name}-description` : undefined}
          />

          {/* Character Count */}
          {(showCount || maxLength) && (
            <div className="absolute bottom-2 right-2 text-xs text-gray-400 bg-white px-1">
              {currentLength}
              {maxLength && `/${maxLength}`}
            </div>
          )}
        </div>

        <FormError message={error?.message} />
      </FormField>
    )
  },
)
FormTextarea.displayName = "FormTextarea"
