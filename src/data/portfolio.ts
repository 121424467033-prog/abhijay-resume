import { ProfileData } from '../types';

export const portfolioData: ProfileData = {
  name: 'Abhijay Gabbeta',
  phone: '9154882773',
  email: 'abhijaygabbeta7@gmail.com',
  title: 'Mathematics & Statistics Student',
  subtitle: 'Aspiring Data Analyst',
  bio: "Abhijay Gabbeta is currently pursuing a Bachelor of Science in Mathematics and Statistics at St. Joseph's Degree and PG College, Hyderabad. His academic background provides a foundation in mathematical and statistical thinking while his technical projects demonstrate hands-on interest in solving practical problems. His career objective is to begin a career in the Data Analyst domain while exploring technologies including deep learning, computer vision, and NLP.",
  careerObjective:
    'To start my career in the Data Analyst domain by working with cutting-edge technologies such as deep learning, computer vision, and NLP, contributing to impactful solutions while growing with the organization.',
  education: {
    degree: 'Bachelor of Science',
    major: 'Mathematics and Statistics',
    institution: "St. Joseph's Degree and PG College",
    location: 'Hyderabad',
    duration: '2024–2027',
    startYear: 2024,
    currentYear: 2026,
    expectedCompletionYear: 2027,
    gpa: '8.08 / 10',
  },
  skills: [
    {
      category: 'PROGRAMMING',
      skills: ['C Programming'],
      description: 'Foundational programming language understanding data structures, algorithmic logic, and memory structures.',
    },
    {
      category: 'DATABASES',
      skills: ['Databases'],
      description: 'Foundational concepts of relational data organization, querying structures, and structured record storage.',
    },
    {
      category: 'DESIGN & ENGINEERING',
      skills: ['AutoCAD', 'SolidWorks'],
      description: 'Computer-aided design and parametric modeling tools for drafting, spatial planning, and component design.',
    },
  ],
  areasOfInterest: [
    {
      title: 'Data Analytics',
      description: 'Exploring analytical approaches to working with data.',
      contextNote: 'Career Objective Interest Area',
    },
    {
      title: 'Deep Learning',
      description: 'Exploring modern machine-learning approaches.',
      contextNote: 'Career Objective Interest Area',
    },
    {
      title: 'Computer Vision',
      description: 'Exploring technology for working with visual information.',
      contextNote: 'Career Objective Interest Area',
    },
    {
      title: 'Natural Language Processing (NLP)',
      description: 'Exploring computational approaches to language and text.',
      contextNote: 'Career Objective Interest Area',
    },
  ],
  projects: [
    {
      id: 'rfid-access-system',
      slug: 'rfid-door-lock',
      number: '01',
      title: 'RFID Door Lock Access Control System',
      tag: 'Security / Access Control',
      shortDescription:
        'Designed and developed a secure, contactless door access system using RFID technology and Arduino.',
      technologies: ['RFID', 'Arduino', 'LCD Display'],
      features: [
        'RFID authentication',
        'Authorized-user access',
        'Access-status display',
        'Contactless entry',
      ],
      problem:
        'Traditional key-based access can have limitations around unauthorized access and convenience.',
      solution:
        'An RFID-based authentication mechanism controls access to the door by validating credentials and displaying status feedback in real time.',
      overview:
        'The project is a secure, contactless door access system using RFID technology and Arduino. It replaces manual key mechanisms with contactless radio-frequency identification, providing automated verification and clear visual status on an LCD panel.',
      components: ['RFID', 'Arduino', 'LCD Display'],
      outcome:
        'Successfully engineered a functional contactless access mechanism demonstrating practical integration of embedded logic, sensor inputs, and user status feedback.',
      workflowSteps: [
        { label: 'RFID Card', subtext: 'User presents tag' },
        { label: 'RFID Authentication', subtext: 'Receiver reads unique ID' },
        { label: 'Access Validation', subtext: 'Logic validates authorization' },
        { label: 'Authorized Check', subtext: 'Condition evaluation (Yes / No)' },
        { label: 'Action & LCD Status', subtext: 'Grant access or display denied' },
      ],
    },
    {
      id: 'laser-security-system',
      slug: 'laser-security',
      number: '02',
      title: 'Laser Security System',
      tag: 'Security / Intrusion Detection',
      shortDescription:
        'Designed a laser-based security system that detects intrusions by monitoring interruptions in a laser beam using an LDR sensor.',
      technologies: [
        'Laser',
        'LDR sensor',
        'Signal conditioning',
        'Transistor-based triggering',
        'Alarm',
      ],
      features: [
        'Beam interruption detection',
        'Intrusion detection',
        'Signal processing',
        'Alarm triggering',
        'Real-time alert mechanism',
      ],
      problem:
        'Unauthorized perimeter breach and intrusion detection require responsive, continuous monitoring mechanisms to trigger immediate deterrents.',
      solution:
        'A continuous laser beam is directed at a light-dependent resistor (LDR); interruption of the beam alters sensor state, which is conditioned and passed to a transistor switch to trigger an alert alarm.',
      overview:
        'A laser-based security system designed to detect intrusions by monitoring interruptions in a laser beam using an LDR sensor. The system couples optical sensing with transistor-based threshold switching for reliable alert activation.',
      components: [
        'Laser',
        'LDR sensor',
        'Signal conditioning',
        'Transistor-based triggering',
        'Alarm',
      ],
      outcome:
        'Demonstrated practical sensor circuitry, optical path monitoring, and transistor switching principles to build an operational perimeter alert setup.',
      workflowSteps: [
        { label: 'Laser Beam', subtext: 'Continuous optical ray emitted' },
        { label: 'LDR Sensor', subtext: 'Receives focused beam' },
        { label: 'Monitor Beam', subtext: 'Tracks light threshold' },
        { label: 'Beam Interrupted?', subtext: 'Obstacle breaks ray' },
        { label: 'Signal Conditioning', subtext: 'Resistance change processed' },
        { label: 'Transistor Trigger', subtext: 'Switching threshold exceeded' },
        { label: 'Alarm Activation', subtext: 'Immediate alert sounded' },
      ],
    },
  ],
};
