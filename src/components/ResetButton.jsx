import React from 'react';

const ResetButton = ({ onReset }) => {
  return (
    <button
      onClick={onReset}
      className="fixed bottom-6 right-6 bg-[var(--g3000-danger)] text-white px-6 py-3 rounded-lg
        shadow-lg hover:bg-opacity-90 transition-all duration-200 font-medium
        border-2 border-[var(--g3000-border)] uppercase tracking-wider text-sm"
    >
      Reset Checklist
    </button>
  );
};

export default ResetButton; 