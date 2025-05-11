import styles from './SplashScreen.module.css';

/**
 * A centered loading spinner component for visual feedback.
 *
 * @returns A JSX element representing a centered loading spinner.
 */
export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center p-8">
      <div className={styles.loader}></div>
    </div>
  );
} 