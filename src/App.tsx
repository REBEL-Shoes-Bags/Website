import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

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
