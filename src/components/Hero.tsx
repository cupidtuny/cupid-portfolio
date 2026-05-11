"use client";

import React from "react";
import { ButtonLink } from "./Scroller";
import { useLanguage } from "@/context/LanguageContext";

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div id="hero" className="relative h-screen flex items-center justify-center">
      <div className="text-center text-white px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="animated-gradient">Kevin Chen</span> 👋
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          {t.hero.subtitle}
          <br />
          {t.hero.subtitleLine2}
        </p>
        <div className="flex justify-center space-x-4 flex-wrap gap-2">
          <ButtonLink
            className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition-all shadow-lg"
            buttonText={t.hero.viewMyWork}
            elementId="previouswork"
          />
          <ButtonLink
            className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-all"
            buttonText={t.hero.contactMe}
            elementId="contact"
          />
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <span className="scroll-indicator block h-6 w-4 rounded-full bg-transparent border border-gray-600 ml-6"></span>
      </div>
    </div>
  );
};

export default Hero;
