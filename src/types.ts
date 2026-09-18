export type RoutePath =
  | '/'
  | '/about'
  | '/education'
  | '/skills'
  | '/projects'
  | '/projects/rfid-door-lock'
  | '/projects/laser-security'
  | '/contact';

export interface EducationData {
  degree: string;
  major: string;
  institution: string;
  location: string;
  duration: string;
  startYear: number;
  currentYear: number;
  expectedCompletionYear: number;
  gpa: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
  description: string;
}

export interface AreaOfInterest {
  title: string;
  description: string;
  contextNote: string;
}

export interface ProjectComponent {
  name: string;
  role: string;
}

export interface ProjectDetailData {
  id: string;
  slug: string;
  number: string;
  title: string;
  tag: string;
  shortDescription: string;
  technologies: string[];
  features: string[];
  problem: string;
  solution: string;
  overview: string;
  components: string[];
  outcome: string;
  workflowSteps: {
    label: string;
    subtext: string;
  }[];
}

export interface ProfileData {
  name: string;
  phone: string;
  email: string;
  title: string;
  subtitle: string;
  bio: string;
  careerObjective: string;
  education: EducationData;
  skills: SkillCategory[];
  areasOfInterest: AreaOfInterest[];
  projects: ProjectDetailData[];
}
