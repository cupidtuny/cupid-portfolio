"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { scrollToElement } from "./Scroller";
import { useLanguage } from "@/context/LanguageContext";

const Sidebar: React.FC = () => {
  const { t, toggleLang } = useLanguage();
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  const sections = [
    { id: "hero", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "experience", label: t.nav.experience },
    { id: "education", label: t.nav.education },
    { id: "previouswork", label: t.nav.projects },
    { id: "contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      let current = sections[0].id;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  const handleNav = (id: string) => {
    scrollToElement(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile hamburger */}
      <button
        className="fixed top-4 left-4 z-[100] md:hidden bg-gray-900 text-white p-2 rounded-lg border border-gray-800"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[60] md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#08080c] border-r border-white/[0.06] z-[70] flex flex-col py-10 px-5 transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Brand */}
        <div className="mb-10">
          <span className="text-xl font-bold animated-gradient">Kevin Chen</span>
          <p className="text-gray-600 text-xs mt-1">Senior Full-Stack Developer</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 flex flex-col space-y-0.5">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className={`relative flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 text-left w-full
                ${activeSection === id ? "sidebar-active" : "sidebar-inactive"}`}
            >
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full transition-all duration-300
                  ${activeSection === id ? "bg-white opacity-100" : "opacity-0"}`}
              />
              {label}
            </button>
          ))}
        </nav>

        {/* Language toggle */}
        <div className="mt-4">
          <button
            onClick={toggleLang}
            className="w-full text-xs font-semibold px-4 py-2 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all duration-200"
          >
            {t.nav.langToggle}
          </button>
        </div>

        {/* Social icons */}
        <div className="mt-4 pt-6 border-t border-gray-800/60">
          <div className="flex flex-wrap gap-3">
            <Link
              href="https://www.linkedin.com/in/kevin-chen-3b479212/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </Link>

            <Link
              href="mailto:kevinchen.dev1993@gmail.com"
              className="text-gray-600 hover:text-white transition-colors"
              aria-label="Email"
            >
              <SiGmail size={18} />
            </Link>
          </div>
          <p className="text-gray-700 text-xs mt-4">© {new Date().getFullYear()} Kevin Chen</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
