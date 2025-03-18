import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, id, className = '' }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Listen for resize events
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Mobile-specific styles
  const mobileStyles = isMobile ? {
    height: 'auto',
    minHeight: '100vh',
    paddingTop: '60px',
    paddingBottom: '30px',
    overflowY: 'visible',
  } : {};

  return (
    <motion.section
      id={id}
      className={`fullpage-section-content ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        position: 'relative',
        padding: '0 20px',
        ...mobileStyles
      }}
    >
      <div className="section-scrollable-content">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
