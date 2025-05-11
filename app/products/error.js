'use client';

import ErrorDisplay from '@/components/ErrorDisplay';

/**
 * A client-side component that displays a friendly error message
 * when the product with the given ID cannot be fetched from the API.
 *
 * The component is rendered on the client when the product page is accessed
 * directly, and the API request fails.
 *
 * The component displays a centered error message with a retry button.
 * When the retry button is clicked, the `reset` callback is executed,
 * which resets the state of the page and retries the API request.
 *
 * If the `reset` callback is not provided, the page will reload on retry.
 *
 * @param {Object} props - The props for the component.
 * @param {string} [props.error] - The error message to display.
 * @param {function} [props.onRetry] - Optional callback function to execute when the retry button is clicked.
 */
export default function Error({ error, reset }) {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <ErrorDisplay 
        error="Unable to connect to the server. Please check your internet connection." 
        onRetry={reset}
      />
    </div>
  );
} 