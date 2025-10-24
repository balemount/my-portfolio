import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Certifications from './components/certifications/Certifications';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import FadeInSection from './components/FadeInSection';

const App = () => {
  return (
    <div>
      <Navbar />
      <FadeInSection>
        <Hero />
      </FadeInSection>
      <FadeInSection>
        <About />
      </FadeInSection>
      <FadeInSection>
        <Projects />
      </FadeInSection>
      <FadeInSection>
        <Certifications />
      </FadeInSection>
      <FadeInSection>
        <Contact />
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  );
};

export default App;