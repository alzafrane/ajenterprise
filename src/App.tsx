/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import ProductDetail from './components/ProductDetail';
import ScrollToTop from './components/ScrollToTop';

function HomePage() {
  return (
    <main>
      <Hero />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 selection:bg-primary/20 selection:text-primary-dark flex flex-col">
        <Header />
        
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
          </Routes>
        </div>

        <Footer />
        <FloatingButtons />
      </div>
    </BrowserRouter>
  );
}
