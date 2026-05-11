"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const LifeCulture: React.FC = () => {
  const { t } = useLanguage();
  const lc = t.lifeCulture;

  return (
    <div id="culture" className="relative min-h-screen py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {lc.title} <span className="animated-gradient">{lc.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{lc.subtitle}</p>
        </div>

        {/* Interests */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">{lc.passionateAbout}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {lc.interests.map((item, i) => (
              <div key={i} className="border border-white/10 rounded-lg p-6 blur-background2 hover:border-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">{lc.coreValues}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {lc.values.map((value, i) => (
              <div key={i} className="border border-white/10 rounded-lg p-8 blur-background2 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start">
                  <span className="text-4xl mr-4">{value.icon}</span>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">{lc.whenNotCoding}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {lc.hobbies.map((hobby, i) => (
              <div key={i} className="border border-white/10 rounded-lg p-6 text-center blur-background2 hover:border-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-3">{hobby.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">{hobby.title}</h4>
                <p className="text-gray-400 text-sm">{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Work Style */}
        <div className="border border-white/10 rounded-lg p-8 blur-background2">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">{lc.myWorkStyle}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
                <span className="mr-2">💼</span> {lc.professionalApproach}
              </h4>
              <ul className="space-y-3 text-gray-400">
                {lc.workStyleItems.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-gray-500 mr-2 mt-1">▸</span>
                    <span><strong className="text-gray-200">{item.label}</strong> {item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
                <span className="mr-2">🎯</span> {lc.whatILookFor}
              </h4>
              <ul className="space-y-3 text-gray-400">
                {lc.lookForItems.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-gray-500 mr-2 mt-1">▸</span>
                    <span><strong className="text-gray-200">{item.label}</strong> {item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-12 text-center">
          <div className="border border-white/10 rounded-lg p-8 blur-background2 max-w-3xl mx-auto">
            <p className="text-2xl text-gray-300 italic mb-4">{lc.quote}</p>
            <p className="text-gray-500 font-semibold">{lc.quoteAuthor}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeCulture;
