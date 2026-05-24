import type { l } from "node_modules/react-router/dist/development/index-react-server-client-MKTlCGL3.mjs";

export const en = {
  // Navigation
  nav: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
    hireMe: 'Hire Me',
  },

  // Hero Section
  hero: {
    availableForWork: 'Available for Work',
    greeting: 'Hi, I\'m',
    name: 'Billy Sistian',
    title: 'Fullstack Developer',
    description: 'Open to new opportunities and collaborations. Let’s build something impactful together.',
    project: 'Projects',
    downloadCV: 'Download CV',
  },

  // About Section
  about: {
    sectionLabel: 'About Me',
    title: 'Fullstack Developer based in Bandar Lampung',
    description: "I'm a Fullstack Developer specializing in building scalable and high-performance web applications using modern technologies such as React, Laravel, and Tailwind CSS. I have a strong understanding of both frontend and backend development, enabling me to deliver efficient, maintainable, and user-focused digital solutions.",
    yearsOfExperience: 'Years of Experience',
    buildingApps: 'Building web applications',
    expertise: [
      'Frontend Architecture',
      'Backend Development',
      'Database Design',
      'UI/UX Implementation',
    ],
  },

  // Skills Section
  skills: {
    sectionLabel: 'My Expertise',
    title: 'Technical Skills',
    description: 'A focused overview of my technical proficiency and toolset.',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
      tools: 'Tools',
    },
    items: {
      frontend: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'Bootstrap',
        'Tailwind CSS',
        'React',
        'Next.js',
        'Flutter',
      ],
      backend: [
        'PHP',
        'CodeIgniter',
        'Laravel',
        'Node.js',
      ],
      database: [
        'MySQL',
        'PostgreSQL',
        'Supabase',
        'Firebase',
        'MongoDB',
      ],
      tools: [
        'Git',
        'GitHub',
        'Postman',
        'VS Code',
        'Figma',
      ],
    },
  },

  // Projects Section
  projects: {
    sectionLabel: 'Portfolio',
    title: 'Featured Projects',
    description: 'A selection of projects that demonstrate my ability to solve complex problems.',
    loadMore: 'Load More Projects',
    projects: [
      {
        title: 'Management Patient System',
        description: 'A comprehensive patient management system for hospitals that includes features such as appointment scheduling, patient records management, and queue management.',
        role: 'Fullstack Developer',
        tech: ['Laravel', 'MySQL', 'JavaScript', 'VS Code', 'Tailwind CSS'],
      },
      {
        title: 'PresensiGo',
        description: 'A mobile application for sales teams that allows them to log attendance, customer visits, and daily activities with location-based features and real-time reporting.',
        role: 'Mobile Developer',
        tech: ['Laravel', 'MySQL', 'VS Code', 'Postman', 'Flutter'],
      },
      {
        title: 'HRIS',
        description: 'Human Resource Information System for managing employee data, attendance, and payroll.',
        role: 'Fullstack Developer',
        tech: ['HTML', 'Bootstrap', 'Laravel', 'MySQL', 'VS Code'],
      },
      {
        title: 'Company Profile',
        description: 'A modern company profile website with responsive design, interactive elements, and optimized performance.',
        role: 'Fullstack Developer',
        tech: ['HTML', 'Tailwind CSS', 'Next.js', 'JavaScript', 'Supabase', 'Postman', 'VS Code'],
      },
      {
        title: 'CMS Company Profile',
        description: 'Content management system for company profile websites that allows admins to easily manage content through an intuitive dashboard.',
        role: 'Fullstack Developer',
        tech: ['HTML', 'Tailwind CSS', 'Next.js', 'Supabase', 'Shadcn UI', 'VS Code'],
      },
      {
        title: 'ERP System for Manufacturing',
        description: 'Complete enterprise resource planning system for manufacturing companies with inventory management, production tracking, and reporting features.',
        role: 'Full Stack Developer',
        tech: ['HTML', 'Bootstrap', 'CodeIgniter', 'MySQL', 'VS Code'],
      },
    ],
  },

  // Experience Section
  experience: {
    sectionLabel: 'Career Path',
    title: 'Work Experience',
    items: [
      {
        company: 'PT. Gomega Asia Cemerlang',
        position: 'Fullstack Web Developer',
        period: '2022 - Present',
        description: 'Developing and maintaining enterprise web applications using Laravel, React, and RESTful APIs. Development of payroll management systems, attendance (GPS-based) tracking systems, and internal ERP solutions to streamline business operations. Designing secure authentication systems using Laravel Sanctum and role-based access control. Building responsive and dynamic front-end interfaces with React, integrating API services, and optimizing performance for scalability. Managing SQL databases, writing efficient queries, and implementing system improvements to enhance security, reliability, and user experience.',
      },
      {
        company: 'Freelance',
        position: 'Blogger & Web Developer',
        period: '2020 - 2022',
        description: 'Created and managed engaging music-related content, including chord transcriptions and articles. Optimized website performance and implemented SEO strategies to improve search engine rankings and organic traffic. Developed and maintained website features, enhanced user experience, and ensured responsive design across devices. Conducted keyword research, on-page and technical SEO optimization, and performance monitoring to continuously increase audience growth.',
      },
    ],
  },

  // Education Section
  education: {
    education: 'Education',
    certifications: 'Certifications',
    degree: 'Bachelor of Information Systems in Computer Science',
    university: 'University of Mitra Indonesia',
    period: '2016 - 2020',
    degreeDescription: 'Developed strong analytical and problem-solving skills through coursework in Software Engineering, Data Structures, and Algorithms.',
    certList: [
      {
        name: 'KelasFullstack',
        issuer: 'Codepolitan',
        date: '2024',
      },
    ],
  },

  // Contact Section
  contact: {
    sectionLabel: 'Get in Touch',
    title: 'Contact Me',
    description: 'Have a project in mind or want to discuss a job opportunity? I\'d love to hear from you.',
    contactInformation: 'Contact Information',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    followMe: 'Follow Me',
    sendMessage: 'Send Me a Message',
    name: 'Name',
    nameRequired: 'Name is required',
    emailField: 'Email',
    emailRequired: 'Email is required',
    emailInvalid: 'Please enter a valid email',
    message: 'Message',
    messageRequired: 'Message is required',
    sendBtn: 'Send Message',
    successMessage: 'Thank you! Your message has been sent.',
    locationCity: 'Bandar Lampung, Lampung',
  },

  // Footer Section
  footer: {
    description: 'Building digital products, brands, and experiences. Available for freelance projects and full-time opportunities.',
    quickLinks: 'Quick Links',
    connect: 'Connect',
    copyright: 'All rights reserved.',
    madeWith: 'Made with',
    usingTech: 'using React & Tailwind',
  },
};
