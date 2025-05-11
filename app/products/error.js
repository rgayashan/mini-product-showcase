'use client';

import ErrorDisplay from '@/components/ErrorDisplay';

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