import React from 'react';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import { RoutePath } from '../types';
import { portfolioData } from '../data/portfolio';

interface FooterProps {
  onNavigate: (path: RoutePath) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (path: RoutePath) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="w-full bg-[var(--surface)] border-t border-[var(--border)] pt-12 pb-8 mt-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-[var(--border)]">
          {/* Col 1: Identity */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse" />
              <h2 className="text-lg font-bold tracking-wider text-[var(--text-primary)]">
                {portfolioData.name.toUpperCase()}
              </h2>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {portfolioData.title}
              <br />
              <span className="text-[var(--accent)] font-medium">{portfolioData.subtitle}</span>
            </p>
            <p className="text-xs text-[var(--text-muted)] font-mono">
              {portfolioData.education.institution} • Hyderabad
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] mb-4">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {[
                { label: 'Home', path: '/' as RoutePath },
                { label: 'About', path: '/about' as RoutePath },
                { label: 'Education', path: '/education' as RoutePath },
                { label: 'Skills', path: '/skills' as RoutePath },
                { label: 'Projects', path: '/projects' as RoutePath },
                { label: 'Contact', path: '/contact' as RoutePath },
              ].map((item) => (
                <li key={item.path}>
                  <button
                    id={`footer-nav-${item.label.toLowerCase()}`}
                    onClick={() => handleNav(item.path)}
                    className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors inline-flex items-center py-1 text-left"
                  >
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] mb-4">
              Contact
            </h3>
            <div className="space-y-3 text-sm">
              <a
                id="footer-email-link"
                href={`mailto:${portfolioData.email}`}
                className="group flex items-center space-x-2.5 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                <Mail className="w-4 h-4 text-[var(--accent)]" />
                <span className="font-mono text-xs sm:text-sm truncate">{portfolioData.email}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                id="footer-phone-link"
                href={`tel:${portfolioData.phone}`}
                className="group flex items-center space-x-2.5 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                <Phone className="w-4 h-4 text-[var(--accent)]" />
                <span className="font-mono text-xs sm:text-sm">{portfolioData.phone}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <div className="pt-2">
                <span className="inline-block px-2.5 py-1 text-[11px] font-mono rounded border border-[var(--border)] text-[var(--text-muted)] bg-[var(--surface-hover)]">
                  Status: Pursuing B.Sc. (2024–2027)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-muted)] font-mono space-y-2 sm:space-y-0">
          <p>© 2026 Abhijay Gabbeta. All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Built with precision &amp; mathematical integrity</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
