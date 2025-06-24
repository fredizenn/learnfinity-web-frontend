import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import landingPage from "@/images/landing-page.png"
import { Search, BookOpen, Brain, Users, Star, ChevronRight, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/layout/navbar"

export default function HomePage() {
  const subjects = [
    { name: "Mathematics", color: "bg-blue-100 text-blue-800 hover:bg-blue-200" },
    { name: "English", color: "bg-green-100 text-green-800 hover:bg-green-200" },
    { name: "Science", color: "bg-purple-100 text-purple-800 hover:bg-purple-200" },
    { name: "Social Studies", color: "bg-orange-100 text-orange-800 hover:bg-orange-200" },
    { name: "Ghanaian Languages", color: "bg-red-100 text-red-800 hover:bg-red-200" },
    { name: "Creative Arts", color: "bg-pink-100 text-pink-800 hover:bg-pink-200" },
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
   
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar isAuthenticated={false} />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-2 lg:py-2">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-2">
            <div className="space-y-2 -mt-48">
              <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-0">
                <Sparkles className="w-3 h-3 mr-1" />
                AI-Powered Learning for Ghana
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {/* Learn and grow with{" "} */}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  learnfinity.AI
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Personalized learning experiences for Ghanaian elementary students. Get instant help from our AI tutor,
                practice with interactive lessons, and master subjects at your own pace.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Start Learning Free
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-gray-700 border-gray-300 text-lg px-8">
                <Users className="w-5 h-5 mr-2" />
                For Teachers
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>Trusted by 10,000+ students</span>
              </div>
              <div className="flex items-center space-x-1">
                <Brain className="w-4 h-4 text-blue-500" />
                <span>AI-powered assistance</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl"></div>
            <Image
              src={landingPage}
              alt="Students learning with AI assistance"
              width={600}
              height={500}
              className="relative z-10 w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Grades Section */}
      <section id="grades" className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Learning paths for every grade</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Curriculum-aligned content designed specifically for Ghanaian elementary education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grades.map((grade, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{grade.grade}</h3>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <p className="text-gray-600 mb-2">{grade.students}</p>
                  <p className="text-sm text-gray-500">{grade.subjects} subjects available</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section id="subjects" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Explore subjects with AI guidance</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Interactive lessons with instant AI help whenever you need it
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {subjects.map((subject, index) => (
              <Badge
                key={index}
                className={`${subject.color} px-4 py-2 text-sm font-medium cursor-pointer transition-colors`}
              >
                {subject.name}
              </Badge>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="bg-white text-gray-700 border-gray-300">
              View All Subjects
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Why students love LearnGH</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">AI Tutor</h3>
                <p className="text-gray-600">
                  Get instant help and explanations from our AI assistant during any lesson
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Interactive Lessons</h3>
                <p className="text-gray-600">Engaging content that adapts to your learning style and pace</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold">Track Progress</h3>
                <p className="text-gray-600">Monitor your learning journey with detailed progress reports</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Ready to start your learning journey?</h2>
            <p className="text-xl text-gray-600">Join thousands of Ghanaian students already learning with AI</p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">learnfinity.AI</span>
              </div>
              <p className="text-gray-400">AI-powered learning platform for Ghanaian elementary students</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Subjects</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Mathematics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    English
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Science
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Social Studies
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Grades</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Grade 1-2
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Grade 3-4
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Grade 5-6
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LearnGH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
