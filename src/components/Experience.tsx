import React from "react";

const experiences = [
  {
    id: 1,
    role: "Senior Full-Stack Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    date: "Jan 2021 - Present",
    description: "Leading development of enterprise-grade SaaS applications serving 50,000+ users. Architected and implemented microservices infrastructure reducing system downtime by 40%. Mentoring team of 5 junior developers and conducting code reviews.",
    achievements: [
      "Migrated legacy monolith to microservices architecture, improving scalability by 300%",
      "Implemented CI/CD pipeline reducing deployment time from 2 hours to 15 minutes",
      "Optimized database queries resulting in 60% faster page load times",
      "Led adoption of TypeScript and modern React patterns across the team"
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL", "Redis"]
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "InnovateTech Inc.",
    location: "Seattle, WA",
    date: "Mar 2019 - Dec 2020",
    description: "Developed and maintained multiple client-facing web applications using React and Node.js. Collaborated with product managers and designers to deliver user-centric features.",
    achievements: [
      "Built real-time analytics dashboard processing 1M+ events daily",
      "Reduced API response times by 45% through optimization and caching strategies",
      "Implemented OAuth2 authentication system supporting multiple providers",
      "Created reusable component library used across 8 different projects"
    ],
    technologies: ["React", "Vue.js", "Express.js", "MongoDB", "GraphQL", "Jest", "Webpack"]
  },
  {
    id: 3,
    role: "Software Engineer",
    company: "Digital Dynamics",
    location: "Austin, TX",
    date: "Jun 2017 - Feb 2019",
    description: "Developed responsive web applications for e-commerce clients. Worked closely with cross-functional teams to deliver high-quality features on tight deadlines.",
    achievements: [
      "Developed e-commerce platform processing $2M+ in monthly transactions",
      "Implemented payment gateway integration with Stripe and PayPal",
      "Built admin dashboard for inventory management and order tracking",
      "Achieved 95%+ test coverage on critical business logic"
    ],
    technologies: ["JavaScript", "React", "Node.js", "MySQL", "AWS S3", "Git", "Sass"]
  },
  {
    id: 4,
    role: "Junior Web Developer",
    company: "StartUp Labs",
    location: "Boston, MA",
    date: "Aug 2016 - May 2017",
    description: "Started career building responsive websites and learning full-stack development. Collaborated with senior developers to implement new features and fix bugs.",
    achievements: [
      "Developed 15+ landing pages with 40%+ conversion rate improvements",
      "Implemented responsive designs across all major browsers and devices",
      "Learned and applied React, Node.js, and modern JavaScript practices",
      "Contributed to open-source projects and internal tooling"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "PHP", "MySQL"]
  },
];

interface ExperienceItemProps {
  experience: typeof experiences[0];
  isLast: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, isLast }) => {
  return (
    <div className="relative pb-12">
      {!isLast && (
        <div className="absolute left-8 top-12 bottom-0 w-0.5 bg-gray-700"></div>
      )}
      <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-gray-600 border-4 border-[#0c0c10]"></div>

      <div className="ml-20">
        <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all duration-300 blur-background2 shadow-xl">
          <div className="flex flex-wrap justify-between items-start mb-3">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">{experience.role}</h3>
              <p className="text-gray-300 text-lg font-semibold">{experience.company}</p>
              <p className="text-gray-500 text-sm">{experience.location}</p>
            </div>
            <span className="text-gray-300 font-medium bg-white/5 px-4 py-1 rounded-full text-sm whitespace-nowrap border border-white/10">
              {experience.date}
            </span>
          </div>

          <p className="text-gray-400 mb-4 leading-relaxed">{experience.description}</p>

          <div className="mb-4">
            <h4 className="text-white font-semibold mb-2 flex items-center">
              <span className="mr-2">🏆</span> Key Achievements:
            </h4>
            <ul className="space-y-2">
              {experience.achievements.map((item, i) => (
                <li key={i} className="text-gray-400 flex items-start">
                  <span className="text-gray-500 mr-2 mt-1">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, i) => (
                <span key={i} className="bg-white/5 text-gray-300 px-3 py-1 rounded-full text-sm border border-white/10 hover:bg-white/10 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <div id="experience" className="relative min-h-screen py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="animated-gradient">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            8+ years of professional experience building scalable web applications and leading development teams
          </p>
        </div>
        <div className="mt-12">
          {experiences.map((experience, index) => (
            <ExperienceItem key={experience.id} experience={experience} isLast={index === experiences.length - 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
