export const profile = {
  email: 'pratikmatsagar@gmail.com', phone: '+91 8888842177', location: 'Nashik, Maharashtra, India',
  resume: '/Pratik-Matsagar-Resume.pdf', linkedin: '', github: ''
}

export const navLinks = ['About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact']

const icon = (name) => `/tech-icons/${name}.svg`
export const skillGroups = [
  { title: 'Programming', level: 'Professional & project experience', skills: [['Python',icon('python')],['SQL',icon('azuresqldatabase')],['C',icon('c')],['C++',icon('cplusplus')],['JavaScript',icon('javascript')]] },
  { title: 'Data Analytics & BI', level: 'Professional & project experience', skills: [['Power BI',icon('powerbi')],['Pandas',icon('pandas')],['NumPy',icon('numpy')],['Advanced Excel',icon('excel')],['DAX',icon('powerbi')],['EDA',icon('matplotlib')],['KPI Reporting',icon('powerbi')]] },
  { title: 'Azure Data Engineering', level: 'Project experience · currently advancing', skills: [['Azure Data Factory',icon('azure')],['Azure Databricks',icon('azure')],['PySpark',icon('apachespark')],['Delta Lake',icon('delta')],['ETL Pipelines',icon('azure')],['Medallion Architecture',icon('databricks')]] },
  { title: 'Backend & Databases', level: 'Professional & project experience', skills: [['FastAPI',icon('fastapi')],['Flask',icon('flask')],['Node.js',icon('nodejs')],['Express.js',icon('express')],['PostgreSQL',icon('postgresql')],['MySQL',icon('mysql')],['REST APIs',icon('postman')],['JWT',icon('jwt')]] },
  { title: 'Frontend', level: 'Project experience', skills: [['React',icon('react')],['TypeScript',icon('typescript')],['HTML5',icon('html5')],['CSS3',icon('css3')],['Bootstrap',icon('bootstrap')],['Responsive UI',icon('vitejs')]] },
  { title: 'AI, CV & Tools', level: 'Project experience & foundations', skills: [['TensorFlow',icon('tensorflow')],['Keras',icon('keras')],['OpenCV',icon('opencv')],['YOLO',icon('python')],['Git',icon('git')],['GitHub',icon('github')],['Postman',icon('postman')],['VS Code',icon('vscode')],['Jira',icon('jira')]] }
]

export const experience = [
  { period:'JAN 2026 — PRESENT', role:'Software Developer', company:'Golden Rich Financial & Real Estate Solution Pvt. Ltd.', location:'Nashik, India', current:true, points:[
    'Develop backend services and REST APIs with Python and FastAPI for fintech and short-term rental platforms.',
    'Design and manage PostgreSQL data workflows across customers, listings, bookings and financial operations.',
    'Analyze customer, loan and property data using SQL and Python; support data cleaning, validation, KPI reporting and Power BI dashboards.',
    'Collaborate across frontend and backend teams on integration, testing, debugging, maintenance and deployment activities.'
  ]},
  { period:'AUG 2025 — DEC 2025', role:'Junior Software Developer Intern', company:'Softcrowd Technologies', location:'Nashik, India', points:[
    'Developed backend APIs with Python and FastAPI, including image upload and structured detection workflows.',
    'Contributed to road-damage detection modules for the Nashik Smart City Kumbh Mela project.',
    'Supported API integration, testing, debugging and issue resolution while collaborating through Git and GitHub.'
  ]}
]

export const projects = [
  {category:'DATA ENGINEERING', title:'E-Commerce Data Pipeline & Analytics Platform', stack:['Azure Data Factory','Databricks','PySpark','Delta Lake','Power BI'], description:'An end-to-end portfolio project for structured ingestion, transformation, validation and analytics reporting.', details:['Bronze, Silver and Gold data layers','PySpark transformations and duplicate handling','Analytics-ready datasets and Power BI KPI dashboards']},
  {category:'DATA ANALYTICS', title:'Olist E-Commerce SQL Analytics', stack:['PostgreSQL','SQL','Data Modeling'], description:'An SQL analytics project exploring e-commerce performance, customer behaviour, revenue and seller performance.', details:['CTEs, joins and window functions','Customer segmentation and cohort analysis','Relational models for reporting-ready datasets']},
  {category:'BUSINESS INTELLIGENCE', title:'AdventureWorks Sales Dashboard', stack:['Power BI','DAX','Star Schema'], description:'An interactive BI dashboard for sales performance, customer trends, profitability and business KPIs.', details:['DAX measures and star-schema modeling','Revenue, margin and year-over-year analysis','Slicers, drill-through and regional views']},
  {category:'AI / BACKEND', title:'Medical Chatbot System', stack:['Python','Flask','PostgreSQL','TF-IDF'], description:'A healthcare information chatbot for processing user queries through application logic and ML techniques.', details:['Query processing and chat flows','REST API and database integration','Informational project — not medical advice']},
  {category:'COMPUTER VISION · INTERNSHIP', title:'Smart Road Damage Detection', stack:['Python','FastAPI','YOLO','OpenCV'], description:'Backend contributions to image-based road-damage workflows during the Softcrowd internship.', details:['Image upload and processing workflows','Detection API integration','Structured result handling and testing']},
  {category:'BACKEND DEVELOPMENT', title:'Fintech Loan Lead CRM', stack:['Node.js','Express','PostgreSQL','JWT'], description:'A loan lead management CRM for organizing customers, access, documents and application workflows.', details:['User roles and lead tracking','Authentication and document handling','Database-backed REST APIs']},
  {category:'FULL-STACK WEB', title:'Wedding Event Management', stack:['Flask','PostgreSQL','HTML','CSS','JavaScript'], description:'A web application concept for organizing schedules, venues, customer registrations and vendors.', details:['Event and venue management','Customer registration','Backend APIs and PostgreSQL workflows']},
  {category:'FULL-STACK APPLICATION', title:'XSpace360 Rental Platform', stack:['React','TypeScript','FastAPI','PostgreSQL'], description:'A project I have worked on for property, booking, availability and channel-management workflows.', details:['Property and unit management','Booking and availability workflows','Interfaces for channels, billing and pricing modules']}
]

export const education = [
  {year:'2021 — 2025', title:'BE in Artificial Intelligence & Data Science', place:'Matoshri College of Engineering and Research Center, Nashik', note:'Savitribai Phule Pune University · CGPA 8.80'},
  {year:'2020 — 2021', title:'Higher Secondary Education', place:'KTHM College, Nashik', note:'Maharashtra State Board · 80.83%'}
]

export const certifications = [
  ['2026 · IN PROGRESS','Azure Data Engineering Training','Techno Geeks, Pune'],
  ['2025','Diploma in Data Science','Profound Edutech, Nashik'],
  ['2024','Government Certified C & C++ Programming Course','Gurukul Computer Education']
]
