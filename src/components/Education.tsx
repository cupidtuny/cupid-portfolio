import React from "react";

const education = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    school: "National University of Singapore (NUS)",
    location: "Singapore",
    date: "2014 - 2016",
    gpa: "4.5/5.0",
    description: "Specialized in Software Engineering and Artificial Intelligence. Completed thesis on machine learning algorithms for natural language processing. Participated in industry collaborations and research projects.",
    coursework: ["Advanced Algorithms", "Machine Learning", "Distributed Systems", "Database Systems", "Computer Vision", "Natural Language Processing"],
    honors: ["Dean's List (All Semesters)", "Graduate Research Scholarship", "Best Thesis Award"]
  },
  {
    id: 2,
    degree: "Bachelor of Engineering in Computer Science",
    school: "The Hong Kong University of Science and Technology (HKUST)",
    location: "Hong Kong",
    date: "2010 - 2014",
    gpa: "3.8/4.0",
    description: "Graduated with First Class Honours. Strong foundation in computer science fundamentals, software engineering principles, and mathematics. Active participant in programming competitions and tech clubs.",
    coursework: ["Data Structures & Algorithms", "Operating Systems", "Computer Architecture", "Software Engineering", "Web Development", "Linear Algebra"],
    honors: ["First Class Honours", "Dean's Honor List", "Outstanding Student Award", "ACM Programming Competition Winner"]
  }
];

const certifications = [
  { id: 1, name: "AWS Certified Solutions Architect - Professional", issuer: "Amazon Web Services", date: "2023", credentialId: "AWS-PSA-12345" },
  { id: 2, name: "Google Cloud Professional Cloud Developer", issuer: "Google Cloud", date: "2022", credentialId: "GCP-PCD-67890" },
  { id: 3, name: "Certified Kubernetes Administrator (CKA)", issuer: "Cloud Native Computing Foundation", date: "2022", credentialId: "CKA-54321" },
  { id: 4, name: "MongoDB Certified Developer", issuer: "MongoDB University", date: "2021", credentialId: "MDB-DEV-98765" }
];

const Education: React.FC = () => {
  return (
    <div id="education" className="relative min-h-screen py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="animated-gradient">Education</span> & Certifications
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Strong academic foundation combined with continuous professional development
          </p>
        </div>

        {/* Degrees */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="mr-3">🎓</span> Academic Background
          </h3>
          <div className="space-y-8">
            {education.map((edu) => (
              <div key={edu.id} className="border border-white/10 rounded-lg p-8 blur-background2 shadow-xl hover:border-white/20 transition-all duration-300">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-2xl font-bold text-white mb-2">{edu.degree}</h4>
                    <p className="text-gray-300 text-lg font-semibold">{edu.school}</p>
                    <p className="text-gray-500">{edu.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-300 font-medium bg-white/5 border border-white/10 px-4 py-2 rounded-full inline-block mb-2">
                      {edu.date}
                    </span>
                    <p className="text-gray-400 font-semibold">GPA: {edu.gpa}</p>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">{edu.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-white font-semibold mb-3 flex items-center">
                      <span className="mr-2">📚</span> Relevant Coursework:
                    </h5>
                    <ul className="space-y-2">
                      {edu.coursework.map((course, i) => (
                        <li key={i} className="text-gray-400 flex items-start">
                          <span className="text-gray-600 mr-2">▸</span>
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-3 flex items-center">
                      <span className="mr-2">🏆</span> Honors & Awards:
                    </h5>
                    <ul className="space-y-2">
                      {edu.honors.map((honor, i) => (
                        <li key={i} className="text-gray-400 flex items-start">
                          <span className="text-gray-500 mr-2">★</span>
                          <span>{honor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="mr-3">🏅</span> Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div key={cert.id} className="border border-white/10 rounded-lg p-6 blur-background2 shadow-xl hover:border-white/20 hover:scale-105 transition-all duration-300">
                <h4 className="text-xl font-bold text-white mb-2">{cert.name}</h4>
                <p className="text-gray-300 font-semibold mb-2">{cert.issuer}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Issued: {cert.date}</span>
                  <span className="text-gray-600 text-xs">ID: {cert.credentialId}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continuous Learning */}
        <div className="mt-16 border border-white/10 rounded-lg p-8 blur-background2 shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="mr-3">📖</span> Continuous Learning
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-gray-400">
            <div>
              <h4 className="font-semibold text-gray-300 mb-2">Online Courses</h4>
              <ul className="space-y-1 text-sm">
                <li>• Advanced React Patterns</li>
                <li>• System Design Interview</li>
                <li>• Microservices Architecture</li>
                <li>• DevOps Engineering</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-300 mb-2">Workshops & Conferences</h4>
              <ul className="space-y-1 text-sm">
                <li>• React Conf 2023</li>
                <li>• AWS re:Invent 2022</li>
                <li>• Node.js Interactive</li>
                <li>• KubeCon + CloudNativeCon</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-300 mb-2">Publications & Speaking</h4>
              <ul className="space-y-1 text-sm">
                <li>• Tech Blog (50+ articles)</li>
                <li>• Guest Speaker at universities</li>
                <li>• Open Source Contributor</li>
                <li>• Mentor at coding bootcamps</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
