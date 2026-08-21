# The Reaction Quiz

Interactive chemistry revision quiz for the IDAF NAT-ENG assignment, built with
React + Vite.

## Project structure

```
src/
  data/
    quizData.js       ← all questions, answers, feedback & video scripts (content)
    blockColors.js     ← accent colors per topic block + sources list
  context/
    QuizContext.jsx     ← shared quiz state (current question, answers, score)
  components/
    Navbar.jsx           ← top navigation (Home / Quiz / Sources)
    ProgressChain.jsx     ← hexagon progress indicator
  pages/
    Home.jsx               ← landing page with rules & topic overview
    Quiz.jsx                 ← question flow, answer feedback, video playback
    Results.jsx                ← score, per-topic breakdown, personalised tip
    Sources.jsx                  ← list of sources used
public/
  videos/                         ← put the finished .mp4 explainer videos here
```

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local address (usually http://localhost:5173) in your browser.

## Adding the videos

Each wrong answer links to a video file named after its `video.id` in
`src/data/quizData.js`, expected at `public/videos/<id>.mp4`. See
`public/videos/README.txt` for the full list of filenames.

Until a video is uploaded, the quiz automatically shows the written script for that
video instead — the site keeps working while you're still filming.

## Building for deployment

```bash
npm run build
```

This produces a `dist/` folder you can upload to any static host (e.g. Netlify,
Vercel, GitHub Pages) and send the link to your teachers.
