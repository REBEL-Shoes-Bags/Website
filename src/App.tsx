import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/sections/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-50 relative overflow-hidden font-sans">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here as needed */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
