"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Search,
  Brain,
  Menu,
  User,
  BookOpen,
  GraduationCap,
  Settings,
  LogOut,
  Bell,
  Trophy,
  BarChart3,
} from "lucide-react"

interface NavbarProps {
  isAuthenticated?: boolean
  userRole?: "student" | "teacher"
  userName?: string
  userGrade?: string
  notifications?: number
}

function Navbar({
  isAuthenticated = false,
  userRole = "student",
  userName = "John Doe",
  userGrade = "Grade 4",
  notifications = 0,
}: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  type NavItem =
    | { href: string; label: string; icon: React.ComponentType<{ className?: string }> }
    | { href: string; label: string }

  const studentNavItems: NavItem[] = [
    { href: "/dashboard", label: "Dashboard", icon: BarChart3 },
    { href: "/subjects", label: "Subjects", icon: BookOpen },
    { href: "/lessons", label: "My Lessons", icon: GraduationCap },
    { href: "/achievements", label: "Achievements", icon: Trophy },
  ]

  const teacherNavItems: NavItem[] = [
    { href: "/teacher-dashboard", label: "Dashboard", icon: BarChart3 },
    { href: "/my-classes", label: "My Classes", icon: BookOpen },
    { href: "/lesson-plans", label: "Lesson Plans", icon: GraduationCap },
    { href: "/student-progress", label: "Student Progress", icon: Trophy },
  ]

  const publicNavItems: NavItem[] = [
    { href: "/#subjects", label: "Subjects" },
    { href: "/#grades", label: "Grades" },
    { href: "/#features", label: "Features" },
    { href: "/about", label: "About" },
  ]

  const navItems = isAuthenticated ? (userRole === "teacher" ? teacherNavItems : studentNavItems) : publicNavItems

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Handle search functionality
      console.log("Searching for:", searchQuery)
    }
  }

  return (
    <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={isAuthenticated ? "/dashboard" : "/"} className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">LearnGH</span>
            {isAuthenticated && userRole === "student" && (
              <Badge variant="secondary" className="ml-2 text-xs">
                {userGrade}
              </Badge>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium flex items-center space-x-1"
              >
                {isAuthenticated && "icon" in item && <item.icon className="w-4 h-4" />}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <div
                className={`relative flex items-center transition-all duration-200 ${
                  isSearchFocused ? "scale-105" : ""
                }`}
              >
                <Search className="absolute left-3 w-4 h-4 text-gray-500" />
                <Input
                  type="text"
                  placeholder={isAuthenticated ? "Search lessons, subjects..." : "Search..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="pl-10 pr-4 bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-300 transition-all"
                />
                {searchQuery && (
                  <Button type="submit" size="sm" className="absolute right-1 h-8 px-3 bg-blue-600 hover:bg-blue-700">
                    Search
                  </Button>
                )}
              </div>
            </form>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Icon for Mobile */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Search className="w-5 h-5" />
            </Button>

            {isAuthenticated ? (
              <>
                {/* Notifications */}
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="w-5 h-5" />
                  {notifications > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center p-0">
                      {notifications > 9 ? "9+" : notifications}
                    </Badge>
                  )}
                </Button>

                {/* User Profile Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center space-x-2 hover:bg-gray-100">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <div className="hidden sm:block text-left">
                        <p className="text-sm font-medium text-gray-900">{userName}</p>
                        <p className="text-xs text-gray-500">{userRole === "teacher" ? "Teacher" : userGrade}</p>
                      </div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    {userRole === "student" && (
                      <DropdownMenuItem>
                        <Trophy className="mr-2 h-4 w-4" />
                        <span>Achievements</span>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                {/* Authentication Buttons */}
                <Button variant="ghost" className="text-gray-700 hover:text-gray-900">
                  Sign In
                </Button>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Get Started
                </Button>
              </>
            )}

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-6">
                  {/* Mobile Search */}
                  <form onSubmit={handleSearch} className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <Input
                      type="text"
                      placeholder={isAuthenticated ? "Search lessons..." : "Search..."}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </form>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 font-medium py-2"
                      >
                        {isAuthenticated && "icon" in item && <item.icon className="w-5 h-5" />}
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </nav>

                  {!isAuthenticated && (
                    <div className="flex flex-col space-y-3 pt-6 border-t">
                      <Button variant="outline" className="w-full">
                        Sign In
                      </Button>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">Get Started</Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar