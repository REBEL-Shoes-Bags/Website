import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './components/sections/Home';
import AboutUs from './components/sections/AboutUs';
import Categories from './components/sections/Categories';
import Promo from './components/sections/Promo';
import Contact from './components/sections/Contact';

// Policy & Info Pages
import AboutUsPage from './pages/AboutUsPage';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingReturns from './pages/ShippingReturns';
import TermsConditions from './pages/TermsConditions';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-primary-dark text-cream relative overflow-hidden font-sans">
        <Header />

        <Routes>
          {/* Landing Page with Section Sections */}
          <Route path="/" element={
            <main>
              <Home />
              <AboutUs />
              <Categories />
              <Promo />
              <Contact />
            </main>
          } />

          {/* Individual Information Pages */}
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refunds" element={<RefundPolicy />} />
          <Route path="/shipping" element={<ShippingReturns />} />
          <Route path="/terms" element={<TermsConditions />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
