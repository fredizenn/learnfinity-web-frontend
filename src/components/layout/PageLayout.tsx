"use client"
import type { ReactNode } from "react"
import Navbar from "@/components/layout/navbar"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

interface PageLayoutProps {
  children: ReactNode
  // Navbar props
  isAuthenticated?: boolean
  userRole?: "student" | "teacher"
  userName?: string
  userGrade?: string
  notifications?: number
  // Layout options
  showSidebar?: boolean
  sidebarContent?: ReactNode
  showFooter?: boolean
  fullWidth?: boolean
  className?: string
  // Loading and error states
  isLoading?: boolean
  error?: string | null
  // SEO
  title?: string
  description?: string
}

interface FooterProps {
  isAuthenticated?: boolean
}

function Footer({ isAuthenticated }: FooterProps) {
  const currentYear = new Date().getFullYear()

  if (isAuthenticated) {
    // Simplified footer for authenticated users
    return (
      <footer className="border-t bg-gray-50 py-6 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>&copy; {currentYear} learnfinity.AI</span>
              <span>•</span>
              <a href="/help" className="hover:text-gray-900 transition-colors">
                Help Center
              </a>
              <span>•</span>
              <a href="/privacy" className="hover:text-gray-900 transition-colors">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  // Full footer for public pages
  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-xl font-bold">learnfinity.AI</span>
            </div>
            <p className="text-gray-400">AI-powered learning platform for Ghanaian elementary students</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Subjects</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Mathematics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  English
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Science
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Social Studies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Grades</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Grade 1-2
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Grade 3-4
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Grade 5-6
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} LearnGH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function LoadingOverlay() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
        <p className="text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  )
}

function ErrorDisplay({ error }: { error: string }) {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center space-y-4 max-w-md mx-auto px-4">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Something went wrong</h3>
        <p className="text-gray-600">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}

export default function PageLayout({
  children,
  // Navbar props
  isAuthenticated = false,
  userRole = "student",
  userName,
  userGrade,
  notifications = 0,
  // Layout options
  showSidebar = false,
  sidebarContent,
  showFooter = true,
  fullWidth = false,
  className,
  // Loading and error states
  isLoading = false,
  error = null,
  // SEO
  title,
  description,
}: PageLayoutProps) {
  // Set document title if provided
  if (title && typeof document !== "undefined") {
    document.title = `${title} | learnfinity.AI`
  }

  // Set meta description if provided
  if (description && typeof document !== "undefined") {
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement("meta")
      metaDescription.setAttribute("name", "description")
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute("content", description)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Loading Overlay */}
      {isLoading && <LoadingOverlay />}

      {/* Navbar */}
      <Navbar
        isAuthenticated={isAuthenticated}
        userRole={userRole}
        userName={userName}
        userGrade={userGrade}
        notifications={notifications}
      />

      {/* Main Content Area */}
      <div className="flex overflow- flex-1">
        {/* Sidebar */}
        {showSidebar && sidebarContent && (
          <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:pt-16 lg:bg-white lg:border-r">
            <div className="flex-1 flex flex-col min-h-0 pt-4">
              <div className="flex-1 flex flex-col overflow-y-auto">{sidebarContent}</div>
            </div>
          </aside>
        )}

        {/* Main Content */}
        <main
          className={cn(
            "flex-1 flex flex-col",
            showSidebar && "lg:pl-64", // Add left padding when sidebar is shown
            fullWidth ? "w-full" : "max-w-none",
            className,
          )}
        >
          {/* Error Display */}
          {error ? (
            <ErrorDisplay error={error} />
          ) : (
            <div className={cn("flex-1", fullWidth ? "w-full" : "h-full w-full mx-auto")}>{children}</div>
          )}
        </main>
      </div>

      {/* Footer */}
      {showFooter && <Footer isAuthenticated={isAuthenticated} />}
    </div>
  )
}
