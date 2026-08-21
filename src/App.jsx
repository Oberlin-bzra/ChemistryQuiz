import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Results from './pages/Results'
import Sources from './pages/Sources'
import { QuizProvider } from './context/QuizContext'

export default function App() {
  return (
    <HashRouter>
      <QuizProvider>
        <Navbar />
        <main className="wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
            <Route path="/sources" element={<Sources />} />
          </Routes>
        </main>
      </QuizProvider>
    </HashRouter>
  )
}
