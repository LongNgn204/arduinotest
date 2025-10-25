import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from './icons/ContentIcons';

export const CodeBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (typeof children === 'string') {
      navigator.clipboard.writeText(children).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Reset icon after 2 seconds
      }).catch(err => console.error('Failed to copy!', err));
    }
  };

  return (
    <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden my-4 relative group">
       <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 bg-slate-700/50 rounded-md text-slate-400 hover:text-white hover:bg-slate-600/70 transition-all opacity-0 group-hover:opacity-100"
        aria-label="Copy code"
      >
        {isCopied ? <CheckIcon /> : <ClipboardIcon />}
      </button>
      <pre className="language-cpp p-6 text-sm text-gray-200 overflow-x-auto">
        <code className="font-mono">
          {children}
        </code>
      </pre>
    </div>
  );
};
