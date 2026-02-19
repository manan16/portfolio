const withBase = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}${path.replace(/^\//, '')}`;

export const site = {
  title: 'Manan Mehta | Data Engineer & ML Engineer',
  shortTitle: 'Manan Mehta',
  description:
    'Data Engineer and Data Scientist in London building scalable AWS data platforms, document intelligence systems, and production MLOps workflows.',
  canonicalUrl: 'https://manan16.github.io/portfolio',
  ogImage: '/assets/webclip.jpg',
  roleLabel: 'Data Engineer/ Data Scientist',
  location: 'London, UK',
};

export const hero = {
  greeting: "Hi, I\'m Manan.",
  headline: 'I build data and ML platforms that scale in production.',
  oneLiner:
    'Data Engineer / Data Scientist with 3+ years delivering cloud-native ingestion, CDC, and document intelligence systems on AWS.',
  keyRoles: ['Data Engineer', 'Data Scientist', 'Cloud / Platform'],
  ctas: {
    email: 'mailto:manan161200@gmail.com',
    linkedin: 'https://www.linkedin.com/in/manan-mehta-1240b8144',
    github: 'https://github.com/manan16',
    cv: withBase('/assets/MananMehta_Resume.pdf'),
  },
};

export const about = [
  'I design and ship robust data platforms across ingestion, transformation, model deployment, and observability.',
  'At ZS Associates, I built distributed AWS pipelines processing 50K+ documents and handling peaks of 3K documents per day.',
  'I have delivered CI/CD and environment rollout improvements that reduced release cycles by 40% and rollback incidents by 30%.',
  'My work spans CDC architecture, document extraction with LLMs, and structured storage for fast retrieval across millions of attributes.',
  'I optimise for measurable outcomes: lower latency, better data quality, improved extraction accuracy, and reduced cloud spend.',
  'Currently, I am pursuing an MSc in Data Science at King\'s College London while focusing on UK-based data, ML, and platform roles.',
];

export const skills = [
  {
    group: 'Languages',
    items: [
      { name: 'Python', level: 'Advanced' },
      { name: 'SQL', level: 'Advanced' },
      { name: 'Bash', level: 'Intermediate' },
      { name: 'C++', level: 'Intermediate' },
    ],
  },
  {
    group: 'Data / ML',
    items: [
      { name: 'PySpark', level: 'Advanced' },
      { name: 'NLP', level: 'Advanced' },
      { name: 'Embeddings', level: 'Intermediate' },
      { name: 'scikit-learn', level: 'Intermediate' },
      { name: 'Deep Learning', level: 'Intermediate' },
      { name: 'Computer Vision', level: 'Intermediate' },
      { name: 'MLOps', level: 'Intermediate' },
    ],
  },
  {
    group: 'Cloud / DevOps',
    items: [
      { name: 'AWS (S3, EC2, Lambda)', level: 'Advanced' },
      { name: 'AWS Batch', level: 'Advanced' },
      { name: 'MWAA (Airflow)', level: 'Advanced' },
      { name: 'Docker', level: 'Intermediate' },
      { name: 'Kubernetes (EKS)', level: 'Intermediate' },
      { name: 'GitLab CI/CD', level: 'Advanced' },
    ],
  },
  {
    group: 'Databases',
    items: [
      { name: 'PostgreSQL', level: 'Advanced' },
      { name: 'Amazon RDS', level: 'Advanced' },
      { name: 'Snowflake', level: 'Advanced' },
      { name: 'Oracle DB', level: 'Intermediate' },
      { name: 'OpenSearch Serverless', level: 'Intermediate' },
    ],
  },
  {
    group: 'Tooling',
    items: [
      { name: 'Textract', level: 'Advanced' },
      { name: 'SonarQube', level: 'Intermediate' },
      { name: 'PyTest', level: 'Advanced' },
      { name: 'TruffleHog', level: 'Intermediate' },
      { name: 'CloudWatch', level: 'Intermediate' },
      { name: 'ELK Stack', level: 'Intermediate' },
    ],
  },
] as const;

export const experience = [
  {
    company: 'ZS Associates',
    title: 'Senior Engineer',
    dates: 'Jan 2025 - Aug 2025',
    location: 'Pune, India',
    bullets: [
      'Architected production-grade GitLab CI/CD with SonarQube, PyTest (90%+ coverage), and TruffleHog, cutting release cycle time from 5 days to 3 days (40%).',
      'Streamlined deployment of ML extraction services and MWAA DAGs across dev, test, and prod, reducing rollback incidents by 30%.',
      'Designed a multi-agent RAG chatbot indexing 50K+ regulatory documents, reducing manual query turnaround from 2 hours to under 45 minutes (60%).',
      'Improved deployment reliability and auditability by standardising environment promotion and release checks across critical workflows.',
    ],
  },
  {
    company: 'ZS Associates',
    title: 'Business Technology Solutions Associate Consultant',
    dates: 'Jul 2024 - Dec 2024',
    location: 'Pune, India',
    bullets: [
      'Led a distributed digitisation pipeline on AWS Batch and EKS orchestrated via MWAA, processing 50K+ documents with peak throughput of 3K per day.',
      'Integrated Veeva Vault APIs with AWS Textract and persisted outputs in Amazon RDS and OpenSearch Serverless for sub-second metadata retrieval.',
      'Engineered LLM-based document standardisation and validation workflows, improving extraction accuracy by 25%.',
      'Reduced manual review effort by 40% through rule-based and model-driven quality controls.',
      'Optimised compute sizing, indexing, and storage strategy to reduce cloud costs by 15%.',
    ],
  },
  {
    company: 'ZS Associates',
    title: 'Business Technology Solutions Associate / Intern',
    dates: 'Jan 2022 - Jun 2024',
    location: 'Pune, India',
    bullets: [
      'Designed ingestion pipelines across Snowflake, Oracle DB, and SFTP, consolidating 10+ sources into daily S3 loads.',
      'Architected CDC mechanisms that reduced redundant processing by 35% and cut ingestion runtime by 25%.',
      'Implemented Parquet-to-SAS XPORT transformation workflows with 100% schema consistency for downstream reporting.',
      'Delivered secure Flask APIs with PingFederate SSO for internal users across multiple business units.',
      'Raised automated test coverage to 90%+, reducing post-release production defects by 30%.',
    ],
  },
] as const;

export const projects = [
  {
    name: 'Regulatory RAG Assistant',
    visual: {
      icon: '/assets/code.svg',
      alt: 'RAG assistant icon',
    },
    problem:
      'Regulatory teams spent hours manually searching policy documents to answer recurring compliance questions.',
    approach:
      'Built a multi-agent RAG pipeline to index and retrieve context from 50K+ documents with retrieval-augmented response generation.',
    tech: ['Python', 'RAG', 'NLP', 'AWS', 'Vector Retrieval'],
    impact:
      'Reduced query resolution time from ~2 hours to under 45 minutes and improved response consistency.',
    highlights: [
      'Indexed 50K+ domain documents',
      'Designed for production use with repeatable retrieval flow',
    ],
    links: {
      repo: 'TODO: Add project/repo URL',
      demo: 'TODO: Add demo URL (if available)',
    },
  },
  {
    name: 'Enterprise Document Digitisation Platform',
    visual: {
      icon: '/assets/database.svg',
      alt: 'Document platform icon',
    },
    problem:
      'High-volume document extraction required a scalable pipeline with reliable orchestration and searchability.',
    approach:
      'Implemented distributed processing on AWS Batch + EKS and MWAA orchestration, integrating Textract, RDS, and OpenSearch.',
    tech: ['AWS Batch', 'EKS', 'MWAA (Airflow)', 'Textract', 'PostgreSQL', 'OpenSearch'],
    impact:
      'Processed 50K+ documents, handled peak loads of 3K/day, and enabled sub-second retrieval over 1M+ extracted attributes.',
    highlights: [
      'End-to-end ingestion-to-search architecture',
      'Reduced cloud spend by 15% via infrastructure tuning',
    ],
    links: {
      repo: 'TODO: Add project/repo URL',
      demo: 'TODO: Add demo URL (if available)',
    },
  },
  {
    name: 'Prostate Cancer Detection Pipeline',
    visual: {
      icon: '/assets/favorite.svg',
      alt: 'Cancer detection icon',
    },
    problem:
      'Clinical image analysis required robust methods to distinguish benign vs malignant tumours from MRI scans.',
    approach:
      'Developed an MRI pipeline with denoising, segmentation, and temporal progression modelling for classification.',
    tech: ['Python', 'Computer Vision', 'Deep Learning', 'MRI Processing'],
    impact:
      'Delivered an end-to-end modelling workflow suitable for comparative diagnostic experimentation.',
    highlights: [
      'Combined denoising and segmentation in one pipeline',
      'Focused on benign vs malignant outcome classification',
    ],
    links: {
      repo: 'TODO: Add project/repo URL',
      demo: 'TODO: Add demo URL (if available)',
    },
  },
  {
    name: 'NLP Text Summarisation App',
    visual: {
      icon: '/assets/browser.svg',
      alt: 'Text summarisation icon',
    },
    problem:
      'Long web articles were time-consuming to review for key insights.',
    approach:
      'Built an NLP summarisation app using RNN models and TextRank with BeautifulSoup scraping and configurable summary length.',
    tech: ['Python', 'NLP', 'RNN', 'TextRank', 'BeautifulSoup'],
    impact:
      'Automated article condensing into shorter summaries for faster content review.',
    highlights: [
      'Hybrid extractive and model-based summarisation approach',
      'Configurable output for different use cases',
    ],
    links: {
      repo: 'https://github.com/manan16/text-sum',
      demo: 'TODO: Add demo URL (if available)',
    },
  },
  {
    name: 'Patent Analytics Dashboard',
    visual: {
      icon: '/assets/dns.svg',
      alt: 'Patent analytics icon',
    },
    problem:
      'Patent trend discovery needed searchable metadata with visual exploration in one place.',
    approach:
      'Developed ELK-based analytics workflows with web parsing for metadata extraction and Kibana visualisations.',
    tech: ['ELK Stack', 'Elasticsearch', 'Logstash', 'Kibana', 'Python'],
    impact:
      'Enabled interactive analysis of patent trends and metadata at dashboard level.',
    highlights: [
      'Interactive trend visualisation',
      'Automated metadata extraction pipeline',
    ],
    links: {
      repo: 'TODO: Add project/repo URL',
      demo: 'TODO: Add demo URL (if available)',
    },
  },
] as const;

export const education = [
  {
    degree: 'MSc Data Science',
    school: "King\'s College London",
    location: 'London, UK',
    dates: 'Sep 2025 - Ongoing',
    modules: ['Big Data (Hadoop/Spark/NoSQL)', 'Statistics', 'Neural Networks', 'Computer Vision'],
  },
  {
    degree: 'BEng Computer Science and Engineering',
    school: 'Panjab University',
    location: 'India',
    dates: 'Jul 2018 - Jun 2022',
    modules: ['Data Structures', 'Databases', 'Image Processing'],
    grade: 'CGPA: 8.49/10',
  },
] as const;

export const certifications = [
  'SQL for Data Science (Coursera)',
  'Image Denoising Using AutoEncoders in Keras and Python (Coursera)',
] as const;

export const languages = ['English (Fluent)', 'Hindi (Fluent)'] as const;

export const contact = {
  email: 'manan161200@gmail.com',
  linkedin: 'https://www.linkedin.com/in/manan-mehta-1240b8144',
  github: 'https://github.com/manan16',
};
