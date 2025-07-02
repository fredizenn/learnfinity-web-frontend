"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Brain, Trophy, Target, Zap, ArrowRight, Play, MessageCircle } from "lucide-react"
import Link from "next/link"

interface StudentDashboardProps {
  userName?: string
  userGrade?: string
}

export default function StudentDashboard({ userName = "Kwame", userGrade = "Grade 4" }: StudentDashboardProps) {
  const todayProgress = 75
  const weeklyStreak = 5
  const aiSessions = 12

  const subjects = [
    {
      name: "Mathematics",
      progress: 85,
      nextLesson: "Addition & Subtraction",
      color: "bg-blue-500",
      icon: Target,
      lessons: 24,
    },
    {
      name: "English",
      progress: 72,
      nextLesson: "Reading Comprehension",
      color: "bg-green-500",
      icon: BookOpen,
      lessons: 18,
    },
    {
      name: "Science",
      progress: 68,
      nextLesson: "Plants & Animals",
      color: "bg-purple-500",
      icon: Brain,
      lessons: 15,
    },
    {
      name: "Social Studies",
      progress: 91,
      nextLesson: "Ghana's Regions",
      color: "bg-orange-500",
      icon: Trophy,
      lessons: 12,
    },
  ]

  return (
    <div className="space-y-8">
      {/* Sophisticated Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20" />
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/10 to-purple-100/10 rounded-full blur-3xl" />

        <div className="relative px-8 py-12">
          {/* Welcome Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h1 className="text-4xl font-light text-slate-800">
                Welcome back, <span className="font-medium">{userName}</span>
              </h1>
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
                {userGrade}
              </Badge>
            </div>
            <p className="text-slate-600 text-lg font-light">Ready to continue your learning journey today?</p>
          </div>

          {/* Hero Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Today's Progress */}
            <Card className="group hover:scale-105 transition-all duration-500 bg-white/70 backdrop-blur-sm border-slate-200/50 hover:shadow-xl hover:shadow-blue-500/10">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                    <Target className="w-6 h-6" />
                  </div>
                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                    {todayProgress}%
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium text-slate-800 mb-1">Today&apos;s Progress</h3>
                  <p className="text-sm text-slate-600 font-light">Keep up the great work!</p>
                </div>
                <div className="space-y-2">
                  <Progress value={todayProgress} className="h-2" />
                  <p className="text-xs text-slate-500 font-light">3 of 4 lessons completed</p>
                </div>
              </CardContent>
            </Card>

            {/* Learning Streak */}
            <Card className="group hover:scale-105 transition-all duration-500 bg-white/70 backdrop-blur-sm border-slate-200/50 hover:shadow-xl hover:shadow-green-500/10">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white">
                    <Zap className="w-6 h-6" />
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    {weeklyStreak} days
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium text-slate-800 mb-1">Learning Streak</h3>
                  <p className="text-sm text-slate-600 font-light">You&apos;re on fire! 🔥</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-6 h-6 rounded-full ${i < weeklyStreak ? "bg-green-500" : "bg-slate-200"}`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI Tutor Sessions */}
            <Card className="group hover:scale-105 transition-all duration-500 bg-white/70 backdrop-blur-sm border-slate-200/50 hover:shadow-xl hover:shadow-purple-500/10">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <Badge variant="outline" className="text-purple-600 border-purple-200">
                    {aiSessions}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium text-slate-800 mb-1">AI Tutor Sessions</h3>
                  <p className="text-sm text-slate-600 font-light">This week</p>
                </div>
                <Button size="sm" className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded-xl">
                  Start New Session
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Subjects Grid */}
      <div className="px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-medium text-slate-800">Your Subjects</h2>
          <Button variant="outline" size="sm">
            View All
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-all duration-300 bg-white border-slate-200/50 hover:shadow-lg"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-xl ${subject.color} text-white`}>
                    <subject.icon className="w-5 h-5" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {subject.lessons} lessons
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium text-slate-800 mb-1">{subject.name}</h3>
                  <p className="text-sm text-slate-600">Next: {subject.nextLesson}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Progress</span>
                    <span className="font-medium">{subject.progress}%</span>
                  </div>
                  <Progress value={subject.progress} className="h-2" />
                </div>
                <Link href={`/lesson/${subject.name.toLowerCase().replace(" ", "-")}`}>
                  <Button size="sm" className="w-full group-hover:bg-slate-800 transition-colors">
                    <Play className="w-4 h-4 mr-2" />
                    Continue Learning
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
