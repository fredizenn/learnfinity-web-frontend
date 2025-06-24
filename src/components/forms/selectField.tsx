"use client"

import type React from "react"
import { forwardRef, useState } from "react"
import { useController } from "react-hook-form"
import { useFormContext } from "./form"
import { FormField, FormLabel, FormError, FormDescription } from "./form"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

interface BaseFormFieldProps {
  name: string
  label?: string
  description?: string
  required?: boolean
  className?: string
  disabled?: boolean
}

interface SelectOption {
  value: string
  label: string
  disabled?: boolean
  group?: string
}

interface FormSelectProps extends BaseFormFieldProps, Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "name"> {
  options: SelectOption[]
  placeholder?: string
  allowEmpty?: boolean
  emptyLabel?: string
}

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  (
    {
      name,
      label,
      description,
      required,
      className,
      disabled,
      options,
      placeholder,
      allowEmpty = true,
      emptyLabel = "Select an option",
      ...props
    },
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

    // Group options if they have group property
    const groupedOptions = options.reduce(
      (acc, option) => {
        const group = option.group || "default"
        if (!acc[group]) acc[group] = []
        acc[group].push(option)
        return acc
      },
      {} as Record<string, SelectOption[]>,
    )

    return (
      <FormField className={className}>
        {label && (
          <FormLabel htmlFor={name} required={required}>
            {label}
          </FormLabel>
        )}
        {description && <FormDescription>{description}</FormDescription>}

        <div className="relative">
          <select
            {...field}
            {...props}
            ref={ref}
            id={name}
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
              "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
              "file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer",
              "transition-all duration-200",
              hasError && "border-red-500 focus:border-red-500 focus:ring-red-500",
              isFocused && !hasError && "border-blue-500 ring-2 ring-blue-500/20",
            )}
            aria-invalid={hasError}
            aria-describedby={hasError ? `${name}-error` : description ? `${name}-description` : undefined}
          >
            {(allowEmpty || placeholder) && (
              <option value="" disabled={!allowEmpty}>
                {placeholder || emptyLabel}
              </option>
            )}

            {Object.keys(groupedOptions).map((groupName) => {
              const groupOptions = groupedOptions[groupName]
              if (groupName === "default") {
                return groupOptions.map((option) => (
                  <option key={option.value} value={option.value} disabled={option.disabled}>
                    {option.label}
                  </option>
                ))
              }
              return (
                <optgroup key={groupName} label={groupName}>
                  {groupOptions.map((option) => (
                    <option key={option.value} value={option.value} disabled={option.disabled}>
                      {option.label}
                    </option>
                  ))}
                </optgroup>
              )
            })}
          </select>

          {/* Custom dropdown arrow */}
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>

        <FormError message={error?.message} />
      </FormField>
    )
  },
)
FormSelect.displayName = "FormSelect"

export type { SelectOption }
