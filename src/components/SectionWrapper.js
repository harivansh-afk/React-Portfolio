import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const SectionWrapper = ({ children, id, className = '' }) => {
  const { lenis } = useSmoothScroll();
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView && lenis) {
      // Update URL hash without scrolling
      window.history.replaceState(null, null, `#${id}`);
    }
  }, [inView, id, lenis]);

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`section-fullscreen ${className} ${inView ? 'active' : ''}`}
      initial={{ opacity: 0.5 }}
      animate={{ 
        opacity: inView ? 1 : 0.5,
        scale: inView ? 1 : 0.98
      }}
      transition={{ 
        duration: 0.8, 
        ease: [0.33, 1, 0.68, 1] // Cubic bezier for Apple-like easing
      }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
