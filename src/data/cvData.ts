import {
  ContactInfo,
  ExperienceItem,
  ResearchProject,
  EducationItem,
  SkillCategory,
  ConferenceItem,
  LanguageItem,
} from '../types';

export const contactData: ContactInfo = {
  name: 'Heba Anis',
  legalName: 'Heba Anis Shebl Sayed Ahmed',
  title: 'MSc Candidate | Research Assistant at EML at American University in Cairo',
  location: 'Alexandria, Egypt',
  phone: '+20 106 558 6208',
  emails: [
    {
      address: 'Heba.anis@aucegypt.edu',
      label: 'The American University in Cairo (AUC)',
      type: 'AUC',
    },
    {
      address: 'Std.heba.anis@niles.edu.eg',
      label: 'National Institute of Laser Sciences (NILES)',
      type: 'NILES',
    },
  ],
  orcid: {
    id: '0009-0003-0451-5562',
    url: 'https://orcid.org/0009-0003-0451-5562',
  },
  researchGate: {
    name: 'Heba Sayed Ahmed',
    url: 'https://www.researchgate.net/search/researcher?q=Heba+Sayed+Ahmed',
  },
};

export const professionalSummary = {
  shortIntro:
    'Laser science researcher specializing in laser–matter interaction, pulsed laser ablation in liquid (LAL), and functional nanomaterial synthesis for advanced energy and antibacterial applications.',
  fullProfile:
    'MSc candidate in Laser Science specializing in Laser-Matter Interaction and nanomaterial synthesis. Research experience in Nd:YAG (1064 nm) laser ablation in liquid (LAL) for metal oxide nanoparticle fabrication, structural and optical characterization, and ROS-related antibacterial applications. Current Research Assistant at EML at American University in Cairo, with hands-on experience in materials characterization, spectroscopic analysis, laboratory research, and scientific data interpretation.',
  keyPillars: [
    {
      title: 'Laser–Matter Interaction',
      description:
        'Fundamental interaction physics of pulsed laser beams with liquid-phase targets for clean, surfactant-free nanomaterial synthesis.',
      metric: '1064 nm Nd:YAG',
    },
    {
      title: 'Nanomaterial Synthesis',
      description:
        'Controlled fabrication of metal oxide nanostructures with tailored dopant stoichiometry (Sr-doped ZnO matrix).',
      metric: 'LAL Synthesis',
    },
    {
      title: 'Advanced Characterization',
      description:
        'Multi-technique structural, morphological, and optical evaluation using XRD, SEM, UV-Vis, and Photoluminescence (PL) spectroscopy.',
      metric: '4+ Techniques',
    },
    {
      title: 'Energy & Antibacterial Study',
      description:
        'Evaluating Reactive Oxygen Species (ROS) generation mechanisms and characterization of cutting-edge energy materials.',
      metric: 'ROS & Energy Labs',
    },
  ],
};

export const currentExperience: ExperienceItem[] = [
  {
    id: 'auc-research-assistant',
    role: 'Research Assistant',
    lab: 'Energy Materials Lab (EML)',
    institution: 'The American University in Cairo (AUC)',
    period: 'Current',
    isCurrent: true,
    type: 'appointment',
    focus: [
      'Energy Materials Research',
      'Materials Characterization',
      'Spectroscopic Analysis (UV-Vis & PL)',
      'Scientific Reporting & Safety Standards',
    ],
    responsibilities: [
      'Conduct laboratory research in energy materials and materials characterization within the interdisciplinary Energy Materials Lab (EML) at The American University in Cairo (AUC).',
      'Perform and analyze materials characterization measurements, including UV-Vis and photoluminescence (PL) spectroscopy, with interpretation of experimental data.',
      'Support experimental preparation, measurement, data analysis, and scientific reporting in laboratory research activities.',
      'Maintain rigorous laboratory safety standards, chemical hygiene, and standard operating procedures (SOP).',
    ],
  },
];

export const masterProject: ResearchProject = {
  id: 'master-thesis-project',
  title: 'Synthesis of Sr-doped ZnO nanoparticles via laser ablation in liquid for enhanced ROS generation',
  status: 'Ongoing',
  objective:
    'Synthesize strontium-doped zinc oxide (Sr-doped ZnO) nanostructures using pulsed laser ablation in liquid to investigate the enhanced generation of Reactive Oxygen Species (ROS) and elucidate the underlying antibacterial mechanisms.',
  laserSystem: {
    name: 'Nd:YAG Pulsed Laser',
    wavelength: '1064 nm (Fundamental Harmonic)',
    method: 'Laser Ablation in Liquid (LAL)',
    safety: 'Implementation of rigorous laser safety protocols and beam containment',
  },
  materials: {
    host: 'Zinc Oxide (ZnO) Matrix',
    dopant: 'Strontium (Sr) Dopant',
    nanomaterialClass: 'Doped Metal Oxide Nanoparticles',
  },
  characterization: [
    'X-ray Diffraction (XRD) — Phase identification and crystalline structure evaluation',
    'Scanning Electron Microscopy (SEM) — Morphological assessment and particle size distribution',
    'UV-Vis Spectroscopy — Optical absorption spectra and bandgap determination',
    'Photoluminescence (PL) Spectroscopy — Defect states, emission profiles, and charge carrier dynamics',
  ],
  application: {
    target: 'Enhanced Reactive Oxygen Species (ROS) Generation',
    mechanism: 'Investigation of ROS-related antibacterial mechanisms and correlation to dopant-tuned nanoparticle properties',
  },
  keyContributions: [
    'Operate an Nd:YAG laser (1064 nm) based laser ablation in liquid (LAL) system and apply laser safety protocols.',
    'Control Sr dopant incorporation in the ZnO matrix and prepare nanomaterials for downstream characterization.',
    'Perform structural, morphological, and optical characterization using XRD, SEM, and UV-Vis spectroscopy; analyze and interpret experimental data.',
    'Investigate ROS-related antibacterial mechanisms and their relationship to nanoparticle properties.',
  ],
};

export const educationList: EducationItem[] = [
  {
    id: 'edu-msc',
    degree: 'MSc in Laser Science & Laser-Matter Interaction',
    institution: 'National Institute of Laser Sciences (NILES), Cairo University',
    statusOrYear: 'Ongoing',
    isOngoing: true,
  },
  {
    id: 'edu-pre-master',
    degree: 'Pre-Master in Laser Science',
    institution: 'National Institute of Laser Sciences (NILES), Cairo University',
    statusOrYear: '2023',
  },
  {
    id: 'edu-diploma',
    degree: 'Diploma in Laser Science & Interaction with Matter',
    institution: 'National Institute of Laser Sciences (NILES), Cairo University',
    statusOrYear: 'Completed',
  },
  {
    id: 'edu-bsc',
    degree: 'BSc in Physics',
    institution: 'University Degree in Physical Sciences',
    statusOrYear: 'Completed',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'laser-systems',
    category: 'Laser Systems & Technology',
    badge: 'Optics & Beam Delivery',
    skills: [
      {
        name: 'Nd:YAG Laser (1064 nm)',
        detail: 'Pulsed solid-state laser operation at fundamental near-infrared wavelength for ablation.',
        tag: 'Laser Physics',
      },
      {
        name: 'Laser Ablation in Liquid (LAL)',
        detail: 'Green physical synthesis route for high-purity metal oxide nanoparticles in liquid media.',
        tag: 'Synthesis Method',
      },
      {
        name: 'Laser Safety Protocols',
        detail: 'Strict adherence to protective eyewear standards, beam path alignment safety, and laboratory hazard management.',
        tag: 'Safety Compliance',
      },
    ],
  },
  {
    id: 'nanomaterials',
    category: 'Nanomaterials & Synthesis',
    badge: 'Material Fabrication',
    skills: [
      {
        name: 'Metal Oxide Nanoparticles',
        detail: 'Fabrication and optimization of transition and main-group metal oxide nanosystems.',
        tag: 'Nanomaterials',
      },
      {
        name: 'Sr-doped ZnO',
        detail: 'Strontium cation incorporation into ZnO wurtzite lattice to modify optical and catalytic properties.',
        tag: 'Doped Systems',
      },
      {
        name: 'Dopant Incorporation Control',
        detail: 'Precision control of dopant concentrations and chemical environments in liquid phase.',
        tag: 'Process Control',
      },
      {
        name: 'Nanoparticle Preparation',
        detail: 'Colloidal dispersion handling, washing, stability maintenance, and substrate preparation for downstream testing.',
        tag: 'Sample Prep',
      },
    ],
  },
  {
    id: 'characterization',
    category: 'Materials Characterization',
    badge: 'Structure & Spectroscopy',
    skills: [
      {
        name: 'X-ray Diffraction (XRD)',
        detail: 'Phase purity analysis, crystallite size estimation (Scherrer equation), and lattice parameter evaluation.',
        tag: 'Crystallography',
      },
      {
        name: 'Scanning Electron Microscopy (SEM)',
        detail: 'High-resolution surface topography, particle morphology inspection, and agglomeration assessment.',
        tag: 'Microscopy',
      },
      {
        name: 'UV-Vis Spectroscopy',
        detail: 'Absorption profiling, optical bandgap determination (Tauc plots), and plasmonic/excitonic resonance tracking.',
        tag: 'Optical Analysis',
      },
      {
        name: 'Photoluminescence (PL) Spectroscopy',
        detail: 'Analysis of intrinsic defect states, oxygen vacancies, and radiative recombination dynamics.',
        tag: 'Spectroscopy',
      },
    ],
  },
  {
    id: 'data-software',
    category: 'Data Analysis & Scientific Software',
    badge: 'Computation & Analysis',
    skills: [
      {
        name: 'Origin',
        detail: 'Advanced peak deconvolution, baseline subtraction, kinetic modeling, and publication-quality scientific graphing.',
        tag: 'Data Graphing',
      },
      {
        name: 'Basic LabVIEW',
        detail: 'Instrument interfacing principles, virtual instrumentation concepts, and laboratory data acquisition.',
        tag: 'Instrumentation',
      },
      {
        name: 'Microsoft Office',
        detail: 'Preparation of technical manuscripts, scientific documentation, data tables, and conference presentations.',
        tag: 'Documentation',
      },
    ],
  },
  {
    id: 'research-competencies',
    category: 'Research & Laboratory Competencies',
    badge: 'Scientific Methodology',
    skills: [
      {
        name: 'Experimental Data Interpretation',
        detail: 'Rigorous analysis linking structural and optical characteristics directly to observed functional phenomena.',
        tag: 'Analytical Reasoning',
      },
      {
        name: 'Scientific Writing',
        detail: 'Drafting research reports, experimental procedures, project milestones, and academic documentation.',
        tag: 'Dissemination',
      },
      {
        name: 'Laboratory Safety',
        detail: 'Standard operating procedures (SOP), chemical hygiene, laser containment, and waste management.',
        tag: 'Lab Standards',
      },
      {
        name: 'Scientific Communication',
        detail: 'Collaborative interdisciplinary communication across physics, laser sciences, and energy materials groups.',
        tag: 'Academic Exchange',
      },
    ],
  },
];

export const conferencesList: ConferenceItem[] = [
  {
    id: 'workshop-ml-nanotech-2026',
    title: 'Machine Learning in Nanotechnology and Energy Materials — Technical Workshop',
    location: 'Afretec Network, The American University in Cairo (AUC)',
    year: '2026',
    role: 'Participant / Researcher',
    category: 'workshop',
    description:
      'Afretec Network technical workshop focusing on machine learning paradigms, computational data processing, and predictive models applied to nanoscale materials and energy systems.',
  },
  {
    id: 'training-lab-safety-2026',
    title: 'Laboratory Safety Training Workshop',
    location: 'The American University in Cairo (AUC)',
    year: '2026',
    role: 'Trainee / Participant',
    category: 'training',
    description:
      'Comprehensive institutional laboratory safety training covering chemical hygiene, hazard containment, PPE compliance, and emergency protocols at AUC.',
  },
  {
    id: 'conf-icla-2025',
    title: 'International Conference on Laser Applications (ICLA 11)',
    location: 'International Scientific Forum',
    year: '2025',
    role: 'Scientific Attendee',
    category: 'conference',
    description:
      'Attended scientific sessions and research presentations covering cutting-edge developments in laser applications and photonics research.',
  },
  {
    id: 'conf-lsc-2025',
    title: 'Laser Science Conference',
    location: 'Academic Forum',
    year: '2025',
    role: 'Scientific Attendee',
    category: 'conference',
    description:
      'Attended scientific sessions related to laser science, photonics, and nanomaterials research.',
  },
  {
    id: 'conf-nlc-2023',
    title: 'National Laser Conference',
    location: 'Sharm El Sheikh, Egypt',
    year: '2023',
    role: 'Organizer & Scientific Session Participant',
    category: 'conference',
    description:
      'Participated in organizing conference activities and scientific sessions in laser science.',
  },
];

export const languagesList: LanguageItem[] = [
  {
    language: 'Arabic',
    proficiency: 'Native proficiency',
    level: 'Native',
  },
  {
    language: 'English',
    proficiency: 'Fluent in Academic and Scientific Communication',
    level: 'Fluent',
  },
];
