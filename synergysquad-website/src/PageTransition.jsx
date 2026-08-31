import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  initial: {
    clipPath: 'polygon(0 0, 0vw 0, 0vw 0vh, 0 0vh)'
  },
  animate: {
    clipPath: 'polygon(0 0, 100vw 0, 100vw 100vh, 0 100vh)',
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
    transitionEnd: { clipPath: 'none' }
  },
  exit: {
    clipPath: 'polygon(0 0, 100vw 0, 100vw 100vh, 0 100vh)',
    transition: { duration: 0 }
  }
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full bg-[#e6e6e6]"
    >
      {children}
    </motion.div>
  );
}
