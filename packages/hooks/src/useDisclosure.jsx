'use client'

import { useState, useCallback } from 'react';

const useDisclosure = () => {
  const [ isOpen, setIsOpen ] = useState(false)

  const onOpen = useCallback(() => setIsOpen(true), [])
  const onClose = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen(prev => !prev), [])

  return {
    isOpen,
    onOpen,
    onClose,
    toggle
  }
}

export { useDisclosure }

/*
  import React from 'react';
  import useDisclosure from './hooks/useDisclosure';

  const MyComponent = () => {
    const { isOpen, onOpen, onClose, toggle } = useDisclosure();

    return (
      <div>
        <button onClick={onOpen}>Open Modal</button>
        <button onClick={toggle}>Toggle Modal</button>

        {isOpen && (
          <div className="modal">
            <div className="modal-content">
              <button onClick={onClose}>Close</button>
              <p>This is a modal!</p>
            </div>
          </div>
        )}
      </div>
    );
  };

  export default MyComponent;
*/