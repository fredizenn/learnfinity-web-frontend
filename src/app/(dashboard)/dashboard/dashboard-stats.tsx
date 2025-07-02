"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Clock, Award, Users } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string | number
  change?: string
  icon: React.ComponentType<{ className?: string }>
  trend?: "up" | "down" | "neutral"
}

function StatsCard({ title, value, change, icon: Icon, trend = "neutral" }: StatsCardProps) {
  const trendColors = {
    up: "text-green-600",
    down: "text-red-600",
    neutral: "text-gray-600",
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p className={`text-xs ${trendColors[trend]} flex items-center mt-1`}>
            {trend === "up" && <TrendingUp className="w-3 h-3 mr-1" />}
            {change}
          </p>
        )}
      </CardContent>
    </Card>
  )
}

export default function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard title="Lessons Completed" value={87} change="+12 this week" icon={Award} trend="up" />
      <StatsCard title="Study Time" value="24.5 hrs" change="+2.5 hrs from last week" icon={Clock} trend="up" />
      <StatsCard title="Current Streak" value="7 days" change="Personal best!" icon={TrendingUp} trend="up" />
      <StatsCard title="Study Buddies" value={12} change="+3 new friends" icon={Users} trend="up" />
    </div>
  )
}
