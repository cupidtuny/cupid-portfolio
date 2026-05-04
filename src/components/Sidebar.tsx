"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaGithub, FaReddit, FaDiscord, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { scrollToElement } from "./Scroller";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "previouswork", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Sidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

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
  }, []);

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
              {/* Active indicator bar */}
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full transition-all duration-300
                  ${activeSection === id ? "bg-white opacity-100" : "opacity-0"}`}
              />
              {label}
            </button>
          ))}
        </nav>

        {/* Social icons */}
        <div className="mt-8 pt-6 border-t border-gray-800/60">
          <div className="flex flex-wrap gap-3">
            <Link
              href="https://github.com/kevinchendev1993"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </Link>
            <Link
              href="https://x.com/KevinChen1209"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white transition-colors"
              aria-label="X"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.579 2.25H9.08l4.265 5.636L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link
              href="https://wa.me/85293538727"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-400 transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={18} />
            </Link>
            <Link
              href="https://www.reddit.com/user/Tiny_Calendar_2518/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white transition-colors"
              aria-label="Reddit"
            >
              <FaReddit size={18} />
            </Link>
            <Link
              href="https://t.me/cupid040620"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white transition-colors"
              aria-label="Telegram"
            >
              <FaTelegram size={18} />
            </Link>
            <Link
              href="https://discord.com/users/kevinchen.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white transition-colors"
              aria-label="Discord"
            >
              <FaDiscord size={18} />
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
