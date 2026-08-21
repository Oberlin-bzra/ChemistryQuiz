// Small hexagon chain showing progress through the quiz. Each hexagon stands
// in for one question — a nod to the six-membered rings from organic
// chemistry rather than a generic progress bar.
export default function ProgressChain({ total, current, answered }) {
  return (
    <>
      <div className="chain">
        {Array.from({ length: total }).map((_, i) => {
          let cls = 'hex'
          if (i === current) cls += ' current'
          if (answered[i] === true) cls += ' correct'
          if (answered[i] === false) cls += ' wrong'
          return <div key={i} className={cls} />
        })}
      </div>
      <span className="progress-label">
        Question {current + 1} of {total}
      </span>
    </>
  )
}
