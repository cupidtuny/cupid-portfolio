"use client";

import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useLanguage } from "@/context/LanguageContext";

const ContactCard: React.FC = () => {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <div id="contact" className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">
        {c.heading} <span className="animated-gradient">✨</span>
      </h2>
      <div className="bg-transparent border border-purple-500/30 p-8 rounded-lg shadow-lg text-white w-full md:max-w-4xl mx-auto mt-8 cc-bg blur-background w-4/5">
        <div className="flex justify-between items-center flex-wrap gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">{c.name}</h2>
            <p className="text-lg mb-4 text-gray-200">{c.role}</p>
            <p className="text-gray-300">{c.tagline}</p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/kevin-chen-3b479212/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={44} />
            </a>

            <a
              href="mailto:kevinchen.dev1993@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-200 transition-transform hover:scale-110"
              aria-label="Email"
            >
              <SiGmail size={44} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
