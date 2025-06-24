import type React from "react"
// Layout for authenticated dashboard pages
import PageLayout from "@/components/layout/PageLayout"
import DashboardSidebar from "@/components/layout/dashboard-sidebar"


// This would typically get user data from auth context/session
async function getDashboardLayout() {
  // In a real app, you'd get this from your auth system
  return {
    isAuthenticated: true,
    userRole: "student" as const,
    userName: "Kwame Asante",
    userGrade: "Grade 4",
    notifications: 3,
  }
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const layoutData = await getDashboardLayout()

  return (
    <PageLayout
      {...layoutData}
      showSidebar={true}
      sidebarContent={<DashboardSidebar userRole={layoutData.userRole} />}
      showFooter={true}
    >
      {children}
    </PageLayout>
  )
}
