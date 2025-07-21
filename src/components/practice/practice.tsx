"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Search,
  Filter,
  Clock,
  Star,
  Play,
  FileText,
  Trophy,
  Target,
  Brain,
  CheckCircle,
  Circle,
  Award,
  TrendingUp,
  BarChart3,
  Zap,
} from "lucide-react"
import Link from "next/link"

interface PracticeSession {
  id: string
  title: string
  description: string
  subject: string
  grade: number
  type: "practice" | "test" | "quiz"
  duration: string
  questions: number
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  completed: boolean
  score?: number
  attempts: number
  lastAttempt?: string
  topics: string[]
  icon: string
  color: string
  bgColor: string
}

interface TestResult {
  id: string
  sessionId: string
  score: number
  totalQuestions: number
  timeSpent: string
  completedAt: string
  subject: string
  grade: number
  strengths: string[]
  improvements: string[]
}

export default function PracticeTestsPage() {
  const [activeTab, setActiveTab] = useState<"practice" | "tests" | "results">("practice")
  const [selectedGrade, setSelectedGrade] = useState<number>(4)
  const [searchQuery, setSearchQuery] = useState("")

  const practiceSessions: PracticeSession[] = [
    {
      id: "math-4-practice-1",
      title: "Multiplication Tables Practice",
      description: "Practice multiplication tables 1-12 with instant feedback",
      subject: "Mathematics",
      grade: 4,
      type: "practice",
      duration: "15 min",
      questions: 20,
      difficulty: "Intermediate",
      completed: true,
      score: 85,
      attempts: 3,
      lastAttempt: "2 days ago",
      topics: ["Multiplication", "Tables", "Mental Math"],
      icon: "📊",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
    },
    {
      id: "eng-4-practice-1",
      title: "Reading Comprehension Practice",
      description: "Improve reading skills with short passages and questions",
      subject: "English",
      grade: 4,
      type: "practice",
      duration: "20 min",
      questions: 15,
      difficulty: "Intermediate",
      completed: false,
      attempts: 0,
      topics: ["Reading", "Comprehension", "Analysis"],
      icon: "📚",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
    },
    {
      id: "sci-4-practice-1",
      title: "Plants and Animals Quiz",
      description: "Test your knowledge about living organisms",
      subject: "Science",
      grade: 4,
      type: "quiz",
      duration: "10 min",
      questions: 12,
      difficulty: "Beginner",
      completed: true,
      score: 92,
      attempts: 1,
      lastAttempt: "1 week ago",
      topics: ["Biology", "Plants", "Animals"],
      icon: "🔬",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
    },
    {
      id: "math-4-test-1",
      title: "Fractions and Decimals Test",
      description: "Comprehensive test on fractions and decimal operations",
      subject: "Mathematics",
      grade: 4,
      type: "test",
      duration: "45 min",
      questions: 30,
      difficulty: "Advanced",
      completed: false,
      attempts: 0,
      topics: ["Fractions", "Decimals", "Operations"],
      icon: "📊",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
    },
    {
      id: "soc-4-test-1",
      title: "Ghana History Assessment",
      description: "Test your knowledge of Ghana's rich history and culture",
      subject: "Social Studies",
      grade: 4,
      type: "test",
      duration: "35 min",
      questions: 25,
      difficulty: "Intermediate",
      completed: true,
      score: 78,
      attempts: 2,
      lastAttempt: "3 days ago",
      topics: ["History", "Culture", "Ghana"],
      icon: "🌍",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100",
    },
  ]

  const testResults: TestResult[] = [
    {
      id: "result-1",
      sessionId: "math-4-practice-1",
      score: 85,
      totalQuestions: 20,
      timeSpent: "12 min",
      completedAt: "2024-01-15",
      subject: "Mathematics",
      grade: 4,
      strengths: ["Basic multiplication", "Mental calculation"],
      improvements: ["Complex word problems", "Speed accuracy"],
    },
    {
      id: "result-2",
      sessionId: "sci-4-practice-1",
      score: 92,
      totalQuestions: 12,
      timeSpent: "8 min",
      completedAt: "2024-01-10",
      subject: "Science",
      grade: 4,
      strengths: ["Animal classification", "Plant parts"],
      improvements: ["Ecosystem relationships"],
    },
    {
      id: "result-3",
      sessionId: "soc-4-test-1",
      score: 78,
      totalQuestions: 25,
      timeSpent: "32 min",
      completedAt: "2024-01-12",
      subject: "Social Studies",
      grade: 4,
      strengths: ["Historical dates", "Cultural traditions"],
      improvements: ["Geographic locations", "Economic concepts"],
    },
  ]

  const grades = [1, 2, 3, 4, 5, 6]

  const filteredSessions = practiceSessions.filter((session) => {
    const matchesGrade = session.grade === selectedGrade
    const matchesSearch =
      session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.topics.some((topic) => topic.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesType =
      activeTab === "practice" ? session.type === "practice" || session.type === "quiz" : session.type === "test"

    return matchesGrade && matchesSearch && (activeTab === "results" ? true : matchesType)
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "practice":
        return <Target className="w-4 h-4" />
      case "quiz":
        return <Brain className="w-4 h-4" />
      case "test":
        return <FileText className="w-4 h-4" />
      default:
        return <Play className="w-4 h-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "practice":
        return "bg-green-100 text-green-700"
      case "quiz":
        return "bg-blue-100 text-blue-700"
      case "test":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-700"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-700"
      case "Advanced":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 80) return "text-blue-600"
    if (score >= 70) return "text-yellow-600"
    return "text-red-600"
  }

  const averageScore =
    testResults.length > 0
      ? Math.round(testResults.reduce((sum, result) => sum + result.score, 0) / testResults.length)
      : 0

  const completedSessions = practiceSessions.filter((s) => s.completed).length
  const totalSessions = practiceSessions.length

  return (
    <div className="space-y-8 p-4">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl lg:text-5xl font-light text-slate-900 tracking-tight">
          Practice & <span className="font-medium text-blue-600">Tests</span>
        </h1>
        <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">
          Strengthen your knowledge with practice sessions and assessments
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600 mb-1">Completion Rate</p>
                <p className="text-3xl font-light text-slate-900">
                  {Math.round((completedSessions / totalSessions) * 100)}%
                </p>
                <p className="text-sm text-slate-600">
                  {completedSessions} of {totalSessions} completed
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600 mb-1">Average Score</p>
                <p className="text-3xl font-light text-slate-900">{averageScore}%</p>
                <p className="text-sm text-slate-600">Across all tests</p>
              </div>
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600 mb-1">Study Streak</p>
                <p className="text-3xl font-light text-slate-900">7</p>
                <p className="text-sm text-slate-600">Days in a row</p>
              </div>
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center">
        <div className="flex gap-2 p-2 bg-slate-100 rounded-xl">
          {[
            { key: "practice", label: "Practice", icon: <Target className="w-4 h-4" /> },
            { key: "tests", label: "Tests", icon: <FileText className="w-4 h-4" /> },
            { key: "results", label: "Results", icon: <TrendingUp className="w-4 h-4" /> },
          ].map((tab) => (
            <Button
              key={tab.key}
              variant={activeTab === tab.key ? "default" : "ghost"}
              onClick={() => setActiveTab(tab.key as any)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.key ? "bg-white shadow-sm text-slate-900" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {tab.icon}
              <span className="ml-2">{tab.label}</span>
            </Button>
          ))}
        </div>
      </div>

      {activeTab !== "results" && (
        <>
          {/* Grade Selection */}
          <div className="flex justify-center">
            <div className="flex gap-2 p-2 bg-slate-100 rounded-xl overflow-x-auto">
              {grades.map((grade) => (
                <Button
                  key={grade}
                  variant={selectedGrade === grade ? "default" : "ghost"}
                  onClick={() => setSelectedGrade(grade)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                    selectedGrade === grade
                      ? "bg-white shadow-sm text-slate-900"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Grade {grade}
                </Button>
              ))}
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex gap-4 max-w-md mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search practice sessions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/80 backdrop-blur-sm border-slate-200"
              />
            </div>
            <Button variant="outline" className="bg-white/80 backdrop-blur-sm border-slate-200">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </>
      )}

      {/* Content */}
      {activeTab === "results" ? (
        /* Results View */
        <div className="space-y-6">
          <Card className="bg-gradient-to-r from-slate-50 to-white border-0 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Your Performance Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-slate-900 mb-3">Recent Scores</h4>
                  <div className="space-y-3">
                    {testResults.slice(0, 3).map((result) => (
                      <div key={result.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <div>
                          <p className="font-medium text-slate-900">{result.subject}</p>
                          <p className="text-sm text-slate-600">{result.completedAt}</p>
                        </div>
                        <div className="text-right">
                          <p className={`text-lg font-medium ${getScoreColor(result.score)}`}>{result.score}%</p>
                          <p className="text-sm text-slate-600">{result.totalQuestions} questions</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-3">Progress Tracking</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-600">Overall Progress</span>
                        <span className="font-medium text-slate-900">{averageScore}%</span>
                      </div>
                      <Progress value={averageScore} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-600">Completion Rate</span>
                        <span className="font-medium text-slate-900">
                          {Math.round((completedSessions / totalSessions) * 100)}%
                        </span>
                      </div>
                      <Progress value={(completedSessions / totalSessions) * 100} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-6">
            {testResults.map((result) => (
              <Card
                key={result.id}
                className="bg-white/80 backdrop-blur-sm border-0 shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-medium text-slate-900">{result.subject} Assessment</h3>
                      <p className="text-sm text-slate-600">
                        Grade {result.grade} • {result.completedAt}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className={`text-2xl font-light ${getScoreColor(result.score)}`}>{result.score}%</p>
                      <p className="text-sm text-slate-600">{result.totalQuestions} questions</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {result.timeSpent}
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {Math.round((result.score / 100) * result.totalQuestions)} correct
                      </div>
                    </div>

                    <Separator />

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-green-600 mb-2">Strengths</h4>
                        <ul className="space-y-1">
                          {result.strengths.map((strength, index) => (
                            <li key={index} className="text-sm text-slate-600 flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                              {strength}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-orange-600 mb-2">Areas to Improve</h4>
                        <ul className="space-y-1">
                          {result.improvements.map((improvement, index) => (
                            <li key={index} className="text-sm text-slate-600 flex items-center gap-2">
                              <Circle className="w-3 h-3 text-orange-500 flex-shrink-0" />
                              {improvement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        /* Practice/Tests Grid */
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredSessions.map((session) => (
            <Card
              key={session.id}
              className="group bg-white/80 backdrop-blur-sm border-0 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${session.bgColor} rounded-xl flex items-center justify-center`}
                    >
                      <span className="text-2xl">{session.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                        {session.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {session.subject} • Grade {session.grade}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge className={getTypeColor(session.type)}>
                      {getTypeIcon(session.type)}
                      <span className="ml-1 capitalize">{session.type}</span>
                    </Badge>
                  </div>
                </div>

                <p className="text-sm text-slate-600 mb-4">{session.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {session.topics.map((topic, index) => (
                    <Badge key={index} variant="secondary" className="bg-slate-100 text-slate-600 text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4 text-sm text-slate-600">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {session.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      {session.questions} questions
                    </div>
                    {session.completed && session.score && (
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        {session.score}%
                      </div>
                    )}
                  </div>
                  <Badge className={getDifficultyColor(session.difficulty)}>{session.difficulty}</Badge>
                </div>

                {session.completed && (
                  <div className="mb-4 p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Last attempt: {session.lastAttempt}</span>
                      <span className="text-slate-600">Attempts: {session.attempts}</span>
                    </div>
                    {session.score && (
                      <div className="mt-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-600">Best Score</span>
                          <span className={`font-medium ${getScoreColor(session.score)}`}>{session.score}%</span>
                        </div>
                        <Progress value={session.score} className="h-2" />
                      </div>
                    )}
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <Link href={`/practice/${session.id}`} className="flex-1">
                    <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                      {session.completed ? (
                        <>
                          <Award className="w-4 h-4 mr-2" />
                          Practice Again
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Start {session.type === "test" ? "Test" : "Practice"}
                        </>
                      )}
                    </Button>
                  </Link>
                  {session.completed && (
                    <Button variant="outline" size="sm" className="px-3 bg-transparent">
                      <BarChart3 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {filteredSessions.length === 0 && activeTab !== "results" && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-medium text-slate-900 mb-2">No {activeTab} found</h3>
          <p className="text-slate-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  )
}
