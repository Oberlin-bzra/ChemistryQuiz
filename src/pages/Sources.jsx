import { SOURCES } from '../data/blockColors'

export default function Sources() {
  return (
    <section className="page page-sources">
      <span className="eyebrow">Sources</span>
      <h1>Where the content comes from</h1>
      <p className="sources-intro">
        The facts, explanations and video scripts in this quiz are based on the following
        material.
      </p>
      <ul className="sources-list">
        {SOURCES.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </section>
  )
}
