"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, Clock, Users, Star, ChevronRight, Play, CheckCircle, Circle, Award } from "lucide-react"
import Link from "next/link"

interface Lesson {
  id: string
  title: string
  description: string
  duration: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  completed: boolean
  rating: number
  students: number
  topics: string[]
}

interface Subject {
  name: string
  icon: string
  color: string
  bgColor: string
  lessons: Lesson[]
  totalLessons: number
  completedLessons: number
  href: string
}

interface Grade {
  level: number
  name: string
  ageRange: string
  subjects: Subject[]
  description: string
}

export default function LessonsPage() {
  const [selectedGrade, setSelectedGrade] = useState<number>(1)
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const grades: Grade[] = [
    {
      level: 1,
      name: "Grade 1",
      ageRange: "Ages 6-7",
      description: "Foundation learning with basic concepts and early literacy",
      subjects: [
        {
          name: "Mathematics",
          icon: "🔢",
          color: "from-blue-500 to-blue-600",
          bgColor: "from-blue-50 to-blue-100",
          href: "/lesson/mathematics",
          totalLessons: 20,
          completedLessons: 15,
          lessons: [
            {
              id: "math-1-1",
              title: "Counting Numbers 1-10",
              description: "Learn to count from 1 to 10 with fun activities",
              duration: "15 min",
              difficulty: "Beginner",
              completed: true,
              rating: 4.8,
              students: 1250,
              topics: ["Counting", "Numbers", "Basic Math"],
            },
            {
              id: "math-1-2",
              title: "Simple Addition",
              description: "Adding numbers using objects and pictures",
              duration: "20 min",
              difficulty: "Beginner",
              completed: true,
              rating: 4.7,
              students: 1100,
              topics: ["Addition", "Basic Operations"],
            },
            {
              id: "math-1-3",
              title: "Shapes and Colors",
              description: "Identify basic shapes and their properties",
              duration: "18 min",
              difficulty: "Beginner",
              completed: false,
              rating: 4.9,
              students: 980,
              topics: ["Geometry", "Shapes", "Colors"],
            },
          ],
        },
        {
          name: "English",
          icon: "📖",
          color: "from-green-500 to-green-600",
          bgColor: "from-green-50 to-green-100",
          href: "/lesson/english",
          totalLessons: 18,
          completedLessons: 12,
          lessons: [
            {
              id: "eng-1-1",
              title: "Letter Recognition A-Z",
              description: "Learn to recognize and write all letters",
              duration: "25 min",
              difficulty: "Beginner",
              completed: true,
              rating: 4.6,
              students: 1400,
              topics: ["Alphabet", "Writing", "Recognition"],
            },
            {
              id: "eng-1-2",
              title: "Simple Words",
              description: "Build your first vocabulary with common words",
              duration: "20 min",
              difficulty: "Beginner",
              completed: false,
              rating: 4.8,
              students: 1200,
              topics: ["Vocabulary", "Reading", "Words"],
            },
          ],
        },
        {
          name: "Ghanaian Languages",
          icon: "🗣️",
          color: "from-red-500 to-red-600",
          bgColor: "from-red-50 to-red-100",
          href: "/lesson/ghanaian-languages",
          totalLessons: 15,
          completedLessons: 8,
          lessons: [
            {
              id: "gha-1-1",
              title: "Basic Twi Greetings",
              description: "Learn common greetings in Twi language",
              duration: "20 min",
              difficulty: "Beginner",
              completed: true,
              rating: 4.7,
              students: 950,
              topics: ["Twi", "Greetings", "Culture"],
            },
          ],
        },
      ],
    },
    {
      level: 2,
      name: "Grade 2",
      ageRange: "Ages 7-8",
      description: "Building on foundations with more complex concepts",
      subjects: [
        {
          name: "Mathematics",
          icon: "➕",
          color: "from-blue-500 to-blue-600",
          bgColor: "from-blue-50 to-blue-100",
          href: "/lesson/mathematics",
          totalLessons: 24,
          completedLessons: 18,
          lessons: [
            {
              id: "math-2-1",
              title: "Addition and Subtraction",
              description: "Master basic addition and subtraction with two-digit numbers",
              duration: "25 min",
              difficulty: "Beginner",
              completed: true,
              rating: 4.8,
              students: 1350,
              topics: ["Addition", "Subtraction", "Two-digit Numbers"],
            },
            {
              id: "math-2-2",
              title: "Time and Money",
              description: "Learn to tell time and understand Ghanaian currency",
              duration: "30 min",
              difficulty: "Intermediate",
              completed: false,
              rating: 4.6,
              students: 1200,
              topics: ["Time", "Money", "Currency", "Clock"],
            },
          ],
        },
        {
          name: "English",
          icon: "📚",
          color: "from-green-500 to-green-600",
          bgColor: "from-green-50 to-green-100",
          href: "/lesson/english",
          totalLessons: 22,
          completedLessons: 16,
          lessons: [
            {
              id: "eng-2-1",
              title: "Reading Simple Stories",
              description: "Read and understand short stories with pictures",
              duration: "30 min",
              difficulty: "Beginner",
              completed: true,
              rating: 4.7,
              students: 1450,
              topics: ["Reading", "Stories", "Comprehension"],
            },
          ],
        },
        {
          name: "Environmental Studies",
          icon: "🌱",
          color: "from-emerald-500 to-emerald-600",
          bgColor: "from-emerald-50 to-emerald-100",
          href: "/lesson/environmental-studies",
          totalLessons: 16,
          completedLessons: 10,
          lessons: [
            {
              id: "env-2-1",
              title: "Plants Around Us",
              description: "Identify common plants in Ghana and their uses",
              duration: "35 min",
              difficulty: "Beginner",
              completed: true,
              rating: 4.8,
              students: 1100,
              topics: ["Plants", "Environment", "Ghana", "Nature"],
            },
          ],
        },
      ],
    },
    {
      level: 3,
      name: "Grade 3",
      ageRange: "Ages 8-9",
      description: "Developing critical thinking and problem-solving skills",
      subjects: [
        {
          name: "Mathematics",
          icon: "✖️",
          color: "from-blue-500 to-blue-600",
          bgColor: "from-blue-50 to-blue-100",
          href: "/lesson/mathematics",
          totalLessons: 28,
          completedLessons: 20,
          lessons: [
            {
              id: "math-3-1",
              title: "Introduction to Multiplication",
              description: "Learn multiplication as repeated addition",
              duration: "30 min",
              difficulty: "Intermediate",
              completed: true,
              rating: 4.7,
              students: 1600,
              topics: ["Multiplication", "Repeated Addition", "Times Tables"],
            },
            {
              id: "math-3-2",
              title: "Fractions Basics",
              description: "Understanding halves, quarters, and simple fractions",
              duration: "35 min",
              difficulty: "Intermediate",
              completed: false,
              rating: 4.5,
              students: 1400,
              topics: ["Fractions", "Parts", "Whole Numbers"],
            },
          ],
        },
        {
          name: "English",
          icon: "✍️",
          color: "from-green-500 to-green-600",
          bgColor: "from-green-50 to-green-100",
          href: "/lesson/english",
          totalLessons: 26,
          completedLessons: 19,
          lessons: [
            {
              id: "eng-3-1",
              title: "Writing Paragraphs",
              description: "Learn to write simple paragraphs with main ideas",
              duration: "40 min",
              difficulty: "Intermediate",
              completed: true,
              rating: 4.6,
              students: 1550,
              topics: ["Writing", "Paragraphs", "Main Ideas"],
            },
          ],
        },
        {
          name: "Science",
          icon: "🔬",
          color: "from-purple-500 to-purple-600",
          bgColor: "from-purple-50 to-purple-100",
          href: "/lesson/science",
          totalLessons: 20,
          completedLessons: 12,
          lessons: [
            {
              id: "sci-3-1",
              title: "Water Cycle",
              description: "Understand how water moves in nature",
              duration: "40 min",
              difficulty: "Intermediate",
              completed: true,
              rating: 4.8,
              students: 1300,
              topics: ["Water", "Cycle", "Nature", "Weather"],
            },
          ],
        },
      ],
    },
    {
      level: 4,
      name: "Grade 4",
      ageRange: "Ages 9-10",
      description: "Advanced concepts with critical thinking and analysis",
      subjects: [
        {
          name: "Mathematics",
          icon: "📊",
          color: "from-blue-500 to-blue-600",
          bgColor: "from-blue-50 to-blue-100",
          href: "/lesson/mathematics",
          totalLessons: 32,
          completedLessons: 24,
          lessons: [
            {
              id: "math-4-1",
              title: "Multiplication Tables",
              description: "Master multiplication tables 1-12 with interactive exercises",
              duration: "30 min",
              difficulty: "Intermediate",
              completed: true,
              rating: 4.8,
              students: 2100,
              topics: ["Multiplication", "Tables", "Mental Math"],
            },
            {
              id: "math-4-2",
              title: "Fractions and Decimals",
              description: "Understanding fractions and their decimal equivalents",
              duration: "35 min",
              difficulty: "Intermediate",
              completed: true,
              rating: 4.7,
              students: 1850,
              topics: ["Fractions", "Decimals", "Number Systems"],
            },
            {
              id: "math-4-3",
              title: "Geometry and Measurement",
              description: "Calculate area, perimeter, and work with geometric shapes",
              duration: "40 min",
              difficulty: "Intermediate",
              completed: false,
              rating: 4.9,
              students: 1650,
              topics: ["Geometry", "Measurement", "Area", "Perimeter"],
            },
          ],
        },
        {
          name: "English",
          icon: "📚",
          color: "from-green-500 to-green-600",
          bgColor: "from-green-50 to-green-100",
          href: "/lesson/english",
          totalLessons: 28,
          completedLessons: 18,
          lessons: [
            {
              id: "eng-4-1",
              title: "Reading Comprehension",
              description: "Improve reading skills with engaging stories and questions",
              duration: "35 min",
              difficulty: "Intermediate",
              completed: true,
              rating: 4.8,
              students: 2200,
              topics: ["Reading", "Comprehension", "Analysis"],
            },
            {
              id: "eng-4-2",
              title: "Creative Writing",
              description: "Express yourself through creative storytelling and essays",
              duration: "40 min",
              difficulty: "Intermediate",
              completed: false,
              rating: 4.7,
              students: 1900,
              topics: ["Writing", "Creativity", "Expression"],
            },
          ],
        },
        {
          name: "Science",
          icon: "🔬",
          color: "from-purple-500 to-purple-600",
          bgColor: "from-purple-50 to-purple-100",
          href: "/lesson/science",
          totalLessons: 24,
          completedLessons: 15,
          lessons: [
            {
              id: "sci-4-1",
              title: "Plants and Animals",
              description: "Explore the fascinating world of living organisms",
              duration: "45 min",
              difficulty: "Intermediate",
              completed: true,
              rating: 4.9,
              students: 1800,
              topics: ["Biology", "Plants", "Animals", "Life Science"],
            },
          ],
        },
        {
          name: "Social Studies",
          icon: "🌍",
          color: "from-orange-500 to-orange-600",
          bgColor: "from-orange-50 to-orange-100",
          href: "/lesson/social-studies",
          totalLessons: 20,
          completedLessons: 12,
          lessons: [
            {
              id: "soc-4-1",
              title: "Ghana's History",
              description: "Discover the rich history and culture of Ghana",
              duration: "40 min",
              difficulty: "Intermediate",
              completed: true,
              rating: 4.8,
              students: 1700,
              topics: ["History", "Culture", "Ghana", "Heritage"],
            },
          ],
        },
      ],
    },
    {
      level: 5,
      name: "Grade 5",
      ageRange: "Ages 10-11",
      description: "Complex problem-solving and independent learning skills",
      subjects: [
        {
          name: "Mathematics",
          icon: "📐",
          color: "from-blue-500 to-blue-600",
          bgColor: "from-blue-50 to-blue-100",
          href: "/lesson/mathematics",
          totalLessons: 35,
          completedLessons: 22,
          lessons: [
            {
              id: "math-5-1",
              title: "Advanced Fractions",
              description: "Add, subtract, multiply and divide fractions",
              duration: "45 min",
              difficulty: "Advanced",
              completed: true,
              rating: 4.7,
              students: 1900,
              topics: ["Fractions", "Operations", "Advanced Math"],
            },
            {
              id: "math-5-2",
              title: "Percentages and Ratios",
              description: "Understanding percentages, ratios, and proportions",
              duration: "40 min",
              difficulty: "Advanced",
              completed: false,
              rating: 4.6,
              students: 1750,
              topics: ["Percentages", "Ratios", "Proportions"],
            },
            {
              id: "math-5-3",
              title: "Data and Graphs",
              description: "Create and interpret charts, graphs, and data",
              duration: "50 min",
              difficulty: "Advanced",
              completed: false,
              rating: 4.8,
              students: 1600,
              topics: ["Data", "Graphs", "Statistics", "Charts"],
            },
          ],
        },
        {
          name: "English",
          icon: "📝",
          color: "from-green-500 to-green-600",
          bgColor: "from-green-50 to-green-100",
          href: "/lesson/english",
          totalLessons: 30,
          completedLessons: 20,
          lessons: [
            {
              id: "eng-5-1",
              title: "Essay Writing",
              description: "Write structured essays with introduction, body, and conclusion",
              duration: "50 min",
              difficulty: "Advanced",
              completed: true,
              rating: 4.7,
              students: 2000,
              topics: ["Essays", "Writing", "Structure", "Arguments"],
            },
            {
              id: "eng-5-2",
              title: "Poetry Analysis",
              description: "Understand and analyze different types of poetry",
              duration: "45 min",
              difficulty: "Advanced",
              completed: false,
              rating: 4.5,
              students: 1800,
              topics: ["Poetry", "Analysis", "Literature", "Interpretation"],
            },
          ],
        },
        {
          name: "Science",
          icon: "⚗️",
          color: "from-purple-500 to-purple-600",
          bgColor: "from-purple-50 to-purple-100",
          href: "/lesson/science",
          totalLessons: 28,
          completedLessons: 16,
          lessons: [
            {
              id: "sci-5-1",
              title: "Human Body Systems",
              description: "Learn about different systems in the human body",
              duration: "50 min",
              difficulty: "Advanced",
              completed: true,
              rating: 4.8,
              students: 1850,
              topics: ["Biology", "Human Body", "Systems", "Health"],
            },
            {
              id: "sci-5-2",
              title: "Forces and Motion",
              description: "Understand basic physics concepts of force and motion",
              duration: "45 min",
              difficulty: "Advanced",
              completed: false,
              rating: 4.6,
              students: 1650,
              topics: ["Physics", "Forces", "Motion", "Energy"],
            },
          ],
        },
        {
          name: "Social Studies",
          icon: "🏛️",
          color: "from-orange-500 to-orange-600",
          bgColor: "from-orange-50 to-orange-100",
          href: "/lesson/social-studies",
          totalLessons: 25,
          completedLessons: 15,
          lessons: [
            {
              id: "soc-5-1",
              title: "West African Civilizations",
              description: "Explore ancient kingdoms and empires of West Africa",
              duration: "50 min",
              difficulty: "Advanced",
              completed: true,
              rating: 4.9,
              students: 1700,
              topics: ["History", "West Africa", "Civilizations", "Kingdoms"],
            },
          ],
        },
      ],
    },
    {
      level: 6,
      name: "Grade 6",
      ageRange: "Ages 11-12",
      description: "Preparation for junior high with advanced concepts",
      subjects: [
        {
          name: "Mathematics",
          icon: "🧮",
          color: "from-blue-500 to-blue-600",
          bgColor: "from-blue-50 to-blue-100",
          href: "/lesson/mathematics",
          totalLessons: 38,
          completedLessons: 25,
          lessons: [
            {
              id: "math-6-1",
              title: "Algebra Basics",
              description: "Introduction to algebraic expressions and equations",
              duration: "50 min",
              difficulty: "Advanced",
              completed: true,
              rating: 4.6,
              students: 1800,
              topics: ["Algebra", "Equations", "Variables", "Expressions"],
            },
            {
              id: "math-6-2",
              title: "Advanced Geometry",
              description: "Work with angles, triangles, and coordinate geometry",
              duration: "55 min",
              difficulty: "Advanced",
              completed: false,
              rating: 4.7,
              students: 1650,
              topics: ["Geometry", "Angles", "Triangles", "Coordinates"],
            },
            {
              id: "math-6-3",
              title: "Problem Solving Strategies",
              description: "Advanced problem-solving techniques and logical thinking",
              duration: "45 min",
              difficulty: "Advanced",
              completed: false,
              rating: 4.8,
              students: 1500,
              topics: ["Problem Solving", "Logic", "Critical Thinking", "Strategies"],
            },
          ],
        },
        {
          name: "English",
          icon: "📖",
          color: "from-green-500 to-green-600",
          bgColor: "from-green-50 to-green-100",
          href: "/lesson/english",
          totalLessons: 32,
          completedLessons: 22,
          lessons: [
            {
              id: "eng-6-1",
              title: "Advanced Grammar",
              description: "Master complex grammar rules and sentence structures",
              duration: "45 min",
              difficulty: "Advanced",
              completed: true,
              rating: 4.5,
              students: 1950,
              topics: ["Grammar", "Syntax", "Sentence Structure", "Language Rules"],
            },
            {
              id: "eng-6-2",
              title: "Research and Presentation",
              description: "Learn to research topics and present findings effectively",
              duration: "60 min",
              difficulty: "Advanced",
              completed: false,
              rating: 4.7,
              students: 1750,
              topics: ["Research", "Presentation", "Communication", "Information"],
            },
          ],
        },
        {
          name: "Science",
          icon: "🌟",
          color: "from-purple-500 to-purple-600",
          bgColor: "from-purple-50 to-purple-100",
          href: "/lesson/science",
          totalLessons: 30,
          completedLessons: 18,
          lessons: [
            {
              id: "sci-6-1",
              title: "Chemistry Basics",
              description: "Introduction to atoms, molecules, and chemical reactions",
              duration: "55 min",
              difficulty: "Advanced",
              completed: true,
              rating: 4.8,
              students: 1600,
              topics: ["Chemistry", "Atoms", "Molecules", "Reactions"],
            },
            {
              id: "sci-6-2",
              title: "Earth and Space",
              description: "Explore our planet and the solar system",
              duration: "50 min",
              difficulty: "Advanced",
              completed: false,
              rating: 4.9,
              students: 1550,
              topics: ["Earth Science", "Space", "Solar System", "Astronomy"],
            },
          ],
        },
        {
          name: "Social Studies",
          icon: "🗺️",
          color: "from-orange-500 to-orange-600",
          bgColor: "from-orange-50 to-orange-100",
          href: "/lesson/social-studies",
          totalLessons: 28,
          completedLessons: 16,
          lessons: [
            {
              id: "soc-6-1",
              title: "Global Geography",
              description: "Study world geography, climate, and cultural diversity",
              duration: "50 min",
              difficulty: "Advanced",
              completed: true,
              rating: 4.7,
              students: 1650,
              topics: ["Geography", "World", "Climate", "Culture"],
            },
            {
              id: "soc-6-2",
              title: "Citizenship and Democracy",
              description: "Understanding rights, responsibilities, and democratic processes",
              duration: "45 min",
              difficulty: "Advanced",
              completed: false,
              rating: 4.6,
              students: 1500,
              topics: ["Citizenship", "Democracy", "Rights", "Government"],
            },
          ],
        },
        {
          name: "ICT",
          icon: "💻",
          color: "from-indigo-500 to-indigo-600",
          bgColor: "from-indigo-50 to-indigo-100",
          href: "/lesson/ict",
          totalLessons: 20,
          completedLessons: 10,
          lessons: [
            {
              id: "ict-6-1",
              title: "Computer Basics",
              description: "Learn computer fundamentals and basic operations",
              duration: "40 min",
              difficulty: "Intermediate",
              completed: true,
              rating: 4.8,
              students: 1400,
              topics: ["Computers", "Technology", "Digital Literacy", "Basics"],
            },
            {
              id: "ict-6-2",
              title: "Internet Safety",
              description: "Stay safe online and understand digital citizenship",
              duration: "35 min",
              difficulty: "Intermediate",
              completed: false,
              rating: 4.9,
              students: 1300,
              topics: ["Internet", "Safety", "Digital Citizenship", "Online"],
            },
          ],
        },
      ],
    },
  ]

  const currentGrade = grades.find((g) => g.level === selectedGrade) || grades[0]
  const currentSubject = selectedSubject ? currentGrade.subjects.find((s) => s.name === selectedSubject) : null

  const filteredLessons = currentSubject
    ? currentSubject.lessons.filter(
        (lesson) =>
          lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          lesson.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          lesson.topics.some((topic) => topic.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    : []

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

  return (
    <div className="space-y-8 p-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl lg:text-5xl font-light text-slate-900 tracking-tight">
          Explore <span className="font-medium text-blue-600">Lessons</span>
        </h1>
        <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">
          Discover engaging lessons tailored for Ghanaian elementary education
        </p>
      </div>

      {/* Grade Selection */}
      <div className="flex justify-center">
        <div className="flex gap-2 p-2 bg-slate-100 rounded-xl overflow-x-auto">
          {grades.map((grade) => (
            <Button
              key={grade.level}
              variant={selectedGrade === grade.level ? "default" : "ghost"}
              onClick={() => {
                setSelectedGrade(grade.level)
                setSelectedSubject(null)
              }}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                selectedGrade === grade.level
                  ? "bg-white shadow-sm text-slate-900"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {grade.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Grade Info */}
      <Card className="bg-gradient-to-r from-slate-50 to-white border-0 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-medium text-slate-900 mb-2">{currentGrade.name}</h2>
          <p className="text-slate-600 mb-1">{currentGrade.ageRange}</p>
          <p className="text-slate-500">{currentGrade.description}</p>
        </CardContent>
      </Card>

      {!selectedSubject ? (
        /* Subject Selection */
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentGrade.subjects.map((subject, index) => (
            <Card
              key={index}
              className="group bg-white/80 backdrop-blur-sm border-0 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedSubject(subject.name)}
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${subject.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-3xl">{subject.icon}</span>
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-4">{subject.name}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>{subject.totalLessons} lessons</span>
                    <span>{Math.round((subject.completedLessons / subject.totalLessons) * 100)}% complete</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className={`bg-gradient-to-r ${subject.color} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${(subject.completedLessons / subject.totalLessons) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-slate-100 text-slate-600">
                    {subject.completedLessons}/{subject.totalLessons}
                  </Badge>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        /* Lesson List */
        <div className="space-y-6">
          {/* Subject Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => setSelectedSubject(null)}
                className="text-slate-600 hover:text-slate-900"
              >
                ← Back to Subjects
              </Button>
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${currentSubject?.bgColor} rounded-xl flex items-center justify-center`}
                >
                  <span className="text-2xl">{currentSubject?.icon}</span>
                </div>
                <div>
                  <h2 className="text-2xl font-medium text-slate-900">{currentSubject?.name}</h2>
                  <p className="text-slate-600">
                    {currentSubject?.completedLessons}/{currentSubject?.totalLessons} lessons completed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search lessons..."
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

          {/* Lessons Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {filteredLessons.map((lesson) => (
              <Card
                key={lesson.id}
                className="group bg-white/80 backdrop-blur-sm border-0 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {lesson.completed ? (
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      ) : (
                        <Circle className="w-6 h-6 text-slate-300 flex-shrink-0" />
                      )}
                      <div>
                        <h3 className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                          {lesson.title}
                        </h3>
                        <p className="text-sm text-slate-600 mt-1">{lesson.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {lesson.topics.map((topic, index) => (
                      <Badge key={index} variant="secondary" className="bg-slate-100 text-slate-600 text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4 text-sm text-slate-600">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {lesson.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {lesson.students.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        {lesson.rating}
                      </div>
                    </div>
                    <Badge className={getDifficultyColor(lesson.difficulty)}>{lesson.difficulty}</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link href={`${currentSubject?.href}?lesson=${lesson.id}`} className="flex-1">
                      <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                        {lesson.completed ? (
                          <>
                            <Award className="w-4 h-4 mr-2" />
                            Review Lesson
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4 mr-2" />
                            Start Lesson
                          </>
                        )}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredLessons.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">No lessons found</h3>
              <p className="text-slate-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
