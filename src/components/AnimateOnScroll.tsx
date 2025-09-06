import { useRef, useState, useEffect, ReactNode, CSSProperties } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const AnimateOnScroll = ({ children, className = '', style }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the element is in view, update the state
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after it's visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className={`${className} transition-all duration-700 ease-out ${ isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8' }`} style={style}>
      {children}
    </div>
  );
};

export default AnimateOnScroll;