
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppContextProvider } from './contexts/AppContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { CartProvider } from './contexts/CartContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import TraditionsPage from './pages/TraditionsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';

declare const AOS: any;

const AppLayout: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className="bg-light-bg min-h-screen flex flex-col font-sans-th text-light-text">
    <Header />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 100,
      easing: 'ease-in-out-quad',
    });
  }, []);

  return (
    <ThemeProvider>
      <AppContextProvider>
        <LanguageProvider>
          <CartProvider>
              <BrowserRouter>
                <AppLayout>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/traditions" element={<TraditionsPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/faq" element={<FaqPage />} />
                    <Route path="/product/:id" element={<ProductDetailPage />} />
                    <Route path="/cart" element={<CartPage />} />
                  </Routes>
                </AppLayout>
              </BrowserRouter>
          </CartProvider>
        </LanguageProvider>
      </AppContextProvider>
    </ThemeProvider>
  );
}

export default App;