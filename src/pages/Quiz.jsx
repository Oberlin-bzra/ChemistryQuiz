import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuiz } from '../context/QuizContext'
import { BLOCK_COLORS } from '../data/blockColors'
import ProgressChain from '../components/ProgressChain'

const LETTERS = ['A', 'B', 'C']

export default function Quiz() {
  const { flat, current, answered, finished, answerQuestion, goNext, shuffle } = useQuiz()
  const navigate = useNavigate()

  const item = flat[current]
  const [order, setOrder] = useState(() => shuffle(item.question.options.map((_, i) => i)))
  const [selected, setSelected] = useState(null) // originalIndex of the chosen option, or null
  const [videoFailed, setVideoFailed] = useState(false)
  const videoRef = useRef(null)

  // Reset per-question state whenever we move to a new question.
  useEffect(() => {
    setOrder(shuffle(item.question.options.map((_, i) => i)))
    setSelected(null)
    setVideoFailed(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current])

  useEffect(() => {
    if (finished) navigate('/results')
  }, [finished, navigate])

  const c = BLOCK_COLORS[item.block.id]
  const options = item.question.options
  const correctIndex = options.findIndex((o) => o.correct)
  const locked = selected !== null

  function handleSelect(originalIndex) {
    if (locked) return
    const isCorrect = !!options[originalIndex].correct
    setSelected(originalIndex)
    answerQuestion(current, isCorrect)
  }

  function handleContinue() {
    goNext()
  }

  const selectedOption = selected !== null ? options[selected] : null
  const isCorrect = selectedOption ? !!selectedOption.correct : false

  return (
    <section className="page page-quiz">
      <ProgressChain total={flat.length} current={current} answered={answered} />

      <div className="qcard">
        <span className="block-tag" style={{ background: c.bg, color: c.fg }}>
          <span className="dot" style={{ background: c.fg }} />
          {item.block.title}
        </span>
        <h2>{item.question.prompt}</h2>

        <div className="options">
          {order.map((originalIndex, displayIndex) => {
            const opt = options[originalIndex]
            let cls = 'option'
            if (locked) {
              if (originalIndex === correctIndex) cls += ' is-correct'
              if (originalIndex === selected && !isCorrect) cls += ' is-wrong'
              if (originalIndex !== selected && originalIndex !== correctIndex) cls += ' is-dimmed'
            }
            return (
              <button
                key={originalIndex}
                className={cls}
                disabled={locked}
                onClick={() => handleSelect(originalIndex)}
              >
                <span className="letter">{LETTERS[displayIndex]}</span>
                <span>{opt.text}</span>
              </button>
            )
          })}
        </div>

        {locked && (
          <div className={'feedback show ' + (isCorrect ? 'correct' : 'wrong')}>
            <p className="fb-title">{isCorrect ? 'Correct' : 'Not quite'}</p>
            <p>{isCorrect ? item.question.correctFeedback : selectedOption.feedback}</p>

            {!isCorrect && (
              <div className="video-block">
                <span className="vlabel">Watch: why this answer is wrong</span>
                {!videoFailed ? (
                  <video
                    ref={videoRef}
                    controls
                    playsInline
                    src={`/videos/${selectedOption.video.id}.mp4`}
                    onError={() => setVideoFailed(true)}
                  />
                ) : (
                  <div className="video-fallback">
                    <span className="flabel">Video not uploaded yet — script preview</span>
                    <span>{selectedOption.video.script}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        <div className="continue-row">
          {locked && (
            <button className="btn" onClick={handleContinue}>
              {current < flat.length - 1 ? 'Continue' : 'See my score'}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
