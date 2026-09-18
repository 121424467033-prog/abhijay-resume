import React from 'react';
import { Compass, ArrowLeft } from 'lucide-react';
import { RoutePath } from '../types';

interface NotFoundProps {
  onNavigate: (path: RoutePath) => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onNavigate }) => {
  return (
    <div
      id="not-found-container"
      className="py-24 sm:py-32 max-w-xl mx-auto px-4 text-center space-y-6"
    >
      <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--accent)] flex items-center justify-center">
        <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: '8s' }} />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)]">
          ERROR 404
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
          PAGE NOT FOUND
        </h1>
        <p className="text-base text-[var(--text-secondary)]">
          Looks like this page took a wrong turn.
        </p>
      </div>

      <div className="pt-4">
        <button
          id="not-found-back-home-btn"
          onClick={() => onNavigate('/')}
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-semibold bg-[var(--accent)] text-[#080c14] hover:bg-[var(--accent-hover)] transition-all font-mono"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK HOME</span>
        </button>
      </div>
    </div>
  );
};
