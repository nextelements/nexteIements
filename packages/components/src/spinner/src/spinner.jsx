'use client'

import { spinner } from '@nextelements/themes'
import { classNames } from '@nextelements/utilities'
import { motion } from 'framer-motion'

export const Spinner = ({ 
  color = 'default', 
  strokeWidth = 12,
  strokeColor = 'default',
  size = 'extralarge', 
  className
}) => {

  const classes = classNames(spinner({ color, size }), className)
  const innerCircleColor = spinner({ strokeColor })
  
  return (
    <motion.div>
      <motion.svg
        className={classes}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: .6,
          ease: 'linear', // Verwenden von 'linear' statt 'ease-in-out'
        }}
      >
          <circle
            fill="none"
            strokeWidth={strokeWidth}
            className={innerCircleColor}
            cx="50"
            cy="50"
            r="40"
          />
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
            strokeDashoffset: [ 
              187, 
              10, 
              187
            ],
            stroke: [ 'currentColor' ],
          }}
          transition={{
            repeat: Infinity,
            duration: 3.2,
            ease: 'easeInOut',
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

Spinner.displayName = 'NextElements.Spinner';