
import { useEffect, useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
}

export function ScrollAnimation({ children, threshold = 0.2, delay = 0 }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);
  
  return (
    <div ref={ref} className="animate-on-scroll">
      {children}
    </div>
  );
}
