import React, { useState } from 'react';
import { X, FileText, Mail, Phone, Check, Copy } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] p-6 sm:p-8 shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--accent)]">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 id="resume-modal-title" className="text-lg font-bold text-[var(--text-primary)]">
              Resume Document Status
            </h3>
            <span className="text-xs font-mono text-[var(--text-muted)]">
              Abhijay Gabbeta • B.Sc. Math &amp; Stats
            </span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]/70 text-sm text-[var(--text-secondary)] space-y-2">
          <p className="leading-relaxed">
            The official resume PDF document is maintained directly and provided upon request for academic and professional inquiries.
          </p>
          <p className="text-xs font-mono text-[var(--text-muted)] pt-1 border-t border-[var(--border)]">
            Verified academic standing: GPA {portfolioData.education.gpa} (2024–2027)
          </p>
        </div>

        <div className="space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
            Request Resume Document Directly
          </div>

          <div className="flex items-center space-x-2">
            <a
              href={`mailto:${portfolioData.email}?subject=Resume%20Request%20-%20Abhijay%20Gabbeta&body=Hello%20Abhijay,%0A%0AI%20would%20like%20to%20request%20a%20copy%20of%20your%20current%20resume.%0A%0AThank%20you!`}
              className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-[var(--accent)] text-[#080c14] hover:bg-[var(--accent-hover)] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email Request</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-xs font-mono"
              title="Copy Email Address"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <a
            href={`tel:${portfolioData.phone}`}
            className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2 rounded-lg text-xs font-mono border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--surface-hover)] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>Direct Phone: {portfolioData.phone}</span>
          </a>
        </div>

        <div className="pt-2 border-t border-[var(--border)] text-center">
          <button
            onClick={onClose}
            className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] underline"
          >
            Dismiss Dialog
          </button>
        </div>
      </div>
    </div>
  );
};
