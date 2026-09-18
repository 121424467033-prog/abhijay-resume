import React from 'react';
import { Quote, BookOpen, Wrench, Compass, ArrowRight } from 'lucide-react';
import { RoutePath } from '../types';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';

interface AboutProps {
  onNavigate: (path: RoutePath) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div id="about-page-container" className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. HERO */}
      <div className="max-w-4xl mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono text-[var(--accent)] border border-[var(--border)] bg-[var(--surface-hover)] mb-4">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
          <span>PORTFOLIO PROFILE</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight mb-4">
          ABOUT ME
        </h1>
        <p className="text-xl sm:text-2xl font-medium text-[var(--accent)] leading-relaxed">
          Mathematics &amp; Statistics Student with a growing interest in Data Analytics and emerging technologies.
        </p>
      </div>

      {/* 2. WHO I AM NARRATIVE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
        <div className="lg:col-span-7 space-y-6">
          <SectionHeading
            eyebrow="Background"
            title="Who I Am"
          />
          <div className="space-y-5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Abhijay Gabbeta is currently pursuing a <strong className="text-[var(--text-primary)]">Bachelor of Science in Mathematics and Statistics</strong> at <strong className="text-[var(--text-primary)]">St. Joseph&apos;s Degree and PG College, Hyderabad</strong> (2024–2027) with a current GPA of <strong className="text-[var(--accent)]">8.08 / 10</strong>.
            </p>
            <p>
              His academic background provides a foundation in mathematical and statistical thinking while his technical projects demonstrate hands-on interest in solving practical problems.
            </p>
            <p>
              His career objective is to begin a career in the Data Analyst domain while exploring technologies including deep learning, computer vision, and NLP.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('/education')}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-[var(--surface-hover)] hover:bg-[var(--accent)] hover:text-[#080c14] border border-[var(--border)] transition-all font-mono"
            >
              <span>View Academic Path</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('/skills')}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-[var(--surface-hover)] hover:bg-[var(--accent)] hover:text-[#080c14] border border-[var(--border)] transition-all font-mono"
            >
              <span>View Technical Skills</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Fact Sheet Card */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] space-y-5 shadow-xl">
          <h3 className="text-sm font-mono uppercase tracking-widest text-[var(--accent)] border-b border-[var(--border)] pb-3">
            Academic Snapshot
          </h3>
          <div className="space-y-4 text-sm font-mono">
            <div>
              <span className="text-[var(--text-muted)] text-xs block">CURRENT PROGRAM</span>
              <span className="text-[var(--text-primary)] font-semibold">{portfolioData.education.degree}</span>
              <span className="text-xs text-[var(--accent)] block">in {portfolioData.education.major}</span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] text-xs block">INSTITUTION</span>
              <span className="text-[var(--text-primary)] font-semibold">{portfolioData.education.institution}</span>
              <span className="text-xs text-[var(--text-secondary)] block">{portfolioData.education.location}</span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] text-xs block">DURATION</span>
              <span className="text-[var(--text-primary)] font-semibold">{portfolioData.education.duration}</span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] text-xs block">ACADEMIC RECORD</span>
              <span className="text-lg text-[var(--accent)] font-bold">GPA {portfolioData.education.gpa}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. CAREER OBJECTIVE BLOCK (QUOTE-STYLE STATEMENT) */}
      <section id="about-career-objective" className="mb-20">
        <div className="relative rounded-2xl border-2 border-[var(--accent)] bg-[var(--surface-card)] p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="absolute top-4 right-6 opacity-10 text-[var(--accent)] pointer-events-none">
            <Quote className="w-28 h-28" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)]">
              <span className="w-2.5 h-0.5 bg-[var(--accent)]" />
              <span>CAREER OBJECTIVE</span>
            </div>

            <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--text-primary)] leading-snug">
              &ldquo;{portfolioData.careerObjective}&rdquo;
            </blockquote>

            <p className="text-xs font-mono text-[var(--text-muted)] pt-3 border-t border-[var(--border)]">
              — Statement of purpose from Abhijay Gabbeta&apos;s professional resume
            </p>
          </div>
        </div>
      </section>

      {/* 4. PERSONAL BRAND CARDS */}
      <section id="about-personal-brand" className="space-y-10">
        <SectionHeading
          eyebrow="Core Pillars"
          title="Personal Brand &amp; Foundation"
          description="Descriptive summaries reflecting academic rigor, practical hardware-software problem solving, and long-term analytical goals."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: ANALYTICAL FOUNDATION */}
          <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] hover:border-[var(--accent)] hover:shadow-xl transition-all space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--accent)] flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                ANALYTICAL FOUNDATION
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                Mathematics and Statistics education. Developing structured reasoning, quantitative inference, and rigorous problem-solving habits through rigorous coursework at St. Joseph&apos;s College.
              </p>
            </div>
            <div className="pt-4 border-t border-[var(--border)] text-xs font-mono text-[var(--text-muted)]">
              B.Sc. Curriculum (2024–2027)
            </div>
          </div>

          {/* Card 2: HANDS-ON LEARNING */}
          <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] hover:border-[var(--accent)] hover:shadow-xl transition-all space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--accent)] flex items-center justify-center mb-6">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                HANDS-ON LEARNING
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                Technical projects involving RFID, Arduino, sensors, and security systems. Translating abstract logic into tangible hardware prototypes that authenticate and protect real-world perimeters.
              </p>
            </div>
            <div className="pt-4 border-t border-[var(--border)] text-xs font-mono text-[var(--text-muted)]">
              2 Functional Technical Prototypes
            </div>
          </div>

          {/* Card 3: FUTURE FOCUS */}
          <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] hover:border-[var(--accent)] hover:shadow-xl transition-all space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--accent)] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                FUTURE FOCUS
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                Growing toward Data Analytics and emerging technologies. Expanding skills in relational databases, algorithmic coding, and exploring cutting-edge deep learning, computer vision, and NLP paradigms.
              </p>
            </div>
            <div className="pt-4 border-t border-[var(--border)] text-xs font-mono text-[var(--text-muted)]">
              Data Analyst Trajectory
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
