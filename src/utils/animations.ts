
import { useEffect, useRef } from 'react';

/**
 * Hook to animate elements when they enter the viewport
 */
export const useAnimateOnScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const animation = element.dataset.animation || 'animate-fade-in';
            element.classList.add(animation);
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (ref.current) {
      const elements = ref.current.querySelectorAll('.reveal-animation');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (ref.current) {
        const elements = ref.current.querySelectorAll('.reveal-animation');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return ref;
};
