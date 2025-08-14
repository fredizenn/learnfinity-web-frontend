"use client"
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

interface RadioOption {
  value: string
  label: string
  description?: string
  disabled?: boolean
}

interface FormRadioGroupProps extends BaseFormFieldProps {
  options: RadioOption[]
  orientation?: "horizontal" | "vertical"
  variant?: "default" | "card"
}

export const FormRadioGroup = forwardRef<HTMLDivElement, FormRadioGroupProps>(
  (
    { name, label, description, required, className, disabled, options, orientation = "vertical", variant = "default" },
    ref,
  ) => {
    const { form } = useFormContext()

    const {
      field,
      fieldState: { error },
    } = useController({
      name,
      control: form.control,
    })

    const hasError = !!error

    return (
      <FormField className={className}>
        {label && (
          <FormLabel required={required} className="text-base font-medium">
            {label}
          </FormLabel>
        )}
        {description && <FormDescription>{description}</FormDescription>}

        <div
          ref={ref}
          className={cn("space-y-3", orientation === "horizontal" && "flex flex-wrap gap-4 space-y-0")}
          role="radiogroup"
          aria-invalid={hasError}
          aria-describedby={hasError ? `${name}-error` : description ? `${name}-description` : undefined}
        >
          {options.map((option) => {
            const isSelected = field.value === option.value
            const isDisabled = disabled || option.disabled

            if (variant === "card") {
              return (
                <div
                  key={option.value}
                  className={cn(
                    "relative flex items-start space-x-3 rounded-lg border p-4 cursor-pointer transition-all",
                    "hover:bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2",
                    isSelected && "border-blue-500 bg-blue-50",
                    hasError && "border-red-500",
                    isDisabled && "opacity-50 cursor-not-allowed",
                  )}
                >
                  <input
                    {...field}
                    type="radio"
                    id={`${name}-${option.value}`}
                    value={option.value}
                    checked={isSelected}
                    disabled={isDisabled}
                    className={cn(
                      "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 mt-1",
                      hasError && "border-red-500 focus:border-red-500 focus:ring-red-500",
                    )}
                  />
                  <div className="flex-1">
                    <label htmlFor={`${name}-${option.value}`} className="cursor-pointer font-medium">
                      {option.label}
                    </label>
                    {option.description && <p className="text-sm text-gray-500 mt-1">{option.description}</p>}
                  </div>
                </div>
              )
            }

            return (
              <div key={option.value} className="flex items-start space-x-2">
                <input
                  {...field}
                  type="radio"
                  id={`${name}-${option.value}`}
                  value={option.value}
                  checked={isSelected}
                  disabled={isDisabled}
                  className={cn(
                    "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 mt-1",
                    hasError && "border-red-500 focus:border-red-500 focus:ring-red-500",
                  )}
                />
                <div className="flex-1">
                  <label htmlFor={`${name}-${option.value}`} className="cursor-pointer font-medium">
                    {option.label}
                  </label>
                  {option.description && <p className="text-sm text-gray-500">{option.description}</p>}
                </div>
              </div>
            )
          })}
        </div>

        <FormError message={error?.message} />
      </FormField>
    )
  },
)
FormRadioGroup.displayName = "FormRadioGroup"

export type { RadioOption }
