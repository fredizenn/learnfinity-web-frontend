import LessonInterface from "@/components/lesson/lesson-interface"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface LessonPageProps {
  params: any
}

export default function LessonPage({ params }: LessonPageProps) {
  // Convert URL param back to readable subject name
  const subjectName = params.subject
    .split("-")
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return <LessonInterface subject={subjectName} />
}
