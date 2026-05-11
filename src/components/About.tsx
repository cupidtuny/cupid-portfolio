"use client";

import React from "react";
import Image from "next/image";
import { FaCode, FaServer, FaCloud, FaBrain, FaCheck } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

const About: React.FC = () => {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <div id="about" className="relative flex items-center justify-center min-h-screen py-20">
      <div className="text-white px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-16">
          {a.heading} <span className="animated-gradient">Kevin Chen</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-white/20 shadow-2xl profile-image-container">
              <Image
                src="/profile/kevin-chen.jpg"
                alt="Kevin Chen"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* About Text */}
          <div className="bg-transparent rounded-lg shadow-lg px-6 py-8 border blur-background2">
            <h3 className="text-2xl font-semibold text-white mb-6">{a.professionalSummary}</h3>
            <div className="space-y-4">
              <p className="text-gray-200 text-lg leading-relaxed">{a.p1}</p>
              <p className="text-gray-200 text-lg leading-relaxed">{a.p2}</p>
              <p className="text-gray-200 text-lg leading-relaxed">{a.p3}</p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-transparent rounded-lg shadow-lg px-6 py-8 border blur-background2">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            {a.technicalExpertise}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-300 flex items-center">
                <FaCode className="mr-2" /> {a.frontendDev}
              </h4>
              <ul className="space-y-2 text-gray-200">
                {a.frontendSkills.map((skill, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheck className="mr-2 mt-1 text-xs flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-300 flex items-center">
                <FaServer className="mr-2" /> {a.backendDev}
              </h4>
              <ul className="space-y-2 text-gray-200">
                {a.backendSkills.map((skill, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheck className="mr-2 mt-1 text-xs flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-300 flex items-center">
                <FaCloud className="mr-2" /> {a.cloudDevOps}
              </h4>
              <ul className="space-y-2 text-gray-200">
                {a.cloudSkills.map((skill, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheck className="mr-2 mt-1 text-xs flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700">
            <h4 className="text-xl font-semibold text-gray-300 mb-4 flex items-center justify-center">
              <FaBrain className="mr-2" /> {a.aiMl}
            </h4>
            <div className="text-gray-200 text-center space-y-2">
              <p className="text-gray-200">
                <span className="mr-4">{a.aiSkills[0]}</span>
                <span className="mr-4">{a.aiSkills[1]}</span>
              </p>
              <p className="text-gray-200">
                <span className="mr-4">{a.aiSkills[2]}</span>
                <span className="mr-4">{a.aiSkills[3]}</span>
                <span>{a.aiSkills[4]}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
