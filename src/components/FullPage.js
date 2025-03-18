import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const FullPage = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef(null);
  const pagesCount = React.Children.count(children);
  
  // Handle page change
  const goToPage = (pageIndex) => {
    if (pageIndex >= 0 && pageIndex < pagesCount && !isScrolling) {
      setIsScrolling(true);
      setCurrentPage(pageIndex);
      
      // Get the corresponding section ID to update URL
      const sectionId = React.Children.toArray(children)[pageIndex].props.id;
      window.history.replaceState(null, null, `#${sectionId}`);
      
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000); // Match this with your transition duration
    }
  };
  
  // Handle wheel events with scrolling detection for active section
  const handleWheel = (e) => {
    if (isScrolling) return;
    
    // Get the active section content element
    const activeSection = document.querySelector('.active-section .fullpage-section-content');
    
    if (activeSection) {
      const { scrollTop, scrollHeight, clientHeight } = activeSection;
      
      // Check if we're at the top or bottom of the section's content
      const isAtTop = scrollTop === 0;
      const isAtBottom = Math.abs(scrollHeight - scrollTop - clientHeight) < 5; // Allow small margin of error
      
      // Only prevent default and change pages if we're at the top or bottom of content
      if ((e.deltaY > 0 && isAtBottom) || (e.deltaY < 0 && isAtTop)) {
        e.preventDefault();
        
        if (e.deltaY > 0) {
          // Scrolling down at bottom of content
          goToPage(currentPage + 1);
        } else {
          // Scrolling up at top of content
          goToPage(currentPage - 1);
        }
      }
    }
  };
  
  // Handle key events
  const handleKeyDown = (e) => {
    if (isScrolling) return;
    
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      goToPage(currentPage + 1);
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      goToPage(currentPage - 1);
    }
  };
  
  // Initialize event listeners
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('keydown', handleKeyDown);
      
      return () => {
        container.removeEventListener('wheel', handleWheel);
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [currentPage, isScrolling]);

  // Check for hash in URL on initial load
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const childrenArray = React.Children.toArray(children);
      const initialPageIndex = childrenArray.findIndex(child => child.props.id === hash);
      if (initialPageIndex !== -1) {
        setCurrentPage(initialPageIndex);
      }
    }
  }, []);
  
  // Listen for navigation events from header
  useEffect(() => {
    const handleNavigation = (e) => {
      const { index } = e.detail;
      goToPage(index);
    };
    
    document.addEventListener('navigateTo', handleNavigation);
    
    return () => {
      document.removeEventListener('navigateTo', handleNavigation);
    };
  }, []);
  
  return (
    <div
      ref={containerRef}
      className="fullpage-container"
      style={{ overflow: 'hidden', height: '100vh', position: 'relative' }}
    >
      <div
        className="fullpage-sections"
        style={{
          height: '100%',
          width: '100%',
          transition: 'transform 1s cubic-bezier(0.645, 0.045, 0.355, 1.000)',
          transform: `translateY(-${currentPage * 100}vh)`
        }}
      >
        {React.Children.map(children, (child, index) => {
          // Add a class to the current page to allow scrolling only on active page
          const isCurrentPage = index === currentPage;
          return (
            <div 
              key={index} 
              className={`fullpage-section ${isCurrentPage ? 'active-section' : ''}`}
              style={{ height: '100vh', width: '100%' }}
            >
              {child}
            </div>
          );
        })}
      </div>
      
      {/* Pagination Dots */}
      <div className="fullpage-pagination">
        {Array.from({ length: pagesCount }).map((_, index) => (
          <motion.div
            key={index}
            className={`pagination-dot ${currentPage === index ? 'active' : ''}`}
            initial={{ opacity: 0.5, scale: 0.8 }}
            animate={{
              opacity: currentPage === index ? 1 : 0.5,
              scale: currentPage === index ? 1 : 0.8
            }}
            onClick={() => goToPage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FullPage;