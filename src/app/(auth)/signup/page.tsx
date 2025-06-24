"use client"

import { useState } from "react"
import { z } from "zod"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import AuthLayout from "../auth-layout"
import { User, Mail, Lock, UserPlus, GraduationCap, BookOpen, Users, Brain } from "lucide-react"
import { FormInput } from "@/components/forms/inputField"
import { Form, FormSubmit } from "@/components/forms/form"
import { FormSelect, SelectOption } from "@/components/forms/selectField"
import { FormCheckbox } from "@/components/forms/checkboxField"

// Sign up schema
const signUpSchema = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
    grade: z.string().min(1, "Please select your grade"),
    parentEmail: z.string().email("Please enter a valid parent email"),
    agreeToTerms: z.boolean().refine((val) => val === true, "You must agree to the terms"),
    newsletter: z.boolean().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

type SignUpData = z.infer<typeof signUpSchema>

export default function SignUpForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const gradeOptions: SelectOption[] = [
    { value: "grade-1", label: "Grade 1 (Ages 6-7)", group: "Primary" },
    { value: "grade-2", label: "Grade 2 (Ages 7-8)", group: "Primary" },
    { value: "grade-3", label: "Grade 3 (Ages 8-9)", group: "Primary" },
    { value: "grade-4", label: "Grade 4 (Ages 9-10)", group: "Upper Primary" },
    { value: "grade-5", label: "Grade 5 (Ages 10-11)", group: "Upper Primary" },
    { value: "grade-6", label: "Grade 6 (Ages 11-12)", group: "Upper Primary" },
  ]

  const handleSignUp = async (data: SignUpData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2500))
    console.log("Sign up data:", data)
    setIsSubmitting(false)
    // Redirect to dashboard or email verification
  }

  const handleSocialLogin = (provider: string) => {
    console.log(`Sign up with ${provider}`)
    // Implement social login
  }

  const rightSideContent = {
    title: "Start your learning adventure today",
    subtitle: "Join thousands of students already learning with AI-powered assistance",
    features: [
      {
        icon: Brain,
        title: "AI Tutor",
        description: "Get personalized help 24/7",
      },
      {
        icon: BookOpen,
        title: "Interactive Lessons",
        description: "Engaging content for all subjects",
      },
      {
        icon: Users,
        title: "Study Together",
        description: "Connect with classmates",
      },
      {
        icon: GraduationCap,
        title: "Track Progress",
        description: "See your improvement over time",
      },
    ],
  }

  return (
    <AuthLayout
      title="Get Started Now"
      subtitle="Create your account to begin your learning journey"
      rightSideContent={rightSideContent}
    >
      <div className="space-y-6">
        {/* Social Login */}
        <div className="space-y-3">
          <Button
            variant="outline"
            fullWidth
            onClick={() => handleSocialLogin("google")}
            className="h-12 border-gray-300 hover:bg-gray-50"
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign up with Google
          </Button>

          <Button
            variant="outline"
            fullWidth
            onClick={() => handleSocialLogin("apple")}
            className="h-12 border-gray-300 hover:bg-gray-50"
          >
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Sign up with Apple
          </Button>
        </div>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-500">or</span>
          </div>
        </div>

        {/* Sign Up Form */}
        <Form
          schema={signUpSchema}
          onSubmit={handleSignUp}
          defaultValues={{
            newsletter: true,
          }}
        >
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              name="firstName"
              label="First Name"
              placeholder="Enter first name"
              icon={<User className="w-4 h-4" />}
              required
            />
            <FormInput
              name="lastName"
              label="Last Name"
              placeholder="Enter last name"
              icon={<User className="w-4 h-4" />}
              required
            />
          </div>

          <FormInput
            name="email"
            type="email"
            label="Email address"
            placeholder="student@example.com"
            icon={<Mail className="w-4 h-4" />}
            required
          />

          <FormSelect
            name="grade"
            label="Grade Level"
            placeholder="Select your current grade"
            options={gradeOptions}
            required
          />

          <FormInput
            name="parentEmail"
            type="email"
            label="Parent/Guardian Email"
            placeholder="parent@example.com"
            description="We'll send progress updates to this email"
            icon={<Mail className="w-4 h-4" />}
            required
          />

          <div className="grid grid-cols-1 gap-4">
            <FormInput
              name="password"
              type="password"
              label="Password"
              placeholder="Create a password (min 8 chars)"
              icon={<Lock className="w-4 h-4" />}
              showPasswordToggle
              required
            />
            <FormInput
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              placeholder="Confirm your password"
              icon={<Lock className="w-4 h-4" />}
              showPasswordToggle
              required
            />
          </div>

          <div className="space-y-3">
            <FormCheckbox
              name="agreeToTerms"
              label={
                <span>
                  I agree to the{" "}
                  <Link href="/terms" className="text-blue-600 hover:text-blue-500">
                    Terms & Privacy Policy
                  </Link>
                </span>
              }
              required
            />

            <FormCheckbox name="newsletter" label="Subscribe to our newsletter for learning tips and updates" />
          </div>

          <FormSubmit
            isLoading={isSubmitting}
            loadingText="Creating account..."
            icon={<UserPlus className="w-4 h-4" />}
            variant="gradient"
            size="lg"
          >
            Create Account
          </FormSubmit>
        </Form>

        {/* Sign In Link */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/sign-in" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  )
}
