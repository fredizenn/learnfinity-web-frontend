import React from 'react'

export default function HomePage() {
  const subjects = [
    { name: "Mathematics", color: "bg-blue-100 text-blue-700 hover:bg-blue-200" },
    { name: "English", color: "bg-green-100 text-green-700 hover:bg-green-200" },
    { name: "Science", color: "bg-purple-100 text-purple-700 hover:bg-purple-200" },
    { name: "Social Studies", color: "bg-orange-100 text-orange-700 hover:bg-orange-200" },
    { name: "Ghanaian Languages", color: "bg-red-100 text-red-700 hover:bg-red-200" },
    { name: "Creative Arts", color: "bg-pink-100 text-pink-700 hover:bg-pink-200" },
  ]

  const grades = [
    { grade: "Grade 1", students: "Ages 6-7", subjects: 4, color: "bg-blue-50 border-blue-200" },
    { grade: "Grade 2", students: "Ages 7-8", subjects: 5, color: "bg-green-50 border-green-200" },
    { grade: "Grade 3", students: "Ages 8-9", subjects: 6, color: "bg-purple-50 border-purple-200" },
    { grade: "Grade 4", students: "Ages 9-10", subjects: 6, color: "bg-orange-50 border-orange-200" },
    { grade: "Grade 5", students: "Ages 10-11", subjects: 6, color: "bg-red-50 border-red-200" },
    { grade: "Grade 6", students: "Ages 11-12", subjects: 6, color: "bg-pink-50 border-pink-200" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* GeoGebra-style Navbar */}
      <nav className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-gray-800">learnfinity.AI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Math Resources</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">AI Tutor</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Classroom</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">About</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium">
              Sign In
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - GeoGebra Style */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Learn and explore math in a{" "}
                <span className="text-blue-600">smarter way</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                learnfinity.AI is more than a set of free tools for Ghanaian students. 
                It&apos;s a platform to connect enthusiastic teachers and students and offer 
                them a new way to explore and learn with AI-powered assistance.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="flex items-center px-8 py-4 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 font-medium">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Start Learning
                </button>
                <button className="px-8 py-4 text-lg border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium">
                  Explore Resources
                </button>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-2">Recommended for Grades 1 to 6</p>
                <p className="text-lg font-semibold text-blue-600">GES-curated curriculum aligned content</p>
              </div>
            </div>

            <div className="relative">
              {/* Simple geometric illustration similar to GeoGebra */}
              <div className="relative w-full h-96 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Colorful geometric shapes */}
                  <div className="relative w-80 h-80">
                    <div className="absolute top-8 left-8 w-20 h-20 bg-blue-400 rounded-full opacity-80 animate-pulse"></div>
                    <div className="absolute top-16 right-12 w-16 h-16 bg-green-400 rotate-45 opacity-80"></div>
                    <div className="absolute bottom-20 left-16 w-24 h-24 bg-purple-400 rounded-lg opacity-80 transform rotate-12"></div>
                    <div className="absolute bottom-8 right-8 w-18 h-18 bg-orange-400 rounded-full opacity-80"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-pink-400 rounded-full opacity-60"></div>
                    
                    {/* AI Brain Icon in center */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute top-4 left-1/2 text-2xl">📚</div>
                    <div className="absolute bottom-4 left-4 text-2xl">🧮</div>
                    <div className="absolute top-1/3 right-4 text-2xl">✨</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section - GeoGebra Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What we offer
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* AI Learning Resources */}
            <div className="text-center bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 p-8">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Learning Resources</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Our newest collection of AI-powered learning materials crafted specifically for Ghanaian Grades 1 to 6.
              </p>
              <button className="text-blue-600 font-semibold hover:underline">
                Explore all →
              </button>
            </div>

            {/* AI Tutor & Tools */}
            <div className="text-center bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 p-8">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Tutor & Tools</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Free intelligent tutoring tools for an interactive learning experience. Available on all platforms.
              </p>
              <button className="text-blue-600 font-semibold hover:underline">
                Explore all →
              </button>
            </div>

            {/* Classroom Collaboration */}
            <div className="text-center bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 p-8">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Classroom Collaboration</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Interactive lessons with AI-powered materials. Integration with various learning management systems.
              </p>
              <button className="text-blue-600 font-semibold hover:underline">
                Learn more →
              </button>
            </div>

            {/* AI Practice */}
            <div className="text-center bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 p-8">
              <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Practice</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Get step-by-step AI support in exercises, explore solution paths and build confidence with instant feedback.
              </p>
              <button className="text-blue-600 font-semibold hover:underline">
                Try out →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Trusted by thousands of teachers and students across Ghana
          </h2>
          <div className="flex justify-center items-center space-x-12 text-gray-600">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
              <span className="font-semibold">5,000+ Students</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="font-semibold">200+ Schools</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span className="font-semibold">GES Aligned</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Sections - GeoGebra Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-20">
          
          {/* Make Learning Interactive */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full font-medium">
                  Teachers & Students
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Make learning interactive
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Try our AI-powered exploration activities to discover important concepts, 
                then use our practice activities to master these skills with intelligent assistance.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-lg font-medium">
                Explore Resources
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 text-center">
                <div className="w-32 h-32 bg-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="flex justify-center space-x-4">
                  <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Tutoring */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-12 text-center">
                <div className="w-32 h-32 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="flex justify-center space-x-4">
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-pink-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-block">
                <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">
                  Teachers & Students
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Get AI tutoring support
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Access our intelligent AI tutor that provides instant help, explanations, 
                and guidance. Get personalized support for any subject, any time.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white text-lg px-6 py-3 rounded-lg font-medium">
                Start AI Tutor
              </button>
            </div>
          </div>

          {/* Classroom Engagement */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full font-medium">
                  Teachers
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Engage every student
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our Classroom platform allows teachers to view student progress in real-time 
                and provide individual AI-powered feedback for personalized learning experiences.
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-6 py-3 rounded-lg font-medium">
                Explore Classroom
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-12 text-center">
                <div className="w-32 h-32 bg-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <div className="flex justify-center space-x-4">
                  <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Grades Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Learning paths for every grade
            </h2>
            <p className="text-xl text-gray-600">
              Curriculum-aligned content designed for Ghanaian elementary education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {grades.map((grade, index) => (
              <div key={index} className={`${grade.color} border-2 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1 p-6`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{grade.grade}</h3>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-2">{grade.students}</p>
                <p className="text-sm text-gray-500">{grade.subjects} subjects available</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Explore subjects with AI guidance
            </h2>
            <p className="text-xl text-gray-600">
              Interactive lessons with intelligent assistance whenever you need it
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {subjects.map((subject, index) => (
              <span
                key={index}
                className={`${subject.color} px-6 py-3 text-lg font-medium cursor-pointer transition-all duration-300 hover:scale-105 rounded-full`}
              >
                {subject.name}
              </span>
            ))}
          </div>

          <div className="text-center">
            <button className="flex items-center mx-auto text-lg px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium">
              Explore All Subjects
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section - GeoGebra Style */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Our mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to give the best AI-powered tools for teachers to empower 
                their Ghanaian students to unleash their greatest potential. We go beyond 
                being just a collection of tools. Striving to connect passionate individuals 
                from the education world, we offer a fresh approach to teaching, exploring, 
                and learning with artificial intelligence.
              </p>
              <button className="text-blue-600 font-semibold text-lg hover:underline">
                About us →
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <div className="text-6xl">🇬🇭</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Get started using learnfinity.AI today
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Create a free account so you can save your progress any time and access 
              thousands of AI-powered learning resources for you to customize and share with others
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 font-medium">
                Create Free Account
              </button>
              <button className="px-8 py-4 text-lg border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium">
                Explore Resources
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <span className="text-2xl font-bold">learnfinity.AI</span>
              </div>
              <p className="text-gray-400">
                AI-powered learning platform for Ghanaian elementary students
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Math Resources</a></li>
                <li><a href="#" className="hover:text-white">AI Tutor</a></li>
                <li><a href="#" className="hover:text-white">Practice Tools</a></li>
                <li><a href="#" className="hover:text-white">Classroom</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Subjects</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Mathematics</a></li>
                <li><a href="#" className="hover:text-white">English</a></li>
                <li><a href="#" className="hover:text-white">Science</a></li>
                <li><a href="#" className="hover:text-white">Social Studies</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; 2025 learnfinity.AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}