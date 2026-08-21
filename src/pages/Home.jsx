import { Link } from 'react-router-dom'
import { QUIZ_DATA } from '../data/quizData'
import { BLOCK_COLORS } from '../data/blockColors'

export default function Home() {
  const questionCount = QUIZ_DATA.blocks.reduce((sum, b) => sum + b.questions.length, 0)

  return (
    <section className="page page-home">
      <span className="eyebrow">IDAF Natural Sciences &amp; English — Chemistry finals revision</span>

      <div className="start-hero">
        <h1>The Reaction Quiz</h1>
        <p>
          A short revision quiz covering the chemistry topics from this term. Answer each
          question — if you pick a wrong option, a short video explains why it's wrong before
          you move on.
        </p>
      </div>

      <div className="rules">
        <div className="rule-card">
          <p>
            <strong>{questionCount} questions</strong> across the {QUIZ_DATA.blocks.length}{' '}
            topic blocks below, one at a time.
          </p>
        </div>
        <div className="rule-card">
          <p>Wrong answer → a short video on that exact mistake, then you continue.</p>
        </div>
        <div className="rule-card">
          <p>Your score and a personalised tip are shown at the end.</p>
        </div>
        <div className="rule-card">
          <p>
            Sources for every fact are listed on the <Link to="/sources">Sources</Link> page.
          </p>
        </div>
      </div>

      <span className="eyebrow" style={{ display: 'block', marginBottom: 10 }}>
        Topics covered
      </span>
      <div className="topic-legend">
        {QUIZ_DATA.blocks.map((b) => {
          const c = BLOCK_COLORS[b.id]
          return (
            <span key={b.id} className="topic-pill" style={{ background: c.bg, color: c.fg }}>
              <span className="dot" style={{ background: c.fg }} />
              {b.title}
            </span>
          )
        })}
      </div>

      <Link to="/quiz" className="btn">
        Start the quiz
      </Link>
    </section>
  )
}
