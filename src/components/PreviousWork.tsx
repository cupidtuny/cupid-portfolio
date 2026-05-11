"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const PreviousWork: React.FC = () => {
  const { t } = useLanguage();
  const pw = t.previousWork;

  return (
    <div id="previouswork" className="bg-transparent text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-center mb-20">
          {pw.title}
        </h2>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {pw.projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-[#0a0a0a]"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={project.imageUrl}
                  alt={project.title}
                />
              </div>
              <div className="flex-1 bg-transparent p-6 flex flex-col justify-between pw-bg">
                <div className="flex-1">
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-300">{project.title}</p>
                    <p className="mt-3 text-base text-gray-300">{project.description}</p>
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

export default PreviousWork;
