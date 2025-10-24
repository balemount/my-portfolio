import React, { useRef } from 'react';
import useInView from '../hooks/useInView';

const FadeInSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: `translateY(${isInView ? 0 : 20}px)`,
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;