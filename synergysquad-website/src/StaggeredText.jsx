import React from 'react';
import { motion } from 'framer-motion';

export default function StaggeredText({ text, className, delay = 0.1 }) {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: '100%',
    },
  };

  return (
    <motion.div
      key={text}
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ display: 'flex', flexWrap: 'wrap' }}
    >
      {words.map((word, index) => (
        <div key={index} style={{ overflow: 'hidden', marginRight: '0.25em' }}>
          <motion.span variants={child} style={{ display: 'inline-block' }}>
            {word}
          </motion.span>
        </div>
      ))}
    </motion.div>
  );
}
