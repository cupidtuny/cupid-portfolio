import React from "react";
import Link from "next/link";
import { FaGithub, FaHeart, FaReddit } from "react-icons/fa";
import { ButtonLink } from "./Scroller";
import { SiGmail } from "react-icons/si";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-12 mt-20 footer-b">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-3xl font-bold mb-4">
              <span className="animated-gradient">Kevin Chen</span>
            </div>
            <p className="text-gray-400 mb-4">
              Senior Full-Stack Developer passionate about building exceptional web experiences and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com/kevinchendev1993" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                <FaGithub size={24} />
              </Link>
              <Link href="https://x.com/KevinChen1209" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="X">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.579 2.25H9.08l4.265 5.636L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link href="https://www.reddit.com/user/Tiny_Calendar_2518/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Reddit">
                <FaReddit size={24} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-300">Quick Links</h3>
            <ul className="space-y-3">
              {["Home|hero","About|about","Experience|experience","Projects|previouswork","Contact|contact"].map((item) => {
                const [text, id] = item.split("|");
                return (
                  <li key={id}>
                    <ButtonLink className="text-gray-400 hover:text-white transition-colors" buttonText={text} elementId={id} />
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-300">Get In Touch</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="mailto:kevinchen.dev1993@gmail.com" className="hover:text-white transition-colors">kevinchen.dev1993@gmail.com</a></li>
              <li><a href="https://t.me/cupid040620" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Telegram: @cupid040620</a></li>
              <li><a href="https://discord.com/users/kevinchen.dev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Discord: kevinchen.dev</a></li>
              <li>Hong Kong</li>
              <li>
                <span className="inline-flex items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                  Available for opportunities
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p className="mb-4 md:mb-0">© {currentYear} Kevin Chen. All rights reserved.</p>
            <p className="flex items-center">
              Made with <FaHeart className="text-gray-400 mx-2" size={12} /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
