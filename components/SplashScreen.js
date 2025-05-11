'use client';

import { useEffect, useState } from 'react';
import styles from './SplashScreen.module.css';

/**
 * A client-side component that displays a splash screen with a centered loader.
 *
 * The splash screen is displayed for 1.5 seconds and then fades out over 0.8 seconds.
 * Once the fade out is complete, the component is removed from the DOM.
 *
 * @returns A JSX element representing the splash screen.
 */

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