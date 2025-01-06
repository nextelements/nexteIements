'use client'

import { useState } from 'react'
import { button } from '@nextelements/themes'
import { cx } from '@nextelements/utilities'
import { motion } from 'framer-motion'

export const Button = ({ children, color = 'default', onClick, className }) => {
  const [ripples, setRipples] = useState([]);

  const classNames = cx(button({ color }), className)

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height); // Dynamische Ripple-Größe
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = { x, y, size, id: Date.now() };

    setRipples((prev) => [...prev, newRipple]);

    // Entfernen des Ripples nach der Animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);

    if (onClick) onClick(e);
  };

  return (
    <motion.button
      onClick={handleClick}
      className={classNames}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {children}
      {ripples.map(({ x, y, size, id }) => (
        <motion.span
          key={id}
          initial={{ scale: 0, opacity: 0.7 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute bg-white bg-opacity-30 rounded-full pointer-events-none"
          style={{
            width: size,
            height: size,
            top: y,
            left: x,
          }}
        />
      ))}
    </motion.button>
  );
};

Button.displayName = 'NextElements.Button';