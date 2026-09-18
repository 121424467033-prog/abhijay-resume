import React from 'react';
import { ArrowRight, Mail, FolderGit2, Sparkles } from 'lucide-react';
import { RoutePath } from '../types';
import { portfolioData } from '../data/portfolio';
import { MathematicalVisual } from '../components/MathematicalVisual';
import { QuickProfileStrip } from '../components/QuickProfileStrip';
import { ProjectCard } from '../components/ProjectCard';
import { CareerDirection } from '../components/CareerDirection';
import { SectionHeading } from '../components/SectionHeading';

interface HomeProps {
  onNavigate: (path: RoutePath) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div id="home-page-container" className="w-full">
      {/* 1. HERO SECTION */}
      <section
        id="hero-section"
        className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline & Intro */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-hover)] text-xs font-mono text-[var(--accent)]">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-ping" />
                <span>HELLO, I&apos;M</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)]">
                  ABHIJAY <span className="text-[var(--accent)]">GABBETA</span>
                </h1>
                <p className="text-xl sm:text-2xl font-semibold text-[var(--text-secondary)]">
                  Mathematics &amp; Statistics Student <br className="hidden sm:inline" />
                  <span className="text-[var(--text-primary)] font-bold">Aspiring Data Analyst</span>
                </p>
              </div>

              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                Building a foundation in analytics, technology, and practical problem solving through academic learning and hands-on projects.
              </p>

              {/* Action CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  id="hero-view-projects-btn"
                  onClick={() => onNavigate('/projects')}
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[var(--accent)] text-[#080c14] hover:bg-[var(--accent-hover)] transition-all duration-200 shadow-lg shadow-[var(--accent)]/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                >
                  <FolderGit2 className="w-4 h-4" />
                  <span>VIEW PROJECTS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-contact-me-btn"
                  onClick={() => onNavigate('/contact')}
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                >
                  <Mail className="w-4 h-4" />
                  <span>CONTACT ME</span>
                </button>
              </div>

              {/* Institutional affiliation footer info */}
              <div className="pt-4 flex items-center space-x-3 text-xs font-mono text-[var(--text-muted)] border-t border-[var(--border-subtle)]">
                <span>{portfolioData.education.institution}</span>
                <span>•</span>
                <span>B.Sc. 2024–2027</span>
                <span>•</span>
                <span>GPA {portfolioData.education.gpa}</span>
              </div>
            </div>

            {/* Right Column: Mathematical & Data Conceptual Visualization */}
            <div className="lg:col-span-5 flex justify-center">
              <MathematicalVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK PROFILE INFORMATION STRIP */}
      <QuickProfileStrip />

      {/* 3. FEATURED PROJECTS SECTION */}
      <section id="featured-projects-section" className="py-16 sm:py-24 bg-[var(--surface)]/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <SectionHeading
              eyebrow="Hands-on Experience"
              title="Featured Projects"
              description="Practical technical projects demonstrating embedded logic, optical sensing, and hardware-software system integration."
            />
            <button
              id="view-all-projects-link"
              onClick={() => onNavigate('/projects')}
              className="mt-4 sm:mt-0 inline-flex items-center space-x-1.5 text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors self-start sm:self-auto font-mono"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {portfolioData.projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. CAREER DIRECTION & STORYTELLING */}
      <CareerDirection />

      {/* 5. CONTACT CALL TO ACTION */}
      <section
        id="home-contact-cta"
        className="py-16 sm:py-20 bg-[var(--surface-card)] border-t border-[var(--border)] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-tech-dots opacity-40 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono text-[var(--accent)] border border-[var(--border)] bg-[var(--surface)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET&apos;S CONNECT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Interested in learning, building, and growing through meaningful opportunities?
          </h2>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Open to academic collaborations, foundational project discussions, and connecting with teams in data analytics and technology.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="cta-get-in-touch-btn"
              onClick={() => onNavigate('/contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl text-base font-bold bg-[var(--accent)] text-[#080c14] hover:bg-[var(--accent-hover)] transition-all shadow-xl shadow-[var(--accent)]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              id="cta-direct-email-btn"
              href={`mailto:${portfolioData.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl text-sm font-semibold border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="font-mono">{portfolioData.email}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
