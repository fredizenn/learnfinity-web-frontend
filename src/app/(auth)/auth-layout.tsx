"use client"

import type React from "react"
import Link from "next/link"
import { Brain } from "lucide-react"
import Image from "next/image"
import sidebanner4 from "@/images/sidebanner4.jpg"
interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  subtitle: string
  rightSideContent: {
    title: string
    subtitle: string
    features?: Array<{
      icon: React.ComponentType<{ className?: string }>
      title: string
      description: string
    }>
  }
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center">
            <Link href="/" className="inline-flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">learnfinity.AI</span>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            <p className="text-gray-600">{subtitle}</p>
          </div>

          {/* Form Content */}
          {children}

          {/* Footer */}
          <div className="text-center text-sm text-gray-500">
            <p>&copy; 2024 LearnGH. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Right Side - Preview */}
      <div className="hidden lg:flex flex-1 p-8 items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
         <Image src={sidebanner4} alt="sidebanner" className="w-full h-full object-fit" />
        </div>

        
      </div>
    </div>
  )
}
