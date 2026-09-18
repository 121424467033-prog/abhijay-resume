import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  id?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  id,
}) => {
  return (
    <div
      id={id}
      className={`space-y-3 mb-10 sm:mb-14 ${
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'
      }`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center space-x-2 text-xs font-mono tracking-widest uppercase text-[var(--accent)] ${
            align === 'center' ? 'justify-center' : ''
          }`}
        >
          <span className="w-2 h-0.5 bg-[var(--accent)]" />
          <span>{eyebrow}</span>
          {align === 'center' && <span className="w-2 h-0.5 bg-[var(--accent)]" />}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
