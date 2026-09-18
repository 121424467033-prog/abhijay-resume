import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText } from 'lucide-react';
import { RoutePath } from '../types';

interface NavbarProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath) => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenResumeModal: () => void;
}

const NAV_ITEMS: { label: string; path: RoutePath }[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Education', path: '/education' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  theme,
  onToggleTheme,
  onOpenResumeModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (path: RoutePath) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isCurrent = (path: RoutePath) => {
    if (path === '/projects') {
      return currentPath.startsWith('/projects');
    }
    return currentPath === path;
  };

  return (
    <header
      id="main-navigation-header"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--surface)]/90 backdrop-blur-md border-b border-[var(--border)] shadow-lg'
          : 'bg-[var(--background)]/80 backdrop-blur-sm border-b border-[var(--border-subtle)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand */}
        <button
          id="nav-brand-button"
          onClick={() => handleNavClick('/')}
          className="group flex flex-col text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded p-1"
          aria-label="Abhijay Gabbeta Home"
        >
          <span className="font-bold tracking-wider text-base sm:text-lg text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
            ABHIJAY GABBETA
          </span>
          <span className="text-[10px] sm:text-xs font-mono tracking-wider text-[var(--text-muted)] uppercase">
            B.Sc. Math &amp; Stats • Data Analytics
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const active = isCurrent(item.path);
            return (
              <button
                key={item.path}
                id={`nav-link-${item.label.toLowerCase()}`}
                onClick={() => handleNavClick(item.path)}
                className={`relative px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                  active
                    ? 'text-[var(--accent)] font-semibold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[var(--accent)] rounded-full animate-in fade-in" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action controls: Resume, Theme Toggle, Mobile Menu */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Resume indicator button */}
          <button
            id="nav-resume-btn"
            onClick={onOpenResumeModal}
            className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-mono border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--border-accent)] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            title="View Resume Status"
          >
            <FileText className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>Resume</span>
          </button>

          {/* Theme Toggle */}
          <button
            id="theme-toggle-btn"
            onClick={onToggleTheme}
            className="p-2 rounded-md text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)] border border-[var(--border)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-sky-600" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-[var(--text-primary)] hover:bg-[var(--surface-hover)] border border-[var(--border)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden fixed inset-x-0 top-16 sm:top-20 bg-[var(--surface)] border-b border-[var(--border)] shadow-2xl px-6 py-6 transition-all animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => {
              const active = isCurrent(item.path);
              return (
                <button
                  key={item.path}
                  id={`mobile-nav-${item.label.toLowerCase()}`}
                  onClick={() => handleNavClick(item.path)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                    active
                      ? 'bg-[var(--accent-glow)] text-[var(--accent)] font-semibold border-l-2 border-[var(--accent)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  <span>{item.label}</span>
                  {active && <span className="text-xs font-mono text-[var(--accent)]">● Current</span>}
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-[var(--border)] flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="inline-flex items-center space-x-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] font-mono"
              >
                <FileText className="w-4 h-4 text-[var(--accent)]" />
                <span>Download / View Resume</span>
              </button>
              <span className="text-xs text-[var(--text-muted)] font-mono">
                {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
