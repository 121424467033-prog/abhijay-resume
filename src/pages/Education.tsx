import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, Sigma, Activity, Binary } from 'lucide-react';
import { RoutePath } from '../types';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';

interface EducationProps {
  onNavigate: (path: RoutePath) => void;
}

export const Education: React.FC<EducationProps> = ({ onNavigate }) => {
  return (
    <div id="education-page-container" className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. HERO */}
      <div className="max-w-4xl mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono text-[var(--accent)] border border-[var(--border)] bg-[var(--surface-hover)] mb-4">
          <GraduationCap className="w-4 h-4" />
          <span>ACADEMIC FOUNDATION</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight mb-4">
          EDUCATION
        </h1>
        <p className="text-xl sm:text-2xl font-medium text-[var(--accent)] leading-relaxed">
          Building the academic foundation behind my analytical journey.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        {/* 2. MAIN EDUCATION CARD */}
        <div className="lg:col-span-7 space-y-8">
          <div className="relative rounded-2xl border-2 border-[var(--border-accent)] bg-[var(--surface-card)] p-8 sm:p-10 shadow-2xl overflow-hidden">
            {/* Background mathematical accent watermark */}
            <div className="absolute -right-8 -bottom-8 opacity-5 text-[var(--accent)] pointer-events-none">
              <Sigma className="w-64 h-64" />
            </div>

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30">
                  UNDERGRADUATE DEGREE
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)] flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>2024 — 2027</span>
                </span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
                  Bachelor of Science
                </h2>
                <div className="text-lg sm:text-xl font-semibold text-[var(--accent)] mt-1">
                  in Mathematics and Statistics
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-[var(--border)] text-sm sm:text-base text-[var(--text-secondary)]">
                <div className="font-semibold text-[var(--text-primary)]">
                  {portfolioData.education.institution}
                </div>
                <div className="flex items-center space-x-1.5 text-xs text-[var(--text-muted)] font-mono">
                  <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>{portfolioData.education.location}</span>
                </div>
              </div>

              {/* GPA Highlight Box */}
              <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]/90 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] flex items-center space-x-1">
                    <Award className="w-3.5 h-3.5 text-[var(--accent)]" />
                    <span>CUMULATIVE GRADE POINT AVERAGE</span>
                  </div>
                  <div className="text-xs text-[var(--text-secondary)] mt-0.5">
                    Official Academic Standing
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-extrabold font-mono text-[var(--accent)]">
                    {portfolioData.education.gpa}
                  </div>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">Scale of 10.0</span>
                </div>
              </div>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed pt-2">
                This academic training cultivates systematic mathematical rigor, probabilistic understanding, and statistical analysis—forming the quantitative bedrock required for modern data analytics and technical investigation.
              </p>
            </div>
          </div>

          {/* Subtly connected navigation prompt */}
          <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface-hover)] flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-[var(--text-primary)]">
                Ready to view related technical skills?
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                Explore C programming, databases, and CAD tools.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/skills')}
              className="px-4 py-2 rounded-lg text-xs font-mono font-semibold bg-[var(--accent)] text-[#080c14] hover:bg-[var(--accent-hover)] transition-colors shrink-0"
            >
              View Skills →
            </button>
          </div>
        </div>

        {/* 3. MAIN TIMELINE */}
        <div className="lg:col-span-5 space-y-6">
          <SectionHeading
            eyebrow="Chronology"
            title="Degree Timeline"
          />

          <div className="relative pl-6 sm:pl-8 border-l-2 border-[var(--accent)]/40 space-y-10 py-2">
            {/* Timeline Node 1: 2024 */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[var(--surface)] border-2 border-[var(--accent)] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              </div>
              <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface-card)] shadow-sm space-y-1 group-hover:border-[var(--border-accent)] transition-colors">
                <div className="text-xs font-mono font-bold text-[var(--accent)]">
                  YEAR 2024
                </div>
                <h4 className="text-base font-bold text-[var(--text-primary)]">
                  Started B.Sc.
                </h4>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                  Commenced Bachelor of Science in Mathematics and Statistics at St. Joseph&apos;s Degree and PG College.
                </p>
              </div>
            </div>

            {/* Timeline Node 2: 2026 */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[var(--accent)] border-2 border-[var(--accent)] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#080c14] animate-ping" />
              </div>
              <div className="p-5 rounded-xl border-2 border-[var(--accent)] bg-[var(--accent-glow)] shadow-md space-y-1">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-mono font-bold text-[var(--accent)]">
                    YEAR 2026 (PRESENT)
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--accent)] text-[#080c14] font-bold">
                    ACTIVE
                  </span>
                </div>
                <h4 className="text-base font-bold text-[var(--text-primary)]">
                  Currently Pursuing Degree
                </h4>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                  Actively advancing through the curriculum with an 8.08 GPA and developing hands-on technical project prototypes.
                </p>
              </div>
            </div>

            {/* Timeline Node 3: 2027 */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[var(--surface)] border-2 border-[var(--border)] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)]" />
              </div>
              <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface-card)] shadow-sm space-y-1 group-hover:border-[var(--border-accent)] transition-colors">
                <div className="text-xs font-mono font-bold text-[var(--text-muted)]">
                  YEAR 2027
                </div>
                <h4 className="text-base font-bold text-[var(--text-primary)]">
                  Expected Completion
                </h4>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                  Anticipated graduation and formal entry into the professional Data Analyst domain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. MATHEMATICAL & STATISTICAL FOUNDATION VISUALIZATION */}
      <section className="pt-10 border-t border-[var(--border)]">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-[var(--accent)] mb-2">
            <Activity className="w-3.5 h-3.5" />
            <span>Curricular Philosophy</span>
          </div>
          <h3 className="text-2xl font-bold text-[var(--text-primary)]">
            Quantitative Foundations
          </h3>
          <p className="text-sm text-[var(--text-secondary)] mt-2">
            Subtle mathematical and statistical paradigms that reinforce computational logic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] space-y-3">
            <div className="flex items-center space-x-2 text-[var(--accent)]">
              <Sigma className="w-5 h-5" />
              <h4 className="font-bold text-base text-[var(--text-primary)]">
                Mathematical Foundations
              </h4>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Provides the analytical architecture: formal logic, algebraic structures, calculus, and discrete problem framing. Essential for translating complex real-world data patterns into solvable algorithms.
            </p>
            <div className="pt-2 text-xs font-mono text-[var(--text-muted)] flex items-center space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Logic • Calculus • Linear Reasoning</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] space-y-3">
            <div className="flex items-center space-x-2 text-[var(--accent)]">
              <Binary className="w-5 h-5" />
              <h4 className="font-bold text-base text-[var(--text-primary)]">
                Statistical Methodologies
              </h4>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Provides the empirical framework: probability theory, distributions, sample variance, hypothesis testing, and quantitative inference. Crucial for valid interpretation in modern data analysis.
            </p>
            <div className="pt-2 text-xs font-mono text-[var(--text-muted)] flex items-center space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Probability • Distributions • Inference</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
