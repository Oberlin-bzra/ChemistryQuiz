import { createContext, useContext, useMemo, useState, useCallback } from 'react'
import { QUIZ_DATA } from '../data/quizData'

const QuizContext = createContext(null)

function shuffle(arr) {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Flatten all questions into one ordered list, keeping their block info.
function buildFlatList() {
  const flat = []
  QUIZ_DATA.blocks.forEach((block, bi) => {
    block.questions.forEach((q, qi) => {
      flat.push({ block, blockIndex: bi, qIndexInBlock: qi, question: q })
    })
  })
  return flat
}

export function QuizProvider({ children }) {
  const [flat] = useState(buildFlatList)
  const [current, setCurrent] = useState(0)
  const [answered, setAnswered] = useState(() => new Array(flat.length).fill(null))
  const [finished, setFinished] = useState(false)

  const answerQuestion = useCallback((index, isCorrect) => {
    setAnswered((prev) => {
      const next = prev.slice()
      next[index] = isCorrect
      return next
    })
  }, [])

  const goNext = useCallback(() => {
    setCurrent((c) => {
      if (c < flat.length - 1) return c + 1
      setFinished(true)
      return c
    })
  }, [flat.length])

  const restart = useCallback(() => {
    setCurrent(0)
    setAnswered(new Array(flat.length).fill(null))
    setFinished(false)
  }, [flat.length])

  const value = useMemo(
    () => ({ flat, current, answered, finished, answerQuestion, goNext, restart, shuffle }),
    [flat, current, answered, finished, answerQuestion, goNext, restart]
  )

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}

export function useQuiz() {
  const ctx = useContext(QuizContext)
  if (!ctx) throw new Error('useQuiz must be used within a QuizProvider')
  return ctx
}
