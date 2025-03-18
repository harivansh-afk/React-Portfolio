import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, id, className = '' }) => {
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
        padding: '0 20px'
      }}
    >
      <div className="section-scrollable-content">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;