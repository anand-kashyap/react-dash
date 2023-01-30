import React from 'react';

export const Common = ({ kycDone, children }) => {
  return (
    <div>
      <header>
        <h1> Main Container</h1>
        <p>
          is KYC done? <strong>{kycDone ? 'YES' : 'NO'}</strong>
        </p>
      </header>
      <main>{children}</main>
    </div>
  );
};
