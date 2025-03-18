import { useEffect, useState, createContext, useContext } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScrollContext = createContext({
  lenis: null,
  isReady: false
});

export const SmoothScrollProvider = ({ children }) => {
  const [lenis, setLenis] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2
    });

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    setLenis(lenisInstance);
    setIsReady(true);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ lenis, isReady }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

export const useSmoothScroll = () => {
  return useContext(SmoothScrollContext);
};
