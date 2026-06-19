// ─────────────────────────────────────────
//  data.js  —  Edit all your content here
// ─────────────────────────────────────────

const TICKER_ITEMS = [
  { label: 'ML ENGINEERING',        val: 'PROD' },
  { label: 'RAG PIPELINES',         val: 'LANGCHAIN' },
  { label: 'MULTI-AGENT',           val: 'GOOGLE ADK' },
  { label: 'MLOPS',                 val: 'FASTAPI·DOCKER' },
  { label: 'BERT·GPT·LLAMA',        val: 'FINE-TUNED' },
  { label: 'SENTENCE TRANSFORMERS', val: 'SEMANTIC NLP' },
  { label: 'MLFLOW·DVC·PREFECT',    val: 'TRACKING' },
  { label: 'BLACK-SCHOLES',         val: 'MONTE CARLO' },
  { label: 'F1 SCORE',              val: '≥0.92' },
  { label: 'VECTOR SEARCH',         val: 'PGVECTOR' },
];

const EXPERIENCE = [
  {
    year: '2026',
    date: 'Jul 2026 – Present (upcoming)',
    role: 'Backend AI Engineering Intern',
    company: 'FlyRank AI',
    bullets: [
      'Joining the backend engineering team to build and integrate AI-powered services and APIs into production systems — directly applying ML engineering and software development skills.',
    ],
  },
  {
    year: '2026',
    date: 'Jun 2026 – Present',
    role: 'ML Engineering Intern',
    company: 'Data Analyst Lab',
    bullets: [
      'Working on production ML systems, pipelines, and deployment — bridging data science prototyping with real software engineering and MLOps practices.',
    ],
  },
  {
    year: '2026',
    date: 'Jun 2026 – Present',
    role: 'LLM Zoomcamp — Live Cohort',
    company: 'DataTalks.Club · Alexey Grigorev',
    bullets: [
      '10-week cohort-based programme building a production-ready AI assistant from scratch — RAG pipelines, vector search, evaluation, monitoring, and orchestration.',
    ],
    pills: [
      'Agentic RAG', 'Vector Search · PGVector', 'Orchestration · Kestra',
      'LLM-as-a-Judge Evaluation', 'Monitoring & Dashboards',
      'Hybrid Search · Reranking', 'End-to-End Capstone',
    ],
    pillsLabel: 'Syllabus',
  },
  {
    year: '2025',
    date: 'Feb 2025 – Feb 2026',
    role: 'Assistant Manager, Technical Information Systems',
    company: 'Toyota South Africa Motors',
    bullets: [
      'Promoted into a cross-functional management role overseeing dealership technical fault reporting and complaint resolution across the Toyota SA dealer network.',
      'Served as liaison between technical and business teams — systems analysis, managing escalations, process improvement, and reporting to senior management.',
      'Left to return to hands-on ML engineering and AI development.',
    ],
  },
  {
    year: '2023',
    date: 'Feb 2023 – Jan 2025',
    role: 'Data Science Graduate Trainee',
    company: 'Toyota South Africa Motors',
    sections: [
      {
        label: 'Semantic NLP Pipeline (Core Project)',
        bullets: [
          'Designed and built a domain-specific NLP classification and sentiment analysis system across five business functions — Customer Sales, Service, Technical, Marketing, and HR — on entirely unlabelled enterprise text data.',
          'Manually analysed raw text to build a semantic ontology of categories and representative phrases, then used <strong>Sentence Transformers and HuggingFace embeddings</strong> to classify each document by highest-similarity category — zero labelling cost.',
          'Delivered structured insights including segmentation that informed a new vehicle sales campaign, an employee sentiment view for HR, and a defect-pattern view for the Technical team.',
        ],
      },
      {
        label: 'LLM Development',
        bullets: [
          'Fine-tuned BERT and GPT variants on domain-specific customer review data. Prototyped RAG applications using LangChain and open-source LLMs for internal document Q&A across multiple agile sprint cycles.',
        ],
      },
      {
        label: 'Reporting & Data Engineering',
        bullets: [
          'Built interactive Power BI dashboards on top of the NLP engine — sentiment trends, issue distributions, defect patterns, and segmentation — presented to non-technical stakeholders across all five functions.',
          'SQL and Pandas for data extraction, cleaning, and EDA; statistical analysis to validate data quality prior to modelling.',
        ],
      },
    ],
  },
];

const PROJECTS = [
  {
    num: '01',
    title: 'Multi-Agent Marketing Campaign System',
    desc: '5 specialised LLM agents working sequentially via Google ADK — Market Researcher (Google Search grounded), Messaging Strategist, Ad Copy Writer, Visual Suggester, Campaign Brief Formatter. Custom MarketingLlmAgent class with centralised ToolRegistry. State-based information flow prevents hallucination across agent boundaries. Temperature 0.3, citation enforcement, explicit no-invention system prompts.',
    tags: ['Python', 'Google ADK', 'Gemini 2.0 Flash', 'SequentialAgent', 'Multi-Agent', 'AI Agents'],
    link: 'https://github.com/Khetha0121/AI-Agents',
    linkLabel: 'View on GitHub',
  },
  {
    num: '02',
    title: 'SA Spam/Ham Classifier — End-to-End MLOps Pipeline',
    desc: 'Full MLOps lifecycle from notebook to deployed API across 7 phases. Modular Python package, config-driven, SA-specific NLP preprocessing. Prefect pipeline with data quality gates, DVC versioning, MLflow experiment tracking and model registry. Ensemble classifier (LR + NB + LinearSVC) — F1 ≥ 0.92 gate to Staging. FastAPI serving, Docker, Prometheus metrics, Evidently drift detection with auto-retraining trigger. GitHub Actions CI/CD with branch protection.',
    tags: ['Python', 'FastAPI', 'Docker', 'MLflow', 'DVC', 'Prefect', 'Scikit-learn', 'GitHub Actions', 'Evidently'],
  },
  {
    num: '03',
    title: 'Stock Option Portfolio Simulation',
    desc: 'Monte Carlo simulation of a stock option portfolio under the Black-Scholes framework, modelling thousands of price path scenarios to assess risk and expected return. Implemented discrete-time dynamic delta hedging and time series analysis on historical Yahoo Finance data.',
    tags: ['Python', 'NumPy', 'SciPy', 'Monte Carlo', 'Black-Scholes', 'Delta Hedging'],
  },
];

const SKILLS = [
  {
    label: 'Languages',
    items: ['Python', 'SQL', 'R', 'Java', 'C++', 'C#'],
  },
  {
    label: 'Machine Learning',
    items: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'XGBoost', 'Ensemble Methods', 'Hyperparameter Tuning'],
  },
  {
    label: 'Deep Learning',
    items: ['Neural Networks', 'CNNs', 'RNNs', 'Transformers', 'Regularisation'],
  },
  {
    label: 'NLP',
    items: ['Sentence Transformers', 'HuggingFace', 'NLTK', 'spaCy', 'Semantic Similarity', 'NER', 'Sentiment Analysis'],
  },
  {
    label: 'Generative AI / LLMs',
    items: ['LangChain', 'BERT', 'GPT', 'LLaMA', 'Gemini', 'Google ADK', 'Ollama', 'RAG Pipelines', 'Prompt Engineering', 'LLM Fine-Tuning', 'AI Agents'],
  },
  {
    label: 'MLOps',
    items: ['MLflow', 'DVC', 'Prefect', 'FastAPI', 'Docker', 'Evidently', 'GitHub Actions', 'Prometheus', 'Drift Detection'],
  },
  {
    label: 'Software Engineering',
    items: ['REST APIs', 'Modular Python', 'pytest', 'Git', 'CI/CD', 'Docker'],
  },
  {
    label: 'Data & Reporting',
    items: ['Pandas', 'NumPy', 'SciPy', 'Power BI', 'EDA', 'Statistical Modelling', 'Time Series'],
  },
  {
    label: 'Big Data',
    items: ['PySpark', 'Apache Hive', 'Cloudera'],
  },
  {
    label: 'Quant Finance',
    items: ['Black-Scholes', 'Monte Carlo', 'Delta Hedging', 'Derivatives Pricing', 'Stochastic Modelling'],
  },
  {
    label: 'Cloud & Infra (developing)',
    items: ['GCP', 'Kubernetes', 'Jenkins'],
  },
];

const EDUCATION = [
  {
    year: '2023 · UNIVERSITY OF PRETORIA',
    degree: 'BSc Honours — Mathematics of Finance',
    inst: 'Quantitative Finance Track',
    modules: 'Financial Engineering · Stochastic Modelling · Probability Theory · Optimisation · Time Series Analysis.\n\nProjects: Monte Carlo option portfolio simulation under Black-Scholes; discrete-time dynamic delta-hedging strategy.',
  },
  {
    year: '2020 · UNIVERSITY OF KWAZULU-NATAL',
    degree: 'BSc — Computer Science & Mathematics',
    inst: 'CS & Mathematics Double Major',
    modules: 'OOP · Advanced Programming · Software Design · Artificial Intelligence · Algorithms · Data Structures · Linear Algebra · Calculus · Mathematical Modelling.',
    achievement: '🏆 Best 3rd Year Pure Mathematics Student — top-ranked across the year group.\nCertificate of Merit in Real Analysis, Differential Equations & Complex Analysis.',
  },
];

const DEVELOPING = [
  {
    label: 'Live Cohort · 2026',
    title: 'LLM Zoomcamp — DataTalks.Club',
    desc: '10-week programme covering Agentic RAG, Vector Search (PGVector), Orchestration with Kestra, LLM-as-a-Judge evaluation, monitoring with feedback loops, hybrid search and reranking. Capstone: full RAG application with FastAPI/Streamlit interface. Certificate on project completion and peer review.',
  },
  {
    label: 'Bootcamp · In Progress',
    title: 'Complete MLOps Bootcamp — Krish Naik',
    desc: 'End-to-end ML project deployment on Google Cloud Platform covering GCP, CI/CD, Kubernetes, and Jenkins. 10+ production ML projects from beginner to advanced MLOps.',
  },
  {
    label: 'Target Skills',
    title: 'Building Toward',
    desc: 'Cloud ML deployment on GCP and AWS · Kubernetes orchestration for ML workloads · Advanced LLM engineering and agent frameworks · Production AI software systems at scale.',
  },
];
