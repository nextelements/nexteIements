import { useState } from 'react'
import { useTheme } from './provider'

/**
 * Test Toggle
 */

const ThemeToggle = () => {
  const { themes, theme, setTheme } = useTheme();

  function onChange(e) {
    setTheme(e.target.value)
  }

  return (
    <div>
      Choose your theme:
      <select value={theme} onChange={onChange}>
        {themes.map((scheme, i) => (
          <option 
            key={i} 
            value={scheme}
          >{scheme}</option>
        ))}
      </select><br />
      <b>Current Theme:</b> {theme}
    </div>
  );
};

export { ThemeToggle }