"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Send, ArrowLeft, BookOpen, Brain, Lightbulb, Target, Sparkles, MessageCircle, User, Bot } from "lucide-react"
import Link from "next/link"

interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

interface LessonInterfaceProps {
  subject: string
}

export default function LessonInterface({ subject }: LessonInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: `Hello! I'm your AI tutor for ${subject}. I'm here to help you learn and understand concepts in a fun and interactive way. What would you like to explore today?`,
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `Great question about ${subject}! Let me help you understand this concept better. ${inputValue.includes("math") || inputValue.includes("addition") ? "When we add numbers, we combine them to get a total. For example, 2 + 3 = 5. Would you like to try some practice problems?" : "This is an interesting topic in " + subject + ". Let me break it down for you in simple terms..."}`,
        sender: "ai",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickPrompts = [
    "Explain this topic simply",
    "Give me practice questions",
    "Show me examples",
    "Help me understand better",
  ]

  return (
    <div className="h-[700px] bg-slate-900 text-white flex">
      {/* Minimal Sidebar */}
      <div className="w-64 bg-slate-800/50 backdrop-blur-sm border-r border-slate-700/50 flex flex-col">
        <div className="p-4 border-b border-slate-700/50">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-700/50">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>

        <div className="flex-1 p-4 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 p-3 bg-slate-700/30 rounded-lg border border-slate-600/30">
              <MessageCircle className="w-5 h-5 text-blue-400" />
              <span className="font-medium">AI Tutor Chat</span>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider">Current Lesson</h3>
            <div className="p-3 bg-slate-700/20 rounded-lg border border-slate-600/20">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-green-400" />
                <span className="font-medium text-sm">{subject}</span>
              </div>
              <Badge variant="secondary" className="bg-slate-600/50 text-slate-300 text-xs">
                Interactive Learning
              </Badge>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider">Quick Actions</h3>
            <div className="space-y-1">
              {quickPrompts.map((prompt, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700/50 text-xs"
                  onClick={() => setInputValue(prompt)}
                >
                  <Lightbulb className="w-3 h-3 mr-2" />
                  {prompt}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Interface */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-slate-700/50 bg-slate-800/30 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-light">
                Welcome to <span className="font-medium text-blue-400">learnfinity.AI</span>
              </h1>
              <p className="text-slate-400 mt-1">Your personal AI tutor for {subject}</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-green-500/30 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                AI Online
              </Badge>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-4 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              {message.sender === "ai" && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              )}

              <div className={`max-w-2xl ${message.sender === "user" ? "order-first" : ""}`}>
                <Card
                  className={`p-4 ${
                    message.sender === "user"
                      ? "bg-blue-600 text-white border-blue-500"
                      : "bg-slate-800/50 text-white border-slate-700/50 backdrop-blur-sm"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <p className={`text-xs mt-2 ${message.sender === "user" ? "text-blue-100" : "text-slate-400"}`}>
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </Card>
              </div>

              {message.sender === "user" && (
                <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-4 justify-start">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <Card className="p-4 bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                    <div
                      className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <div
                      className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                  <span className="text-sm text-slate-400">AI is thinking...</span>
                </div>
              </Card>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-6 border-t border-slate-700/50 bg-slate-800/30 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={`Ask me anything about ${subject}... (Press Enter to send)`}
                className="pr-12 bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-blue-500/50 focus:ring-blue-500/20"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex items-center justify-center mt-4 gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>AI-powered learning</span>
              </div>
              <div className="flex items-center gap-1">
                <Target className="w-3 h-3" />
                <span>Personalized for Grade 4</span>
              </div>
              <div className="flex items-center gap-1">
                <Brain className="w-3 h-3" />
                <span>Ghana curriculum aligned</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
