/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 selection:bg-primary/20 selection:text-primary-dark">
      <Header />
      
      <main>
        <Hero />
        <Portfolio />
        <Testimonials />
        <ContactSection />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
