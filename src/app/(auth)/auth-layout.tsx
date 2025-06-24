"use client"

import type React from "react"
import Link from "next/link"
import { Brain, BookOpen, Award } from "lucide-react"
import { Card } from "@/components/ui/card"

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

export default function AuthLayout({ children, title, subtitle, rightSideContent }: AuthLayoutProps) {
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
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-8 items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-lg"></div>
        </div>

        <div className="relative z-10 text-center space-y-8 max-w-lg">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white leading-tight">{rightSideContent.title}</h2>
            <p className="text-blue-100 text-lg">{rightSideContent.subtitle}</p>
          </div>

          {/* Dashboard Preview */}
          <div className="relative">
            <Card className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Learning Dashboard</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-600">Online</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-900">Lessons</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-600 mt-1">24</p>
                    <p className="text-xs text-blue-600">Completed</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-900">Achievements</span>
                    </div>
                    <p className="text-2xl font-bold text-green-600 mt-1">8</p>
                    <p className="text-xs text-green-600">Earned</p>
                  </div>
                </div>

                {/* Progress */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Mathematics</span>
                    <span className="text-sm text-gray-500">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">English</span>
                    <span className="text-sm text-gray-500">72%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "72%" }}></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Science</span>
                    <span className="text-sm text-gray-500">91%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: "91%" }}></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Features */}
          {rightSideContent.features && (
            <div className="grid grid-cols-2 gap-4">
              {rightSideContent.features.map((feature, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-white text-sm">{feature.title}</h4>
                  <p className="text-blue-100 text-xs">{feature.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Trusted By */}
          <div className="space-y-4">
            <p className="text-blue-100 text-sm">Trusted by students across Ghana</p>
            <div className="flex items-center justify-center space-x-6 opacity-60">
              <div className="text-white font-semibold text-sm">10,000+</div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="text-white font-semibold text-sm">Students</div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="text-white font-semibold text-sm">500+</div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="text-white font-semibold text-sm">Schools</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
