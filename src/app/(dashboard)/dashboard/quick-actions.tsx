"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, BookOpen, Users, Calendar, MessageSquare, Trophy } from "lucide-react"

export default function QuickActions() {
  const actions = [
    {
      title: "Ask AI Tutor",
      description: "Get instant help with any question",
      icon: Brain,
      variant: "gradient" as const,
      action: () => console.log("Open AI Tutor"),
    },
    {
      title: "Continue Learning",
      description: "Resume your current lesson",
      icon: BookOpen,
      variant: "outline" as const,
      action: () => console.log("Continue Learning"),
    },
    {
      title: "Join Study Group",
      description: "Study with your classmates",
      icon: Users,
      variant: "outline" as const,
      action: () => console.log("Join Study Group"),
    },
    {
      title: "Schedule Session",
      description: "Book a tutoring session",
      icon: Calendar,
      variant: "outline" as const,
      action: () => console.log("Schedule Session"),
    },
    {
      title: "Practice Quiz",
      description: "Test your knowledge",
      icon: MessageSquare,
      variant: "outline" as const,
      action: () => console.log("Practice Quiz"),
    },
    {
      title: "View Achievements",
      description: "See your progress badges",
      icon: Trophy,
      variant: "outline" as const,
      action: () => console.log("View Achievements"),
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              size="lg"
              icon={<action.icon className="w-4 h-4" />}
              onClick={action.action}
              className="h-auto p-4 flex-col space-y-2 text-left"
            >
              <span className="font-semibold text-sm">{action.title}</span>
              <span className="text-xs opacity-75 font-normal">{action.description}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
