"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ButtonLink } from "./Scroller";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Navbar: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed w-full bg-transparent z-50 mnhdr h-auto transition-all ${
        scrolling ? "blur-background" : ""
      } ${mobileMenuOpen ? "h-24 blur-background" : ""}`}
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-semibold text-gray-800 text-white"
        >
          Kevin Chen
        </Link>
        <div className="hidden md:flex space-x-6">
          <ButtonLink
            className="text-lg font-medium text-gray-800 text-white hover:text-gray-300"
            buttonText="Home"
            elementId="hero"
          />
          <ButtonLink
            className="text-lg font-medium text-gray-800 text-white hover:text-gray-300"
            buttonText="About"
            elementId="about"
          />
          <ButtonLink
            className="text-lg font-medium text-gray-800 text-white hover:text-gray-300"
            buttonText="Experience"
            elementId="experience"
          />
          <ButtonLink
            className="text-lg font-medium text-gray-800 text-white hover:text-gray-300"
            buttonText="Projects"
            elementId="previouswork"
          />
          <ButtonLink
            className="text-lg font-medium text-gray-800 text-white hover:text-gray-300"
            buttonText="Contact"
            elementId="contact"
          />
        </div>
        <div className="flex space-x-4">
          <button className="md:hidden" onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6 text-gray-800 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <Link
            href="https://www.linkedin.com/in/kevin-chen-3b479212/"
            target="_blank"
            className="hidden md:flex items-center hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} />
          </Link>
          <Link
            href="https://x.com/KevinChen1209"
            target="_blank"
            className="hidden md:flex items-center hover:text-purple-400 transition-colors"
            aria-label="X"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.579 2.25H9.08l4.265 5.636L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>
          <Link
            href="mailto:kevinchen.dev1993@gmail.com"
            target="_blank"
            className="hidden md:flex items-center hover:text-purple-400 transition-colors"
            aria-label="Email"
          >
            <SiGmail size={30} />
          </Link>
        </div>
      </nav>
      <div
        className={`md:hidden ${
          mobileMenuOpen ? "flex" : "hidden"
        } justify-between mt-4 mb-6 ml-5`}
      >
        <div className="flex flex-col space-y-4">
          <ButtonLink
            className="text-left text-lg font-medium text-gray-800 text-white hover:text-gray-200 hover:text-gray-400"
            buttonText="Home"
            elementId="hero"
          />
          <ButtonLink
            className="text-left text-lg font-medium text-gray-800 text-white hover:text-gray-200 hover:text-gray-400"
            buttonText="About"
            elementId="about"
          />
          <ButtonLink
            className="text-left text-lg font-medium text-gray-800 text-white hover:text-gray-200 hover:text-gray-400"
            buttonText="Experience"
            elementId="experience"
          />
          <ButtonLink
            className="text-left text-lg font-medium text-gray-800 text-white hover:text-gray-200 hover:text-gray-400"
            buttonText="Projects"
            elementId="previouswork"
          />
          <ButtonLink
            className="text-left text-lg font-medium text-gray-800 text-white hover:text-gray-200 hover:text-gray-400"
            buttonText="Contact"
            elementId="contact"
          />
        </div>
        <div className="flex items-center mt-20 mr-4 space-x-4">
          <Link href="https://www.linkedin.com/in/kevin-chen-3b479212/" target="_blank" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
            <FaLinkedin size={30} />
          </Link>
          <Link href="https://x.com/KevinChen1209" target="_blank" aria-label="X" className="hover:text-purple-400 transition-colors">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.579 2.25H9.08l4.265 5.636L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>
          <Link href="mailto:kevinchen.dev1993@gmail.com" target="_blank" aria-label="Email" className="hover:text-purple-400 transition-colors">
            <SiGmail size={30} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
