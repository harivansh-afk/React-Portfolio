import React, { useEffect, useState, useMemo } from 'react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { motion } from 'framer-motion';

const ScrollProgress = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const { lenis } = useSmoothScroll();
  const sections = useMemo(() => ['home', 'about', 'portfolio', 'contact'], []);

  useEffect(() => {
    if (!lenis) return;

    const handleScroll = ({ scroll, limit }) => {
      // Calculate overall scroll progress
      const progress = scroll / limit;
      setScrollProgress(progress);

      // Determine active section
      const viewportHeight = window.innerHeight;
      const currentPosition = scroll + viewportHeight / 2;
      
      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (!section) return;
        
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (
          currentPosition >= sectionTop && 
          currentPosition <= sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    lenis.on('scroll', handleScroll);
    return () => {
      lenis.off('scroll', handleScroll);
    };
  }, [lenis, sections]);

  return (
    <div className="scroll-progress-container">
      <div className="scroll-indicators">
        {sections.map((section) => (
          <motion.div
            key={section}
            className={`scroll-indicator ${activeSection === section ? 'active' : ''}`}
            animate={{
              scale: activeSection === section ? 1.2 : 1,
              opacity: activeSection === section ? 1 : 0.5
            }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              lenis.scrollTo(`#${section}`, {
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
              });
            }}
          />
        ))}
      </div>
      <motion.div 
        className="progress-bar"
        style={{ scaleX: scrollProgress }}
      />
    </div>
  );
};

export default ScrollProgress;
