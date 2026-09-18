import React from 'react';
import { Terminal, Database, PenTool, Sparkles, Binary, Cpu, Eye, Compass, ArrowRight } from 'lucide-react';
import { RoutePath } from '../types';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';

interface SkillsProps {
  onNavigate: (path: RoutePath) => void;
}

export const Skills: React.FC<SkillsProps> = ({ onNavigate }) => {
  const categoryIcons: Record<string, React.ElementType> = {
    PROGRAMMING: Terminal,
    DATABASES: Database,
    'DESIGN & ENGINEERING': PenTool,
  };

  const interestIcons = [Database, Cpu, Eye, Sparkles];

  return (
    <div id="skills-page-container" className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. HERO */}
      <div className="max-w-4xl mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono text-[var(--accent)] border border-[var(--border)] bg-[var(--surface-hover)] mb-4">
          <Terminal className="w-4 h-4" />
          <span>TECHNICAL COMPETENCIES</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight mb-4">
          TECHNICAL SKILLS
        </h1>
        <p className="text-xl sm:text-2xl font-medium text-[var(--accent)] leading-relaxed">
          Tools and technologies currently included in my technical foundation.
        </p>
      </div>

      {/* 2. CORE SKILLS CATEGORIES (NO FAKE PERCENTAGES) */}
      <div className="space-y-6 mb-20">
        <SectionHeading
          eyebrow="Core Competencies"
          title="Technical Foundation"
          description="Verified tools and programming languages directly from the resume curriculum. Presented transparently without artificial proficiency percentages."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.skills.map((cat) => {
            const IconComponent = categoryIcons[cat.category] || Binary;
            return (
              <div
                key={cat.category}
                id={`skill-category-${cat.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] hover:border-[var(--border-accent)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--accent)] flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[var(--text-muted)] px-2.5 py-1 rounded bg-[var(--surface)] border border-[var(--border)]">
                      RESUME VERIFIED
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] tracking-wide mb-1">
                      {cat.category}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-[var(--border)]">
                    <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                      Specific Toolsets
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skillName) => (
                        <div
                          key={skillName}
                          className="px-3.5 py-2 rounded-lg bg-[var(--surface-hover)] border border-[var(--border)] text-sm font-semibold text-[var(--text-primary)] flex items-center space-x-2"
                        >
                          <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                          <span>{skillName}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[var(--border)] text-[11px] font-mono text-[var(--text-muted)] flex items-center justify-between">
                  <span>Foundational Skill</span>
                  <span className="text-[var(--accent)]">Academic &amp; Lab</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. AREAS OF INTEREST (CLEARLY LABELED) */}
      <section id="skills-areas-of-interest" className="pt-12 border-t border-[var(--border)]">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono text-[var(--accent)] border border-[var(--border)] bg-[var(--surface-hover)] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>CAREER OBJECTIVE DOMAINS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            AREAS OF INTEREST
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] mt-3 leading-relaxed">
            These four focus areas originate directly from the career objective statement in the resume. They represent targeted domains of future study, research exploration, and professional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.areasOfInterest.map((interest, idx) => {
            const Icon = interestIcons[idx % interestIcons.length];
            return (
              <div
                key={interest.title}
                className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] hover:border-[var(--accent)] hover:bg-[var(--surface-hover)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--accent)] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {interest.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {interest.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border)]">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] flex items-center space-x-1">
                    <span>STATUS:</span>
                    <span className="text-[var(--text-muted)]">Exploratory Focus</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-10 p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)]/60 text-xs font-mono text-[var(--text-muted)] max-w-3xl leading-relaxed">
          <strong className="text-[var(--text-primary)]">Factual Transparency:</strong> The above topics (Data Analytics, Deep Learning, Computer Vision, and Natural Language Processing) reflect areas of ongoing study and ambition stated in Abhijay&apos;s career objective. They are not represented as completed commercial projects or expert qualifications.
        </div>

        {/* Project Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-[var(--text-primary)]">
              Explore Hands-on Projects
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              See how these analytical and programming foundations are applied in physical systems.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/projects')}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-semibold bg-[var(--accent)] text-[#080c14] hover:bg-[var(--accent-hover)] transition-all shrink-0 font-mono"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
