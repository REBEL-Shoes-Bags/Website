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
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CheckoutPage from './pages/CheckoutPage';

import { CartProvider } from './context/CartContext';
import CartDrawer from './components/cart/CartDrawer';

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-[#121A1B] text-[#EAE6D2] relative overflow-hidden font-sans">
          <Header />
          <CartDrawer />

          <Routes>
            {/* Landing Page */}
            <Route path="/" element={
              <main>
                <Home />
                <AboutUs />
                <Categories />
                <Promo />
                <Contact />
              </main>
            } />

            {/* Dynamic Category Routes */}
            <Route path="/:category/:subcategory" element={<CategoryPage />} />
            <Route path="/:category/:subcategory/:item" element={<CategoryPage />} />
            
            {/* Product Detail Page */}
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            
            {/* Checkout */}
            <Route path="/checkout" element={<CheckoutPage />} />

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
    </CartProvider>
  );
}

export default App;
