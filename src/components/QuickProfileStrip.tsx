import React from 'react';
import { GraduationCap, Award, Cpu, Target } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const QuickProfileStrip: React.FC = () => {
  return (
    <section
      id="quick-profile-strip"
      aria-label="Quick Academic & Professional Profile Summary"
      className="w-full border-y border-[var(--border)] bg-[var(--surface)]/70 backdrop-blur-sm relative z-20 py-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border)]">
          {/* Metric 1: Degree & Period */}
          <div className="pt-3 sm:pt-0 sm:px-4 first:pt-0 first:px-0 flex items-start space-x-3">
            <div className="p-2 rounded-lg bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--accent)] shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                Degree &amp; Program
              </div>
              <div className="text-sm sm:text-base font-semibold text-[var(--text-primary)] leading-snug mt-0.5">
                B.Sc. Mathematics &amp; Statistics
              </div>
              <div className="text-xs font-mono text-[var(--text-muted)] mt-0.5">
                {portfolioData.education.duration}
              </div>
            </div>
          </div>

          {/* Metric 2: Academic GPA */}
          <div className="pt-3 sm:pt-0 sm:px-4 flex items-start space-x-3">
            <div className="p-2 rounded-lg bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--accent)] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                Academic Standing
              </div>
              <div className="text-sm sm:text-base font-bold text-[var(--text-primary)] leading-snug mt-0.5">
                GPA {portfolioData.education.gpa}
              </div>
              <div className="text-xs font-mono text-[var(--text-muted)] mt-0.5">
                St. Joseph&apos;s Degree &amp; PG College
              </div>
            </div>
          </div>

          {/* Metric 3: Projects Count */}
          <div className="pt-3 sm:pt-0 sm:px-4 flex items-start space-x-3">
            <div className="p-2 rounded-lg bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--accent)] shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                Technical Projects
              </div>
              <div className="text-sm sm:text-base font-semibold text-[var(--text-primary)] leading-snug mt-0.5">
                2 Featured Projects
              </div>
              <div className="text-xs font-mono text-[var(--text-muted)] mt-0.5">
                RFID &amp; Laser Systems
              </div>
            </div>
          </div>

          {/* Metric 4: Career Objective Goal */}
          <div className="pt-3 sm:pt-0 sm:px-4 flex items-start space-x-3">
            <div className="p-2 rounded-lg bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--accent)] shrink-0">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                Career Goal
              </div>
              <div className="text-sm sm:text-base font-bold text-[var(--accent)] leading-snug mt-0.5">
                Data Analyst
              </div>
              <div className="text-xs font-mono text-[var(--text-muted)] mt-0.5">
                Target Domain &amp; Trajectory
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
