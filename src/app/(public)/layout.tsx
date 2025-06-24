import type React from "react"
// Layout for public pages (landing, about, etc.)
import PageLayout from "@/components/layout/PageLayout"

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PageLayout isAuthenticated={false} showFooter={true} fullWidth={false}>
      {children}
    </PageLayout>
  )
}
