"use client"

import { useState } from "react"
import { z } from "zod"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import AuthLayout from "../auth-layout"
import { Mail, Lock, LogIn, Brain, Users, TrendingUp, Award } from "lucide-react"
import { Form, FormSubmit } from "@/components/forms/form"
import { FormInput } from "@/components/forms/inputField"
import { FormCheckbox } from "@/components/forms/checkboxField"

// Sign in schema
const signInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean().optional(),
})

type SignInData = z.infer<typeof signInSchema>

export default function SignInForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSignIn = async (data: SignInData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log("Sign in data:", data)
    setIsSubmitting(false)
    // Redirect to dashboard
  }

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`)
    // Implement social login
  }

  const rightSideContent = {
    title: "Welcome back to your learning journey",
    subtitle: "Continue where you left off and achieve your educational goals",
    features: [
      {
        icon: Brain,
        title: "AI Tutor",
        description: "Get instant help with any question",
      },
      {
        icon: Users,
        title: "Study Groups",
        description: "Learn together with classmates",
      },
      {
        icon: TrendingUp,
        title: "Track Progress",
        description: "Monitor your learning journey",
      },
      {
        icon: Award,
        title: "Achievements",
        description: "Earn badges and certificates",
      },
    ],
  }

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Enter your credentials to access your account"
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
            Continue with Google
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
            Continue with Apple
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

        {/* Sign In Form */}
        <Form schema={signInSchema} onSubmit={handleSignIn}>
          <FormInput
            name="email"
            type="email"
            label="Email address"
            placeholder="student@example.com"
            icon={<Mail className="w-4 h-4" />}
            required
          />

          <div className="space-y-2">
            <FormInput
              name="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
              icon={<Lock className="w-4 h-4" />}
              showPasswordToggle
              required
            />
            <div className="flex justify-end">
              <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
                Forgot password?
              </Link>
            </div>
          </div>

          <FormCheckbox name="rememberMe" label="Remember me for 30 days" />

          <FormSubmit
            isLoading={isSubmitting}
            loadingText="Signing in..."
            icon={<LogIn className="w-4 h-4" />}
            variant="gradient"
            size="lg"
          >
            Sign In
          </FormSubmit>
        </Form>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="font-medium text-blue-600 hover:text-blue-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  )
}
