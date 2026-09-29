// DAY 9: Error Boundary

import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

const ErrorFallback = ({
  error,
  resetErrorBoundary
}) => {

  return (
    <div className="error-boundary">

      <h2>⚠️ Something went wrong</h2>

      <p>
        {error.message}
      </p>

      <button
        className="primary-button"
        onClick={resetErrorBoundary}
      >
        Try Again
      </button>

    </div>
  );
};

const ErrorBoundary = ({ children }) => {

  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) => {
        console.error(
          'Application Error:',
          error,
          info
        );
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;