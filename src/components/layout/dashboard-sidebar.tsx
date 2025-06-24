// Sample sidebar component for dashboard
import { Home, BookOpen, GraduationCap, BarChart3, Users, Settings, Trophy } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface DashboardSidebarProps {
  userRole: "student" | "teacher"
}

export default function DashboardSidebar({ userRole }: DashboardSidebarProps) {
  const studentItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard", active: true },
    { icon: BookOpen, label: "Subjects", href: "/subjects", active: false },
    { icon: GraduationCap, label: "My Lessons", href: "/lessons", active: false },
    { icon: BarChart3, label: "Progress", href: "/progress", active: false },
    { icon: Trophy, label: "Achievements", href: "/achievements", active: false },
    { icon: Users, label: "Study Groups", href: "/groups", active: false },
    { icon: Settings, label: "Settings", href: "/settings", active: false },
  ]

  const teacherItems = [
    { icon: Home, label: "Dashboard", href: "/teacher-dashboard", active: true },
    { icon: BookOpen, label: "My Classes", href: "/classes", active: false },
    { icon: GraduationCap, label: "Lesson Plans", href: "/lesson-plans", active: false },
    { icon: BarChart3, label: "Student Progress", href: "/student-progress", active: false },
    { icon: Settings, label: "Settings", href: "/settings", active: false },
  ]

  const items = userRole === "teacher" ? teacherItems : studentItems

  return (
    <nav className="px-4 space-y-2">
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
          {userRole === "teacher" ? "Teaching" : "Learning"}
        </h3>
      </div>
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={cn(
            "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors",
            item.active
              ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600"
              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
          )}
        >
          <item.icon className="w-5 h-5" />
          <span className="font-medium">{item.label}</span>
        </Link>
      ))}
    </nav>
  )
}
