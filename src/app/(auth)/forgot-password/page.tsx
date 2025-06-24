"use client"

import { useState } from "react"
import { z } from "zod"
import Link from "next/link"
import AuthLayout from "../auth-layout"
import { Mail, ArrowLeft, Send, Brain, Shield, Clock, CheckCircle } from "lucide-react"
import { Form, FormSubmit } from "@/components/forms/form"
import { FormInput } from "@/components/forms/inputField"

// Forgot password schema
const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

type ForgotPasswordData = z.infer<typeof forgotPasswordSchema>

export default function ForgotPasswordForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleForgotPassword = async (data: ForgotPasswordData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log("Forgot password data:", data)
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const rightSideContent = {
    title: "Secure password recovery",
    subtitle: "We'll help you get back to learning in no time",
    features: [
      {
        icon: Shield,
        title: "Secure Process",
        description: "Your account security is our priority",
      },
      {
        icon: Clock,
        title: "Quick Recovery",
        description: "Get back to learning within minutes",
      },
      {
        icon: Brain,
        title: "AI Tutor Waiting",
        description: "Your AI tutor is ready to help",
      },
      {
        icon: CheckCircle,
        title: "Safe & Reliable",
        description: "Trusted by thousands of students",
      },
    ],
  }

  if (isSubmitted) {
    return (
      <AuthLayout
        title="Check your email"
        subtitle="We've sent password reset instructions to your email"
        rightSideContent={rightSideContent}
      >
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <Mail className="w-8 h-8 text-green-600" />
          </div>

          <div className="space-y-2">
            <p className="text-gray-600">
              If an account with that email exists, we&apos;ve sent you a link to reset your password.
            </p>
            <p className="text-sm text-gray-500">Didn&apos;t receive the email? Check your spam folder or try again.</p>
          </div>

          <div className="space-y-3">
            <Link
              href="/sign-in"
              className="inline-flex items-center justify-center w-full h-12 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Sign In
            </Link>

            <button onClick={() => setIsSubmitted(false)} className="text-sm text-blue-600 hover:text-blue-500">
              Try a different email
            </button>
          </div>
        </div>
      </AuthLayout>
    )
  }

  return (
    <AuthLayout
      title="Forgot Password?"
      subtitle="Enter your email address and we'll send you a link to reset your password"
      rightSideContent={rightSideContent}
    >
      <div className="space-y-6">
        <Form schema={forgotPasswordSchema} onSubmit={handleForgotPassword}>
          <FormInput
            name="email"
            type="email"
            label="Email address"
            placeholder="Enter your email address"
            icon={<Mail className="w-4 h-4" />}
            required
          />

          <FormSubmit
            isLoading={isSubmitting}
            loadingText="Sending reset link..."
            icon={<Send className="w-4 h-4" />}
            variant="gradient"
            size="lg"
          >
            Send Reset Link
          </FormSubmit>
        </Form>

        <div className="text-center">
          <Link href="/sign-in" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Sign In
          </Link>
        </div>
      </div>
    </AuthLayout>
  )
}
