import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InputPage from './pages/InputPage';
import CallbackPage from './pages/CallbackPage';
import ResultsPage from './pages/ResultsPage';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/input" element={<InputPage />} />
          <Route path="/callback" element={<CallbackPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;