import { useState, useEffect } from 'react';
import './TypewriterText.css';

const TypewriterText = ({ text, delay = 100, deleteDelay = 2000 }) => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (!isDeleting && currentIndex < text.length) {
      // Escribiendo
      timeout = setTimeout(() => {
        setCurrentText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, delay);
    } else if (!isDeleting && currentIndex === text.length) {
      // Pausa antes de borrar
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, deleteDelay);
    } else if (isDeleting && currentIndex > 0) {
      // Borrando
      timeout = setTimeout(() => {
        setCurrentText(text.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      }, delay / 2);
    } else if (isDeleting && currentIndex === 0) {
      // Pausa antes de volver a escribir
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, text, delay, deleteDelay]);

  return <span className="typewriter-text">{currentText}</span>;
};

export default TypewriterText; 