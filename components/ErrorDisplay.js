'use client';

/**
 * A React component that displays an error message and a retry button.
 * 
 * @param {Object} props - The props for the component.
 * @param {string} props.error - The error message to display.
 * @param {function} [props.onRetry] - Optional callback function to execute when the retry button is clicked.
 *                                      If not provided, the page will reload on retry.
 */

export default function ErrorDisplay({ error, onRetry }) {
  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="text-center py-12">
      <div className="mb-6">
        <svg 
          className="mx-auto h-12 w-12 text-gray-400" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          aria-hidden="true"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
          />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Connection Error</h3>
      <p className="text-gray-600 mb-6">{error}</p>
      <button 
        onClick={handleRetry} 
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Try Again
      </button>
    </div>
  );
} 