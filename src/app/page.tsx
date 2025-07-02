import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  BookOpen,
  Brain,
  Users,
  ChevronRight,
  Sparkles,
  GraduationCap,
  Target,
  Award,
  Zap,
  Globe,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/layout/navbar"

export default function HomePage() {
  const subjects = [
    { name: "Mathematics", color: "bg-slate-100 text-slate-700 hover:bg-slate-200" },
    { name: "English", color: "bg-slate-100 text-slate-700 hover:bg-slate-200" },
    { name: "Science", color: "bg-slate-100 text-slate-700 hover:bg-slate-200" },
    { name: "Social Studies", color: "bg-slate-100 text-slate-700 hover:bg-slate-200" },
    { name: "Ghanaian Languages", color: "bg-slate-100 text-slate-700 hover:bg-slate-200" },
    { name: "Creative Arts", color: "bg-slate-100 text-slate-700 hover:bg-slate-200" },
  ]

  const grades = [
    { grade: "Grade 1", students: "Ages 6-7", subjects: 4 },
    { grade: "Grade 2", students: "Ages 7-8", subjects: 5 },
    { grade: "Grade 3", students: "Ages 8-9", subjects: 6 },
    { grade: "Grade 4", students: "Ages 9-10", subjects: 6 },
    { grade: "Grade 5", students: "Ages 10-11", subjects: 6 },
    { grade: "Grade 6", students: "Ages 11-12", subjects: 6 },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar isAuthenticated={false} />

      {/* Sophisticated Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/50 to-white py-24 lg:py-32">
        {/* Subtle background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Geometric grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>

          {/* Floating orbs with subtle gradients */}
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-br from-green-100/30 to-blue-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-10 w-48 h-48 bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Refined headline section */}
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <Badge className="bg-white/80 backdrop-blur-sm text-slate-600 border border-slate-200/50 shadow-sm mb-8 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Education for Ghana
            </Badge>

            <h1 className="text-5xl lg:text-7xl font-light text-slate-900 leading-[1.1] mb-8 tracking-tight">
              learnfinity.AI is{" "}
              <span className="font-medium bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 bg-clip-text text-transparent">
                intelligent learning
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-light max-w-3xl mx-auto">
              Personalized education experiences designed for Ghanaian elementary students, powered by advanced AI
              technology and curriculum expertise.
            </p>
          </div>

          {/* Sophisticated floating cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20 max-w-7xl mx-auto">
            {/* Comprehensive Curriculum Card */}
            <Card className="group relative bg-white/60 backdrop-blur-xl border-0 shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_64px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-xl"></div>
              <CardContent className="relative p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500/10 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                  <GraduationCap className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-medium text-slate-900 mb-6">Comprehensive Curriculum</h3>
                <div className="space-y-3 text-slate-600 mb-8">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Mathematics • English • Science</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Social Studies • Languages</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Creative Arts • Physical Education</span>
                  </div>
                </div>
                <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ChevronRight className="w-5 h-5 text-blue-500" />
                </div>
              </CardContent>
            </Card>

            {/* Trusted Platform Card */}
            <Card className="group relative bg-white/60 backdrop-blur-xl border-0 shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_64px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent rounded-xl"></div>
              <CardContent className="relative p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500/10 to-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Award className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-medium text-slate-900 mb-6">Trusted by Educators</h3>
                <div className="space-y-4 text-slate-600 mb-8">
                  <div className="flex items-center justify-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <span>
                      <strong className="text-slate-900">50,000+</strong> questions answered
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Users className="w-5 h-5 text-green-500" />
                    <span>
                      <strong className="text-slate-900">5,000+</strong> active students
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Globe className="w-5 h-5 text-green-500" />
                    <span>Ghana Education Service aligned</span>
                  </div>
                </div>
                <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ChevronRight className="w-5 h-5 text-green-500" />
                </div>
              </CardContent>
            </Card>

            {/* AI Experience Card */}
            <Card className="group relative bg-white/60 backdrop-blur-xl border-0 shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_64px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent rounded-xl"></div>
              <CardContent className="relative p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/10 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Brain className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-2xl font-medium text-slate-900 mb-6">Intelligent Experience</h3>
                <div className="space-y-4 text-slate-600 mb-8">
                  <div className="flex items-center justify-center space-x-3">
                    <Zap className="w-5 h-5 text-purple-500" />
                    <span>Instant AI tutoring support</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Target className="w-5 h-5 text-purple-500" />
                    <span>Adaptive learning paths</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-purple-500" />
                    <span>Real-time progress analytics</span>
                  </div>
                </div>
                <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ChevronRight className="w-5 h-5 text-purple-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Refined CTA section */}
          <div className="text-center mb-16">
            <Button
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white text-lg px-12 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 font-medium"
            >
              <BookOpen className="w-5 h-5 mr-3" />
              Begin Your Learning Journey
            </Button>
          </div>

          {/* Minimalist stats */}
          <div className="flex justify-center items-center space-x-12 text-sm text-slate-500">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
              <span>5,000+ Students</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
              <span>200+ Schools</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
              <span>Curriculum Aligned</span>
            </div>
          </div>
        </div>

        {/* Subtle floating elements */}
        <div className="absolute top-1/3 left-12 hidden lg:block">
          <div className="w-3 h-3 bg-blue-400/60 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-1/2 right-16 hidden lg:block">
          <div className="w-2 h-2 bg-green-400/60 rounded-full animate-pulse delay-300"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/3 hidden lg:block">
          <div className="w-4 h-4 bg-purple-400/60 rounded-full animate-pulse delay-700"></div>
        </div>
      </section>

      {/* Refined Grades Section */}
      <section id="grades" className="py-24 bg-slate-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 tracking-tight">
              Learning paths for <span className="font-medium">every grade</span>
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              Curriculum-aligned content designed specifically for Ghanaian elementary education standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {grades.map((grade, index) => (
              <Card
                key={index}
                className="group bg-white/80 backdrop-blur-sm border-0 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-medium text-slate-900">{grade.grade}</h3>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <p className="text-slate-600 mb-2 font-light">{grade.students}</p>
                  <p className="text-sm text-slate-500">{grade.subjects} subjects available</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Refined Subjects Section */}
      <section id="subjects" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 tracking-tight">
              Explore subjects with <span className="font-medium">AI guidance</span>
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              Interactive lessons with intelligent assistance whenever you need it
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
            {subjects.map((subject, index) => (
              <Badge
                key={index}
                className={`${subject.color} px-6 py-3 text-sm font-medium cursor-pointer transition-all duration-300 hover:scale-105 border-0 shadow-sm hover:shadow-md`}
              >
                {subject.name}
              </Badge>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/80 backdrop-blur-sm text-slate-700 border-slate-200 hover:bg-white hover:border-slate-300 px-8 py-3 rounded-full font-medium"
            >
              Explore All Subjects
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Refined Features Section */}
      <section id="features" className="py-24 bg-slate-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 tracking-tight">
              Why students <span className="font-medium">choose learnfinity.AI</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center bg-white/80 backdrop-blur-sm border-0 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1">
              <CardContent className="p-10 space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/10 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-medium text-slate-900">AI Tutor</h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  Get instant help and explanations from our intelligent assistant during any lesson
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/80 backdrop-blur-sm border-0 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1">
              <CardContent className="p-10 space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/10 to-green-600/20 rounded-2xl flex items-center justify-center mx-auto">
                  <BookOpen className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-medium text-slate-900">Interactive Lessons</h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  Engaging content that adapts to your unique learning style and pace
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/80 backdrop-blur-sm border-0 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1">
              <CardContent className="p-10 space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-medium text-slate-900">Track Progress</h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  Monitor your learning journey with detailed analytics and insights
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Refined CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 tracking-tight leading-tight">
              Ready to begin your <span className="font-medium">learning journey?</span>
            </h2>
            <p className="text-xl text-slate-600 font-light">
              Join thousands of Ghanaian students already learning with intelligent AI assistance
            </p>
            <Button
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white text-lg px-12 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 font-medium"
            >
              Start Learning Today
            </Button>
          </div>
        </div>
      </section>

      {/* Minimalist Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-light">learnfinity.AI</span>
              </div>
              <p className="text-slate-400 font-light leading-relaxed">
                Intelligent learning platform for Ghanaian elementary students
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-6 text-slate-200">Subjects</h4>
              <ul className="space-y-3 text-slate-400 font-light">
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-300">
                    Mathematics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-300">
                    English
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-300">
                    Science
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-300">
                    Social Studies
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-6 text-slate-200">Grades</h4>
              <ul className="space-y-3 text-slate-400 font-light">
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-300">
                    Grade 1-2
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-300">
                    Grade 3-4
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-300">
                    Grade 5-6
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-6 text-slate-200">Support</h4>
              <ul className="space-y-3 text-slate-400 font-light">
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-300">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-300">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-300">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 font-light">
            <p>&copy; 2025 learnfinity.AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
