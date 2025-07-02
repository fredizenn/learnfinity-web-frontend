"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Play, BookOpen } from "lucide-react"

const subjects = [
  {
    name: "Mathematics",
    progress: 85,
    color: "bg-blue-500",
    nextLesson: "Multiplication Tables",
    icon: "📊",
  },
  {
    name: "English",
    progress: 72,
    color: "bg-green-500",
    nextLesson: "Reading Comprehension",
    icon: "📚",
  },
  {
    name: "Science",
    progress: 91,
    color: "bg-purple-500",
    nextLesson: "Plant Life Cycle",
    icon: "🔬",
  },
  {
    name: "Social Studies",
    progress: 68,
    color: "bg-orange-500",
    nextLesson: "Ghana's Regions",
    icon: "🌍",
  },
]

export default function LearningProgress() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <BookOpen className="w-5 h-5" />
          <span>Learning Progress</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {subjects.map((subject, index) => (
          <div key={index} className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{subject.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{subject.name}</h3>
                  <p className="text-sm text-gray-500">Next: {subject.nextLesson}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-gray-900">{subject.progress}%</div>
                <Button size="sm" variant="outline" className="mt-1 bg-transparent">
                  <Play className="w-3 h-3 mr-1" />
                  Continue
                </Button>
              </div>
            </div>
            <Progress value={subject.progress} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
