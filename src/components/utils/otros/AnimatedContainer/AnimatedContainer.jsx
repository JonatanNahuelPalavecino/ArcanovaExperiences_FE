import React, { useRef } from 'react';
import { motion as Motion, useInView } from 'framer-motion';
import './AnimatedContainer.scss';

const getVariants = (direction) => {
  switch (direction) {
    case 'top':
      return { hidden: { y: -50, opacity: 0 }, visible: { y: 0, opacity: 1 } };
    case 'bottom':
      return { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } };
    case 'left':
      return { hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 } };
    case 'right':
      return { hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } };
    default:
      return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  }
};

const AnimatedContainer = ({
  children,
  direction = 'none',
  duration = 0.6,
  delay = 0,
  backgroundColor = '#fff',
  borderRadius = '8px',
  boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' }); // `once: true` = solo una vez

  const variants = getVariants(direction);

  return (
    <Motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration, delay }}
      className="animated-container"
      style={{ backgroundColor, borderRadius, boxShadow }}
    >
      {children}
    </Motion.div>
  );
};

export default AnimatedContainer;
