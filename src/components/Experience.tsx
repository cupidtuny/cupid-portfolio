"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const Experience: React.FC = () => {
  const { t } = useLanguage();
  const ex = t.experience;

  return (
    <div id="experience" className="relative min-h-screen py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {ex.title} <span className="animated-gradient">{ex.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{ex.subtitle}</p>
        </div>
        <div className="mt-12">
          {ex.items.map((item, index) => (
            <div key={index} className="relative pb-12">
              {index < ex.items.length - 1 && (
                <div className="absolute left-8 top-12 bottom-0 w-0.5 bg-gray-700"></div>
              )}
              <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-gray-600 border-4 border-[#0c0c10]"></div>

              <div className="ml-20">
                <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all duration-300 blur-background2 shadow-xl">
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{item.role}</h3>
                      <p className="text-gray-300 text-lg font-semibold">{item.company}</p>
                      <p className="text-gray-500 text-sm">{item.location}</p>
                    </div>
                    <span className="text-gray-300 font-medium bg-white/5 px-4 py-1 rounded-full text-sm whitespace-nowrap border border-white/10">
                      {item.date}
                    </span>
                  </div>

                  <p className="text-gray-400 mb-4 leading-relaxed">{item.description}</p>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <span className="mr-2">🏆</span> {ex.keyAchievements}
                    </h4>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-400 flex items-start">
                          <span className="text-gray-500 mr-2 mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">{ex.techLabel}</h4>
                    <div className="flex flex-wrap gap-2">
                      {ex.techStacks[index]?.map((tech, i) => (
                        <span key={i} className="bg-white/5 text-gray-300 px-3 py-1 rounded-full text-sm border border-white/10 hover:bg-white/10 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
