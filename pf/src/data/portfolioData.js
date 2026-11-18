export const personalInfo = {
  name: 'Saif Ali',
  title: 'Jr. Full Stack Developer',
  email: 'isaif.devv@gmail.com',
  location: 'India',
  availability: false,
  github: 'https://github.com/saifxzpvt',
  linkedin: 'https://www.linkedin.com/in/saif-devv',
  instagram: 'https://instagram.com/saif.nrg',
  telegram: 'https://t.me/Saifxzpvt',
  resume: 'https://drive.google.com/file/d/173kOHr4ImmQ7Yb2n656W2WX6cF1iMJcZ/view?usp=drivesdk',
}

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export const skillGroups = [
  {
    title: 'Frontend',
    level: 'Building fundamentals',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js · Basic', 'Tailwind CSS', 'React Bootstrap'],
  },
  {
    title: 'Backend & data',
    level: 'Learning through projects',
    skills: [
      'Python', 'Django', 'Node.js · Basic', 'Express.js · Basic',
      'REST APIs', 'MySQL', 'MongoDB', 'Spring Boot · Foundational',
    ],
  },
  {
    title: 'Tools & integrations',
    level: 'Used across projects',
    skills: [
      'Git', 'GitHub', 'Postman', 'Linux', 'Figma', 'Canva',
      'Axios & Fetch', 'Web Speech API', 'Microsoft Word · Professional',
    ],
  },
]

export const projects = [
  {
    number: '01',
    title: 'Authentication App',
    description:
      'A web authentication application with a clean interface and user authentication-related functionality.',
    tags: ['React', 'JavaScript', 'CSS'],
    variant: 'auth',
    github: 'https://github.com/saifxzpvt/oibsip/tree/main/authentication',
    demo: 'https://oibsip-authentication.onrender.com/',
    image: 'https://raw.githubusercontent.com/saifxzpvt/oibsip/main/authentication/screenshots/ss.png',
  },
  {
    number: '02',
    title: 'To-Do List App',
    description:
      'A productivity application designed to manage daily tasks with a simple and intuitive interface.',
    tags: ['React', 'JavaScript', 'CSS'],
    variant: 'tasks',
    github: 'https://github.com/saifxzpvt/oibsip/tree/main/todo',
    demo: 'https://saifxzpvt.github.io/oibsip/todo/',
    image: 'https://raw.githubusercontent.com/saifxzpvt/oibsip/main/todo/screenshots/todo%20ss.png',
  },
  {
    number: '03',
    title: 'calculator',
    description:
      'A simple calculator application with a clean interface and basic arithmetic operations.',
    tags: ['React', 'JavaScript', 'CSS'],
    variant: 'calculator',
    github: 'https://github.com/saifxzpvt/oibsip/tree/main/calculator',
    demo: 'https://saifxzpvt.github.io/oibsip/calculator/',
    image: 'https://raw.githubusercontent.com/saifxzpvt/oibsip/main/calculator/screenshots/calculator%20ss.png',
  },
  {
    number: '04',
    title: 'Currency Converter',
    description:
      'A Python currency converter that fetches current exchange rates and supports conversions across 150+ currencies.',
    tags: ['Python', 'APILayer', 'API integration'],
    variant: 'currency',
    github: 'https://github.com/saifxzpvt/currency-conv',
    demo: 'https://currencyc0nv.netlify.app/',
    image: '',
  },
  {
    number: '05',
    title: 'Weatherify+',
    description:
      'A React weather app with live forecasts, location support, and voice features powered by weather data.',
    tags: ['React', 'OpenWeatherMap', 'JavaScript', 'Web Speech API'],
    variant: 'weather',
    github: 'https://github.com/saifxzpvt/weatherify-plus',
    demo: 'https://weatherifyplus.netlify.app/',
    image: '',
  },
  {
    number: '06',
    title: 'Python CLI Mini Projects',
    description:
      'Small CLI learning projects from Python foundation training, including a password generator, calculator, and rule-based chatbot.',
    tags: ['Python', 'CLI', 'OOP', 'File handling'],
    variant: 'python',
    github: '',
    demo: '',
    image: '',
  },
   {
    number: '07',
    title: 'CURD APPLICATION',
    description:
      'Responsive CRUD User Management Dashboard built with React.js, Tailwind CSS, and REST API integration.',
    tags: ['React', 'Tailwind CSS', 'REST API', 'JavaScript'],
    variant: 'crud',
    github: 'https://github.com/saifxzpvt/curd-app',
    demo: '',
    image: '',
  },
]

export const experience = [
  {
    company: 'Oasis Infobyte',
    role: 'Web Development & Designing Intern',
    duration: '1 month',
    status: 'Completed',
    description:
      'Completed an internship focused on web development and design, gaining practical experience with the fundamentals.',
    date: 'Internship',
  },
  {
    company: 'Unified Mentor',
    location: 'Gurugram',
    role: 'Intern',
    duration: '6 months',
    status: 'Completed',
    description:
      'Built hands-on experience in a professional learning environment and strengthened day-to-day web development skills.',
    date: 'Internship',
  },
]

export const education = [
  {
    degree: 'Master of Computer Applications',
    school: 'Jamia Hamdard',
    detail: 'Currently pursuing · 2025–present',
  },
  {
    degree: 'Bachelor of Computer Applications',
    school: 'DAV Institute of Management, Faridabad',
    detail: 'Completed · 2022–2025',
  },
  {
    degree: 'Python Foundation Training',
    school: 'DAV Institute',
    detail: '2019–2020',
  },
]

export const certifications = [
  {
    name: 'DATA ANALYST',
    issuer: 'AIF - american indian foundation',
    date: ' march - april 2025',
    category: 'Data analysis',
  },
  {
    name: 'IT & Career Readiness',
    issuer: 'Anudip Foundation & EY',
    date: 'Sep – Oct 2024',
    category: 'Career readiness',
  },
  {
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'May 2025',
    category: 'Cybersecurity',
  },
  {
    name: 'Geospatial Modeling & Risk Analysis',
    issuer: 'ISRO IIRS',
    date: 'Feb 2023',
    category: 'Geospatial',
  },
  {
    name: 'DATA ANALYTICS PROGRAM',
    issuer: 'EXL & NSDC & SKILL INDIA',
    date: ' 31ST MARCH 2025',
    category: 'Data analysis',
  },
  {
    name: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    date: 'May 2025',
    category: 'Networking',
  },
  {
    name: 'AI Tools Workshop',
    issuer: 'be10X',
    date: 'Jul 2025',
    category: 'Workshop',
  },
]
