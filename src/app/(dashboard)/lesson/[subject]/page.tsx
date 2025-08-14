import LessonInterface from "@/components/lesson/lesson-interface"

interface LessonPageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any
}

export default function LessonPage({ params }: LessonPageProps) {
  // Convert URL param back to readable subject name
  const subjectName = params.subject
    .split("-")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return <LessonInterface subject={subjectName} />
}
