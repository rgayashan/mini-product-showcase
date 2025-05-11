'use client';

import { useEffect, useState } from 'react';
import styles from './SplashScreen.module.css';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fading out after 1.5 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1500);

    // Remove from DOM after fade out completes
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2300); // 1.5s + 0.8s (fade duration)

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`${styles.splashScreen} ${isFading ? styles.fadeOut : ''}`}>
      <div className={styles.content}>
        <h1>Mini Product Showcase</h1>
        <div className={styles.loader}></div>
      </div>
    </div>
  );
} 