export type Language = "en" | "zh";

const en = {
  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    contact: "Contact",
    langToggle: "中文",
  },
  hero: {
    subtitle: "Senior Full-Stack Developer & Technology Consultant",
    subtitleLine2:
      "Specializing in scalable web applications, cloud architecture, and AI-powered solutions",
    viewMyWork: "View My Work",
    contactMe: "Contact Me",
  },
  about: {
    heading: "About",
    name: "Kevin Chen",
    professionalSummary: "Professional Summary",
    p1: "Hello! I'm Kevin Chen, a passionate full-stack developer with 10+ years of experience building innovative web applications and leading development teams. I specialize in creating scalable, user-centric solutions that drive business growth and enhance user experiences.",
    p2: "My expertise spans across modern JavaScript frameworks, cloud infrastructure, and AI integration. I'm committed to writing clean, maintainable code and following industry best practices. I thrive in collaborative environments where I can mentor junior developers and contribute to meaningful projects.",
    p3: "Beyond coding, I'm passionate about staying current with emerging technologies and sharing knowledge with the developer community. Let's build something amazing together!",
    technicalExpertise: "Technical Expertise",
    frontendDev: "Frontend Development",
    backendDev: "Backend Development",
    cloudDevOps: "Cloud & DevOps",
    aiMl: "AI & Machine Learning",
    frontendSkills: [
      "React.js, Next.js, Vue.js, TypeScript",
      "Tailwind CSS, Material-UI, Styled Components",
      "Redux, Context API, State Management",
      "Responsive Design, Accessibility (WCAG)",
    ],
    backendSkills: [
      "Node.js, Express.js, NestJS",
      "Python, Django, Flask, FastAPI",
      "RESTful APIs, GraphQL, WebSockets",
      "PostgreSQL, MongoDB, Redis",
    ],
    cloudSkills: [
      "AWS (EC2, S3, Lambda, RDS)",
      "Docker, Kubernetes, CI/CD",
      "GitHub Actions, Jenkins",
      "Monitoring: DataDog, CloudWatch",
    ],
    aiSkills: [
      "OpenAI GPT-4, ChatGPT API Integration",
      "LangChain, Vector Databases",
      "TensorFlow, PyTorch",
      "Hugging Face Transformers",
      "RAG Systems",
    ],
  },
  experience: {
    title: "Work",
    titleHighlight: "Experience",
    subtitle:
      "8+ years of professional experience building scalable web applications and leading development teams",
    keyAchievements: "Key Achievements:",
    techLabel: "Technologies:",
    items: [
      {
        role: "Senior Full-Stack Developer",
        company: "TechCorp Solutions",
        location: "San Francisco, CA",
        date: "Jan 2021 - Jan 2026",
        description:
          "Leading development of enterprise-grade SaaS applications serving 50,000+ users. Architected and implemented microservices infrastructure reducing system downtime by 40%. Mentoring team of 5 junior developers and conducting code reviews.",
        achievements: [
          "Migrated legacy monolith to microservices architecture, improving scalability by 300%",
          "Implemented CI/CD pipeline reducing deployment time from 2 hours to 15 minutes",
          "Optimized database queries resulting in 60% faster page load times",
          "Led adoption of TypeScript and modern React patterns across the team",
        ],
      },
      {
        role: "Full-Stack Developer",
        company: "InnovateTech Inc.",
        location: "Seattle, WA",
        date: "Mar 2019 - Dec 2020",
        description:
          "Developed and maintained multiple client-facing web applications using React and Node.js. Collaborated with product managers and designers to deliver user-centric features.",
        achievements: [
          "Built real-time analytics dashboard processing 1M+ events daily",
          "Reduced API response times by 45% through optimization and caching strategies",
          "Implemented OAuth2 authentication system supporting multiple providers",
          "Created reusable component library used across 8 different projects",
        ],
      },
      {
        role: "Software Engineer",
        company: "Digital Dynamics",
        location: "Austin, TX",
        date: "Jun 2017 - Feb 2019",
        description:
          "Developed responsive web applications for e-commerce clients. Worked closely with cross-functional teams to deliver high-quality features on tight deadlines.",
        achievements: [
          "Developed e-commerce platform processing $2M+ in monthly transactions",
          "Implemented payment gateway integration with Stripe and PayPal",
          "Built admin dashboard for inventory management and order tracking",
          "Achieved 95%+ test coverage on critical business logic",
        ],
      },
      {
        role: "Software Developer",
        company: "Biz Solutions",
        location: "Boston, MA",
        date: "Aug 2016 - May 2017",
        description:
          "Developed and maintained a SaaS application for small businesses to manage their inventory and sales. Collaborated with senior developers to implement new features and fix bugs.",
        achievements: [
          "Developed a SaaS application for small businesses to manage their inventory and sales",
          "Implemented a RESTful API for the application",
          "Implemented a frontend for the application using React and Redux",
          "Implemented a backend for the application using Node.js and Express",
        ],
      },
      {
        role: "Junior Web Developer",
        company: "StartUp Labs",
        location: "Boston, MA",
        date: "Aug 2013 - May 2015",
        description:
          "Started career building responsive websites and learning full-stack development. Collaborated with senior developers to implement new features and fix bugs.",
        achievements: [
          "Developed 15+ landing pages with 40%+ conversion rate improvements",
          "Implemented responsive designs across all major browsers and devices",
          "Learned and applied React, Node.js, and modern JavaScript practices",
          "Contributed to open-source projects and internal tooling",
        ],
      },
    ],
    techStacks: [
      ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL", "Redis"],
      ["React", "Vue.js", "Express.js", "MongoDB", "GraphQL", "Jest", "Webpack"],
      ["JavaScript", "React", "Node.js", "MySQL", "AWS S3", "Git", "Sass"],
      ["React", "Node.js", "Express", "MongoDB", "AWS", "Docker", "Git"],
      ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "PHP", "MySQL"],
    ],
  },
  education: {
    title: "Education",
    titleSuffix: "& Certifications",
    subtitle:
      "Strong academic foundation combined with continuous professional development",
    academicBackground: "Academic Background",
    certTitle: "Professional Certifications",
    continuousLearning: "Continuous Learning",
    relevantCoursework: "Relevant Coursework:",
    honorsAwards: "Honors & Awards:",
    issued: "Issued:",
    onlineCourses: "Online Courses",
    workshopsConferences: "Workshops & Conferences",
    publicationsSpeaking: "Publications & Speaking",
    onlineCourseItems: [
      "Advanced React Patterns",
      "System Design Interview",
      "Microservices Architecture",
      "DevOps Engineering",
    ],
    workshopItems: [
      "React Conf 2023",
      "AWS re:Invent 2022",
      "Node.js Interactive",
      "KubeCon + CloudNativeCon",
    ],
    publicationItems: [
      "Tech Blog (50+ articles)",
      "Guest Speaker at universities",
      "Open Source Contributor",
      "Mentor at coding bootcamps",
    ],
    degrees: [
      {
        degree: "Master of Science in Computer Science",
        school: "Portland State University",
        location: "United States",
        date: "2011 - 2013",
        gpa: "4.5/5.0",
        description:
          "Specialized in Software Engineering and Artificial Intelligence. Completed thesis on machine learning algorithms for natural language processing. Participated in industry collaborations and research projects.",
        coursework: [
          "Advanced Algorithms",
          "Machine Learning",
          "Distributed Systems",
          "Database Systems",
          "Computer Vision",
          "Natural Language Processing",
        ],
        honors: [
          "Dean's List (All Semesters)",
          "Graduate Research Scholarship",
          "Best Thesis Award",
        ],
      },
      {
        degree: "Bachelor of Engineering in Computer Science",
        school: "The Hong Kong University of Science and Technology (HKUST)",
        location: "Hong Kong",
        date: "2007 - 2011",
        gpa: "3.8/4.0",
        description:
          "Graduated with First Class Honours. Strong foundation in computer science fundamentals, software engineering principles, and mathematics. Active participant in programming competitions and tech clubs.",
        coursework: [
          "Data Structures & Algorithms",
          "Operating Systems",
          "Computer Architecture",
          "Software Engineering",
          "Web Development",
          "Linear Algebra",
        ],
        honors: [
          "First Class Honours",
          "Dean's Honor List",
          "Outstanding Student Award",
          "ACM Programming Competition Winner",
        ],
      },
    ],
    certifications: [
      {
        name: "AWS Certified Solutions Architect - Professional",
        issuer: "Amazon Web Services",
        date: "2023",
        credentialId: "AWS-PSA-12345",
      },
      {
        name: "Google Cloud Professional Cloud Developer",
        issuer: "Google Cloud",
        date: "2022",
        credentialId: "GCP-PCD-67890",
      },
      {
        name: "Certified Kubernetes Administrator (CKA)",
        issuer: "Cloud Native Computing Foundation",
        date: "2022",
        credentialId: "CKA-54321",
      },
      {
        name: "MongoDB Certified Developer",
        issuer: "MongoDB University",
        date: "2021",
        credentialId: "MDB-DEV-98765",
      },
    ],
  },
  previousWork: {
    title: "Previous Projects",
    projects: [
      {
        title: "Hypotenuse AI",
        description:
          "Hypotenuse.ai is an AI-powered platform designed to generate high-quality content for e-commerce brands and marketers. It offers tools for creating SEO-optimized blog articles, product descriptions, social media posts, ad copy, and more. The platform supports bulk content generation and integrates with CMS systems like Shopify and WordPress.",
        imageUrl: "/projects/ai.png",
      },
      {
        title: "American Express",
        description:
          "Offers small business loans and financial services, providing flexible lines of credit and simplified cash flow management tools for small businesses.",
        imageUrl: "/projects/americanexpress.png",
      },
      {
        title: "Future Learn",
        description:
          "An online learning platform offering courses, programs, and degrees from leading universities and institutions worldwide. It focuses on a wide range of subjects.",
        imageUrl: "/projects/futurelearn.png",
      },
      {
        title: "Bioweb",
        description:
          "Comprehensive time tracking and attendance solution SaaS product. The primary objective was to provide employers with accurate and reliable tracking of their employees' work hours, locations, and overall working activities. The solution aims to streamline time management, improve productivity, and ensure transparency in employee activities.",
        imageUrl: "/projects/Screenshot_2.png",
      },
      {
        title: "CerasHealth",
        description:
          "Navigate your patient care journey with our five seamless AI-powered platform components utilizing predictive analytics and outcome benchmarks.",
        imageUrl: "/projects/ceras.png",
      },
    ],
  },
  lifeCulture: {
    title: "Life &",
    titleHighlight: "Culture",
    subtitle: "Beyond code — my passions, values, and what drives me",
    passionateAbout: "What I'm Passionate About",
    coreValues: "Core Values",
    whenNotCoding: "When I'm Not Coding",
    myWorkStyle: "My Work Style",
    professionalApproach: "Professional Approach",
    whatILookFor: "What I Look For",
    quote:
      '"Code is like humor. When you have to explain it, it\'s bad."',
    quoteAuthor: "— Cory House",
    interests: [
      {
        icon: "🚀",
        title: "Innovation & Technology",
        description:
          "Constantly exploring emerging technologies like AI, blockchain, and quantum computing. Love attending tech conferences and hackathons to stay ahead of the curve.",
      },
      {
        icon: "📚",
        title: "Continuous Learning",
        description:
          "Avid reader of technical blogs, research papers, and books. Currently learning Rust and exploring WebAssembly for high-performance applications.",
      },
      {
        icon: "🎨",
        title: "Design & UX",
        description:
          "Passionate about creating beautiful, intuitive interfaces. Believe that great software is where engineering meets design.",
      },
      {
        icon: "🤝",
        title: "Mentorship",
        description:
          "Active mentor at coding bootcamps and online communities. Love helping aspiring developers navigate their tech careers.",
      },
      {
        icon: "🌍",
        title: "Open Source",
        description:
          "Regular contributor to open-source projects. Believe in giving back to the community that has given me so much.",
      },
      {
        icon: "⚡",
        title: "Performance Optimization",
        description:
          "Obsessed with making applications faster and more efficient. Love the challenge of optimizing code and infrastructure.",
      },
    ],
    values: [
      {
        icon: "✨",
        title: "Quality Over Quantity",
        description:
          "I believe in writing clean, maintainable code that stands the test of time rather than rushing to ship features.",
      },
      {
        icon: "🤜🤛",
        title: "Collaboration",
        description:
          "The best solutions come from diverse perspectives. I value teamwork, open communication, and shared learning.",
      },
      {
        icon: "❤️",
        title: "User-Centric Approach",
        description:
          "Every line of code I write is with the end user in mind. Their experience and satisfaction drive my decisions.",
      },
      {
        icon: "📈",
        title: "Continuous Growth",
        description:
          "Technology evolves rapidly, and so should we. I'm committed to lifelong learning and adaptation.",
      },
    ],
    hobbies: [
      { icon: "📷", title: "Photography", description: "Capturing moments and landscapes during travels" },
      { icon: "🏔️", title: "Hiking", description: "Exploring nature trails and mountain peaks" },
      { icon: "🎮", title: "Gaming", description: "Strategy games and indie titles" },
      { icon: "☕", title: "Coffee", description: "Third-wave coffee enthusiast and home barista" },
      { icon: "🎵", title: "Music", description: "Electronic music production in spare time" },
      { icon: "🍳", title: "Cooking", description: "Experimenting with different cuisines" },
    ],
    workStyleItems: [
      { label: "Agile Mindset:", text: "Embrace change, iterate quickly, deliver value" },
      { label: "Clear Communication:", text: "Regular updates, transparent progress tracking" },
      { label: "Proactive Problem Solving:", text: "Anticipate issues before they arise" },
      { label: "Documentation:", text: "Believe in self-documenting code and clear READMEs" },
    ],
    lookForItems: [
      { label: "Challenging Projects:", text: "Problems that push technical boundaries" },
      { label: "Growth Opportunities:", text: "Teams that invest in learning and development" },
      { label: "Impact:", text: "Work that makes a meaningful difference" },
      { label: "Culture:", text: "Collaborative, innovative, and inclusive environments" },
    ],
  },
  contact: {
    heading: "Let's Connect!",
    name: "Kevin Chen",
    role: "Senior Full-Stack Developer",
    tagline: "Passionate about building exceptional web experiences",
  },
  hireMe: "Let's work together!",
  footer: {
    tagline:
      "Senior Full-Stack Developer passionate about building exceptional web experiences and innovative solutions.",
    quickLinks: "Quick Links",
    getInTouch: "Get In Touch",
    available: "Available for opportunities",
    allRightsReserved: "All rights reserved.",
    madeWith: "Made with",
    using: "using Next.js & Tailwind CSS",
    links: [
      { text: "Home", id: "hero" },
      { text: "About", id: "about" },
      { text: "Experience", id: "experience" },
      { text: "Projects", id: "previouswork" },
      { text: "Contact", id: "contact" },
    ],
  },
};

const zh: typeof en = {
  nav: {
    home: "首頁",
    about: "關於",
    experience: "工作經驗",
    education: "學歷",
    projects: "項目",
    contact: "聯絡",
    langToggle: "English",
  },
  hero: {
    subtitle: "資深全棧開發工程師 & 技術顧問",
    subtitleLine2: "專注於可擴展網頁應用、雲端架構及AI驅動解決方案",
    viewMyWork: "查看我的作品",
    contactMe: "聯絡我",
  },
  about: {
    heading: "關於",
    name: "陳凱文",
    professionalSummary: "個人簡介",
    p1: "你好！我是陳凱文，一位熱情的全棧開發工程師，擁有超過10年構建創新網頁應用及帶領開發團隊的豐富經驗。我專注於創建可擴展、以用戶為中心的解決方案，推動業務增長並提升用戶體驗。",
    p2: "我的專業涵蓋現代JavaScript框架、雲端基礎設施及AI整合。我致力於撰寫簡潔、可維護的代碼並遵循業界最佳實踐。我在協作環境中茁壯成長，樂於指導初級開發人員並貢獻於有意義的項目。",
    p3: "在編程之外，我熱衷於緊跟新興技術的發展，並與開發者社群分享知識。讓我們一起構建令人驚嘆的事物！",
    technicalExpertise: "技術專長",
    frontendDev: "前端開發",
    backendDev: "後端開發",
    cloudDevOps: "雲端 & DevOps",
    aiMl: "AI & 機器學習",
    frontendSkills: [
      "React.js, Next.js, Vue.js, TypeScript",
      "Tailwind CSS, Material-UI, Styled Components",
      "Redux, Context API, 狀態管理",
      "響應式設計, 無障礙設計 (WCAG)",
    ],
    backendSkills: [
      "Node.js, Express.js, NestJS",
      "Python, Django, Flask, FastAPI",
      "RESTful API, GraphQL, WebSockets",
      "PostgreSQL, MongoDB, Redis",
    ],
    cloudSkills: [
      "AWS (EC2, S3, Lambda, RDS)",
      "Docker, Kubernetes, CI/CD",
      "GitHub Actions, Jenkins",
      "監控: DataDog, CloudWatch",
    ],
    aiSkills: [
      "OpenAI GPT-4, ChatGPT API 整合",
      "LangChain, 向量數據庫",
      "TensorFlow, PyTorch",
      "Hugging Face Transformers",
      "RAG 系統",
    ],
  },
  experience: {
    title: "工作",
    titleHighlight: "經驗",
    subtitle: "超過8年的專業經驗，構建可擴展的網頁應用並帶領開發團隊",
    keyAchievements: "主要成就：",
    techLabel: "技術棧：",
    items: [
      {
        role: "資深全棧開發工程師",
        company: "TechCorp Solutions",
        location: "美國舊金山",
        date: "2021年1月 - 2026年1月",
        description:
          "帶領企業級SaaS應用開發，服務超過50,000名用戶。設計並實施微服務基礎設施，將系統停機時間降低40%。指導5名初級開發人員並進行代碼審查。",
        achievements: [
          "將舊式單體架構遷移至微服務架構，可擴展性提升300%",
          "實施CI/CD流水線，將部署時間從2小時縮短至15分鐘",
          "優化數據庫查詢，頁面加載速度提升60%",
          "推動團隊採用TypeScript及現代React開發模式",
        ],
      },
      {
        role: "全棧開發工程師",
        company: "InnovateTech Inc.",
        location: "美國西雅圖",
        date: "2019年3月 - 2020年12月",
        description:
          "使用React和Node.js開發並維護多個面向客戶的網頁應用。與產品經理和設計師協作，交付以用戶為中心的功能。",
        achievements: [
          "構建每日處理超過100萬個事件的實時分析儀表板",
          "通過優化和緩存策略，將API響應時間縮短45%",
          "實施支援多個提供商的OAuth2認證系統",
          "創建可在8個不同項目中復用的組件庫",
        ],
      },
      {
        role: "軟件工程師",
        company: "Digital Dynamics",
        location: "美國奧斯汀",
        date: "2017年6月 - 2019年2月",
        description:
          "為電商客戶開發響應式網頁應用。與跨職能團隊緊密合作，在緊迫的期限內交付高品質的功能。",
        achievements: [
          "開發每月處理超過200萬美元交易的電商平台",
          "整合Stripe和PayPal支付閘道",
          "構建用於庫存管理和訂單追蹤的管理後台",
          "關鍵業務邏輯的測試覆蓋率達95%以上",
        ],
      },
      {
        role: "軟件開發工程師",
        company: "Biz Solutions",
        location: "美國波士頓",
        date: "2016年8月 - 2017年5月",
        description:
          "開發並維護一款幫助中小企業管理庫存和銷售的SaaS應用。與資深開發人員協作，實現新功能並修復缺陷。",
        achievements: [
          "開發幫助中小企業管理庫存和銷售的SaaS應用",
          "為應用實施RESTful API",
          "使用React和Redux實施應用前端",
          "使用Node.js和Express實施應用後端",
        ],
      },
      {
        role: "初級網頁開發工程師",
        company: "StartUp Labs",
        location: "美國波士頓",
        date: "2013年8月 - 2015年5月",
        description:
          "職業生涯起點，構建響應式網站並學習全棧開發。與資深開發人員協作，實現新功能並修復缺陷。",
        achievements: [
          "開發超過15個著陸頁，轉化率提升超過40%",
          "在所有主流瀏覽器和設備上實現響應式設計",
          "學習並應用React、Node.js及現代JavaScript實踐",
          "貢獻於開源項目和內部工具",
        ],
      },
    ],
    techStacks: [
      ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL", "Redis"],
      ["React", "Vue.js", "Express.js", "MongoDB", "GraphQL", "Jest", "Webpack"],
      ["JavaScript", "React", "Node.js", "MySQL", "AWS S3", "Git", "Sass"],
      ["React", "Node.js", "Express", "MongoDB", "AWS", "Docker", "Git"],
      ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "PHP", "MySQL"],
    ],
  },
  education: {
    title: "學歷",
    titleSuffix: "& 認證",
    subtitle: "紮實的學術基礎結合持續的專業發展",
    academicBackground: "學術背景",
    certTitle: "專業認證",
    continuousLearning: "持續學習",
    relevantCoursework: "相關課程：",
    honorsAwards: "榮譽及獎項：",
    issued: "頒發日期：",
    onlineCourses: "線上課程",
    workshopsConferences: "工作坊 & 會議",
    publicationsSpeaking: "發表及演講",
    onlineCourseItems: [
      "進階React模式",
      "系統設計面試",
      "微服務架構",
      "DevOps工程",
    ],
    workshopItems: [
      "React Conf 2023",
      "AWS re:Invent 2022",
      "Node.js Interactive",
      "KubeCon + CloudNativeCon",
    ],
    publicationItems: [
      "技術博客（超過50篇文章）",
      "大學客座演講嘉賓",
      "開源貢獻者",
      "編程訓練營導師",
    ],
    degrees: [
      {
        degree: "計算機科學碩士",
        school: "波特蘭州立大學",
        location: "美國",
        date: "2011 - 2013",
        gpa: "4.5/5.0",
        description:
          "主修軟件工程及人工智能。完成了關於自然語言處理機器學習算法的論文。參與了業界合作及研究項目。",
        coursework: [
          "高級算法",
          "機器學習",
          "分佈式系統",
          "數據庫系統",
          "計算機視覺",
          "自然語言處理",
        ],
        honors: ["院長榮譽名單（全部學期）", "研究生研究獎學金", "最佳論文獎"],
      },
      {
        degree: "計算機工程學士",
        school: "香港科技大學 (HKUST)",
        location: "香港",
        date: "2007 - 2011",
        gpa: "3.8/4.0",
        description:
          "以一等榮譽畢業。在計算機科學基礎、軟件工程原理及數學方面打下了堅實的基礎。積極參與程序設計競賽和技術社團。",
        coursework: [
          "數據結構與算法",
          "操作系統",
          "計算機架構",
          "軟件工程",
          "網頁開發",
          "線性代數",
        ],
        honors: [
          "一等榮譽",
          "院長榮譽名單",
          "傑出學生獎",
          "ACM程序設計競賽冠軍",
        ],
      },
    ],
    certifications: [
      {
        name: "AWS 認證解決方案架構師 - 專業級",
        issuer: "Amazon Web Services",
        date: "2023",
        credentialId: "AWS-PSA-12345",
      },
      {
        name: "Google Cloud 專業雲端開發者",
        issuer: "Google Cloud",
        date: "2022",
        credentialId: "GCP-PCD-67890",
      },
      {
        name: "Kubernetes 認證管理員 (CKA)",
        issuer: "Cloud Native Computing Foundation",
        date: "2022",
        credentialId: "CKA-54321",
      },
      {
        name: "MongoDB 認證開發者",
        issuer: "MongoDB University",
        date: "2021",
        credentialId: "MDB-DEV-98765",
      },
    ],
  },
  previousWork: {
    title: "往期項目",
    projects: [
      {
        title: "Hypotenuse AI",
        description:
          "Hypotenuse.ai是一個AI驅動的平台，專為電商品牌和市場人員生成高品質內容。提供SEO優化的博客文章、產品描述、社交媒體帖子、廣告文案等工具，支持批量內容生成，並可與Shopify和WordPress等CMS系統整合。",
        imageUrl: "/projects/ai.png",
      },
      {
        title: "American Express",
        description:
          "為中小企業提供貸款和金融服務，提供靈活的信用額度和簡化的現金流管理工具。",
        imageUrl: "/projects/americanexpress.png",
      },
      {
        title: "Future Learn",
        description:
          "一個在線學習平台，提供來自全球頂尖大學和機構的課程、項目和學位，涵蓋廣泛的學科領域。",
        imageUrl: "/projects/futurelearn.png",
      },
      {
        title: "Bioweb",
        description:
          "全面的考勤追蹤SaaS產品，旨在為僱主提供準確可靠的員工工作時長、工作地點及整體工作活動追蹤。致力於簡化時間管理、提升生產力並確保員工活動的透明度。",
        imageUrl: "/projects/Screenshot_2.png",
      },
      {
        title: "CerasHealth",
        description:
          "通過五個無縫整合的AI驅動平台組件，運用預測性分析和結果基準，引導您的患者護理之旅。",
        imageUrl: "/projects/ceras.png",
      },
    ],
  },
  lifeCulture: {
    title: "生活 &",
    titleHighlight: "文化",
    subtitle: "代碼之外——我的熱情、價值觀以及驅動我前進的力量",
    passionateAbout: "我熱衷的事物",
    coreValues: "核心價值觀",
    whenNotCoding: "不在編程時",
    myWorkStyle: "我的工作風格",
    professionalApproach: "專業態度",
    whatILookFor: "我尋求的",
    quote: "「代碼就像幽默。當你必須解釋它時，它就不夠好了。」",
    quoteAuthor: "— Cory House",
    interests: [
      {
        icon: "🚀",
        title: "創新與技術",
        description:
          "不斷探索AI、區塊鏈和量子計算等新興技術。喜歡參加技術會議和黑客馬拉松，保持行業前沿。",
      },
      {
        icon: "📚",
        title: "持續學習",
        description:
          "熱衷閱讀技術博客、研究論文和書籍。目前正在學習Rust並探索用於高性能應用的WebAssembly。",
      },
      {
        icon: "🎨",
        title: "設計與用戶體驗",
        description:
          "熱衷於創建美觀、直觀的界面。相信優秀的軟件是工程與設計的完美結合。",
      },
      {
        icon: "🤝",
        title: "導師工作",
        description:
          "積極在編程訓練營和線上社群擔任導師。熱愛幫助有志開發者規劃他們的技術職業道路。",
      },
      {
        icon: "🌍",
        title: "開源",
        description: "定期為開源項目做出貢獻。相信回饋給予了我如此之多的社群。",
      },
      {
        icon: "⚡",
        title: "性能優化",
        description:
          "對讓應用更快、更高效充滿熱情。喜歡優化代碼和基礎設施的挑戰。",
      },
    ],
    values: [
      {
        icon: "✨",
        title: "質量優於數量",
        description:
          "我相信編寫簡潔、可維護的代碼，能經受時間考驗，而不是急於發布功能。",
      },
      {
        icon: "🤜🤛",
        title: "協作",
        description:
          "最佳解決方案來自多元視角。我重視團隊合作、開放溝通和共同學習。",
      },
      {
        icon: "❤️",
        title: "以用戶為中心",
        description:
          "我編寫的每一行代碼都以最終用戶為出發點。他們的體驗和滿意度驅動著我的決策。",
      },
      {
        icon: "📈",
        title: "持續成長",
        description: "技術快速演進，我們也應如此。我致力於終身學習和適應變化。",
      },
    ],
    hobbies: [
      { icon: "📷", title: "攝影", description: "旅行中捕捉美好瞬間與風景" },
      { icon: "🏔️", title: "行山", description: "探索自然小徑與山峰" },
      { icon: "🎮", title: "遊戲", description: "策略遊戲和獨立遊戲" },
      { icon: "☕", title: "咖啡", description: "精品咖啡愛好者和家庭咖啡師" },
      { icon: "🎵", title: "音樂", description: "業餘時間製作電子音樂" },
      { icon: "🍳", title: "烹飪", description: "嘗試不同料理" },
    ],
    workStyleItems: [
      { label: "敏捷思維：", text: "擁抱變化，快速迭代，交付價值" },
      { label: "清晰溝通：", text: "定期更新，透明的進度追蹤" },
      { label: "主動解決問題：", text: "在問題出現前就預測到它" },
      { label: "文檔：", text: "相信自我說明的代碼和清晰的README" },
    ],
    lookForItems: [
      { label: "有挑戰性的項目：", text: "突破技術邊界的問題" },
      { label: "成長機會：", text: "投資於學習和發展的團隊" },
      { label: "影響力：", text: "能產生有意義影響的工作" },
      { label: "文化：", text: "協作、創新且包容的環境" },
    ],
  },
  contact: {
    heading: "讓我們聯繫！",
    name: "陳凱文",
    role: "資深全棧開發工程師",
    tagline: "熱衷於構建卓越的網頁體驗",
  },
  hireMe: "讓我們合作！",
  footer: {
    tagline: "資深全棧開發工程師，熱衷於構建卓越的網頁體驗和創新解決方案。",
    quickLinks: "快速連結",
    getInTouch: "聯絡方式",
    available: "接受工作機會",
    allRightsReserved: "版權所有。",
    madeWith: "使用",
    using: "Next.js & Tailwind CSS 製作",
    links: [
      { text: "首頁", id: "hero" },
      { text: "關於", id: "about" },
      { text: "工作經驗", id: "experience" },
      { text: "項目", id: "previouswork" },
      { text: "聯絡", id: "contact" },
    ],
  },
};

export const translations: Record<Language, typeof en> = { en, zh };
