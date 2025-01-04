'use client'

import { spinner } from '@nextelements/themes'
import { classNames } from '@nextelements/utilities'
import { motion } from 'framer-motion'

export const Spinner = ({ 
  color = 'default', 
  strokeWidth = 12,
  size = 24, 
  className
}) => {

  const classes = classNames(spinner({ color }), className)

  return (
    <motion.div>
      <motion.svg
        className={classes}
        width={`${size}px`}
        height={`${size}px`}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: .8,
          ease: 'linear', // Verwenden von 'linear' statt 'ease-in-out'
        }}
      >
        <motion.circle
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="40"
          initial={{ 
            strokeDasharray: 187, 
            strokeDashoffset: 187 }}
          animate={{
            strokeDashoffset: [ 187, 40, 187 ],
            stroke: [ 'currentColor' ],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.9,
            ease: 'easeInOut', // Diese Easing-Notation wird hier unterstützt
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

Spinner.displayName = 'NextElements.Spinner';