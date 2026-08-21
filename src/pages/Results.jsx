import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useQuiz } from '../context/QuizContext'
import { BLOCK_COLORS } from '../data/blockColors'

function personalMessage(pct, weakestBlock) {
  if (pct >= 90) {
    return {
      title: 'Exam-ready',
      text: 'Very strong result across all topic blocks. You clearly know the material — a quick skim of your notes before the exam should be enough.',
    }
  }
  if (pct >= 75) {
    return {
      title: 'Solid grasp',
      text: `Good result overall. Have another look at "${weakestBlock}" — that's where you lost the most points — then you should feel confident going into the exam.`,
    }
  }
  if (pct >= 50) {
    return {
      title: 'Getting there',
      text: `You have a working foundation, but there are real gaps. Focus your revision on "${weakestBlock}" first, then work back through the other topics with lower scores.`,
    }
  }
  return {
    title: 'Needs more revision',
    text: `This is a good starting point, not a final result. Go back through your notes chapter by chapter, starting with "${weakestBlock}", and retake this quiz once you feel more confident.`,
  }
}

export default function Results() {
  const { flat, answered, finished, restart } = useQuiz()
  const navigate = useNavigate()

  useEffect(() => {
    if (!finished) navigate('/quiz')
  }, [finished, navigate])

  if (!finished) return null

  const total = flat.length
  const correctCount = answered.filter((a) => a === true).length
  const pct = Math.round((correctCount / total) * 100)

  const blockStats = {}
  flat.forEach((item, i) => {
    const id = item.block.id
    if (!blockStats[id]) blockStats[id] = { title: item.block.title, correct: 0, total: 0 }
    blockStats[id].total++
    if (answered[i] === true) blockStats[id].correct++
  })

  let weakestBlock = null
  let weakestRatio = 2
  Object.values(blockStats).forEach((stat) => {
    const ratio = stat.correct / stat.total
    if (ratio < weakestRatio) {
      weakestRatio = ratio
      weakestBlock = stat.title
    }
  })

  const msg = personalMessage(pct, weakestBlock)

  function handleRestart() {
    restart()
    navigate('/quiz')
  }

  return (
    <section className="page page-results">
      <span className="eyebrow">Quiz complete</span>

      <div className="score-hero">
        <div className="score-big">
          {correctCount} / {total}
        </div>
        <div className="score-sub">{pct}% correct</div>
      </div>

      <div className="feedback-msg">
        <h3>{msg.title}</h3>
        <p>{msg.text}</p>
      </div>

      <div className="breakdown">
        <span className="eyebrow" style={{ marginBottom: 12, display: 'block' }}>
          Score by topic
        </span>
        {Object.entries(blockStats).map(([id, stat]) => {
          const c = BLOCK_COLORS[id]
          const ratio = stat.correct / stat.total
          return (
            <div className="breakdown-row" key={id}>
              <span className="dot" style={{ background: c.fg }} />
              <span className="name">{stat.title}</span>
              <span className="bar-track">
                <span
                  className="bar-fill"
                  style={{ width: `${ratio * 100}%`, background: c.fg }}
                />
              </span>
              <span className="score">
                {stat.correct}/{stat.total}
              </span>
            </div>
          )
        })}
      </div>

      <p className="results-sources-note">
        See the full list of sources on the <Link to="/sources">Sources</Link> page.
      </p>

      <div className="end-actions">
        <button className="btn" onClick={handleRestart}>
          Try again
        </button>
      </div>
    </section>
  )
}
