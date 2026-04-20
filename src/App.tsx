import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/sections/Home';
import AboutUs from './components/sections/AboutUs';
import Categories from './components/sections/Categories';
import Promo from './components/sections/Promo';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary-dark text-cream relative overflow-hidden font-sans">
        <Header />

        <Routes>
          <Route path="/" element={
            <main>
              <Home />
              <AboutUs />
              <Categories />
              <Promo />
            </main>
          } />
          {/* Add more routes here as needed */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
