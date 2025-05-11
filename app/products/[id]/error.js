'use client';

import ErrorDisplay from '@/components/ErrorDisplay';

export default function Error({ error, reset }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <ErrorDisplay 
        error="Unable to connect to the server. Please check your internet connection." 
        onRetry={reset}
      />
    </div>
  );
} 