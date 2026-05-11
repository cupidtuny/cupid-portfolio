"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const Education: React.FC = () => {
  const { t } = useLanguage();
  const ed = t.education;

  return (
    <div id="education" className="relative min-h-screen py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="animated-gradient">{ed.title}</span> {ed.titleSuffix}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{ed.subtitle}</p>
        </div>

        {/* Degrees */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="mr-3">🎓</span> {ed.academicBackground}
          </h3>
          <div className="space-y-8">
            {ed.degrees.map((edu, idx) => (
              <div key={idx} className="border border-white/10 rounded-lg p-8 blur-background2 shadow-xl hover:border-white/20 transition-all duration-300">
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
                      <span className="mr-2">📚</span> {ed.relevantCoursework}
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
                      <span className="mr-2">🏆</span> {ed.honorsAwards}
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
            <span className="mr-3">🏅</span> {ed.certTitle}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {ed.certifications.map((cert, idx) => (
              <div key={idx} className="border border-white/10 rounded-lg p-6 blur-background2 shadow-xl hover:border-white/20 hover:scale-105 transition-all duration-300">
                <h4 className="text-xl font-bold text-white mb-2">{cert.name}</h4>
                <p className="text-gray-300 font-semibold mb-2">{cert.issuer}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">{ed.issued} {cert.date}</span>
                  <span className="text-gray-600 text-xs">ID: {cert.credentialId}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continuous Learning */}
        <div className="mt-16 border border-white/10 rounded-lg p-8 blur-background2 shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="mr-3">📖</span> {ed.continuousLearning}
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-gray-400">
            <div>
              <h4 className="font-semibold text-gray-300 mb-2">{ed.onlineCourses}</h4>
              <ul className="space-y-1 text-sm">
                {ed.onlineCourseItems.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-300 mb-2">{ed.workshopsConferences}</h4>
              <ul className="space-y-1 text-sm">
                {ed.workshopItems.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-300 mb-2">{ed.publicationsSpeaking}</h4>
              <ul className="space-y-1 text-sm">
                {ed.publicationItems.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
