// Maps each topic block id to its accent color pair (foreground / fill).
// Colors are referenced as CSS custom properties defined in src/index.css.
export const BLOCK_COLORS = {
  c1c2: { fg: 'var(--c1)', bg: 'var(--c1f)' },
  c3c4: { fg: 'var(--c2)', bg: 'var(--c2f)' },
  c5c6: { fg: 'var(--c3)', bg: 'var(--c3f)' },
  c7: { fg: 'var(--c4)', bg: 'var(--c4f)' },
  c8: { fg: 'var(--c5)', bg: 'var(--c5f)' },
  c9: { fg: 'var(--c6)', bg: 'var(--c6f)' },
}

export const SOURCES = [
  'Chemistry course notebook (OneNote), Chemie-Unterricht IMST24a, BWZ Rapperswil-Jona',
  'Simple Club — chemistry explainer videos, simpleclub.com',
  'chemie-interaktiv.net — interactive chemistry animations',
  'u-helmich.de — physical properties of alkanes',
  'Periodensystem der Elemente (PSE), as used in class',
]
