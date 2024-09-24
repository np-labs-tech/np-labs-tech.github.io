import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Section from './components/Section';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Carousel />
      <Section 
        title="Innovative Solutions" 
        content="We offer cutting-edge AI solutions for various industries. From retail tech to fintech, our tailored approaches solve complex problems." 
      />
      <Section 
        title="Data Management" 
        content="Our solutions optimize data management, streamline processes, and enhance decision-making for your business." 
      />
      <Footer />
    </div>
  );
}

export default App;
