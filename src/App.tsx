import { useState, useEffect } from 'react';
import { RoutePath } from './types';
import { portfolioData } from './data/portfolio';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Education } from './pages/Education';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { ProjectDetails } from './pages/ProjectDetails';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export default function App() {
  // Theme state: default dark mode
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('ag_portfolio_theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return 'dark';
  });

  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Synchronize path from URL
  const getInitialPath = (): RoutePath | string => {
    if (typeof window === 'undefined') return '/';
    // Check hash first (e.g. #/about)
    const hash = window.location.hash.replace(/^#/, '');
    if (hash && hash.startsWith('/')) {
      return hash;
    }
    const path = window.location.pathname;
    return path || '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);

  // Sync theme attribute to HTML element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ag_portfolio_theme', theme);
  }, [theme]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace(/^#/, '');
      if (hash && hash.startsWith('/')) {
        setCurrentPath(hash);
      } else {
        setCurrentPath(window.location.pathname || '/');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title dynamically
  useEffect(() => {
    const baseTitle = 'Abhijay Gabbeta';
    switch (currentPath) {
      case '/':
        document.title = `${baseTitle} | Mathematics & Statistics Student | Aspiring Data Analyst`;
        break;
      case '/about':
        document.title = `About Me | ${baseTitle}`;
        break;
      case '/education':
        document.title = `Education | ${baseTitle}`;
        break;
      case '/skills':
        document.title = `Technical Skills | ${baseTitle}`;
        break;
      case '/projects':
        document.title = `Projects | ${baseTitle}`;
        break;
      case '/projects/rfid-door-lock':
        document.title = `RFID Access Control System | ${baseTitle}`;
        break;
      case '/projects/laser-security':
        document.title = `Laser Security System | ${baseTitle}`;
        break;
      case '/contact':
        document.title = `Contact | ${baseTitle}`;
        break;
      default:
        document.title = `Page Not Found | ${baseTitle}`;
    }
  }, [currentPath]);

  const handleNavigate = (newPath: RoutePath) => {
    setCurrentPath(newPath);
    window.history.pushState({}, '', newPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Render current view
  const renderCurrentPage = () => {
    // Normalise path (trim trailing slash if longer than 1 char)
    const normalized = currentPath.length > 1 && currentPath.endsWith('/')
      ? currentPath.slice(0, -1)
      : currentPath;

    switch (normalized) {
      case '/':
        return <Home onNavigate={handleNavigate} />;
      case '/about':
        return <About onNavigate={handleNavigate} />;
      case '/education':
        return <Education onNavigate={handleNavigate} />;
      case '/skills':
        return <Skills onNavigate={handleNavigate} />;
      case '/projects':
        return <Projects onNavigate={handleNavigate} />;
      case '/projects/rfid-door-lock': {
        const rfidProject = portfolioData.projects.find((p) => p.slug === 'rfid-door-lock')!;
        return <ProjectDetails project={rfidProject} onNavigate={handleNavigate} />;
      }
      case '/projects/laser-security': {
        const laserProject = portfolioData.projects.find((p) => p.slug === 'laser-security')!;
        return <ProjectDetails project={laserProject} onNavigate={handleNavigate} />;
      }
      case '/contact':
        return <Contact />;
      default:
        return <NotFound onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--text-primary)] transition-colors duration-200">
      {/* Sticky Global Navigation */}
      <Navbar
        currentPath={currentPath as RoutePath}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Main Content View with Page Transition Fade */}
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        {renderCurrentPage()}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Resume Status Dialog */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
