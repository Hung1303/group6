import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import VietnamTheme from './components/VietnamTheme';
import HomePage from './pages/HomePage';
import IntroductionPage from './pages/IntroductionPage';
import TheoryPage from './pages/TheoryPage';
import PracticePage from './pages/PracticePage';
import QuizPage from './pages/QuizPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <VietnamTheme />
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/introduction" element={<IntroductionPage />} />
            <Route path="/theory" element={<TheoryPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/quiz" element={<QuizPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
