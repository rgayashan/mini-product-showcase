import styles from './SplashScreen.module.css';

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center p-8">
      <div className={styles.loader}></div>
    </div>
  );
} 