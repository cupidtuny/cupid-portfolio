import React from "react";
import { FaGithub, FaLinkedin, FaDiscord, FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ContactCard: React.FC = () => {
  return (
    <div id="contact" className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Let&apos;s Connect! <span className="animated-gradient">✨</span>
      </h2>
      <div className="bg-transparent border border-purple-500/30 p-8 rounded-lg shadow-lg text-white w-full md:max-w-4xl mx-auto mt-8 cc-bg blur-background w-4/5">
        <div className="flex justify-between items-center flex-wrap gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Kevin Chen</h2>
            <p className="text-lg mb-4 text-gray-200">Senior Full-Stack Developer</p>
            <p className="text-gray-300">
              Passionate about building exceptional web experiences
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/kevinchendev1993"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-200 transition-transform hover:scale-110"
              aria-label="GitHub Profile"
            >
              <FaGithub size={44} />
            </a>
            <a
              href="https://t.me/cupid040620"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition-transform hover:scale-110"
              aria-label="Telegram"
            >
              <FaTelegram size={44} />
            </a>
            <a
              href="https://discord.com/users/kevinchen.dev"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition-transform hover:scale-110"
              aria-label="Discord"
            >
              <FaDiscord size={44} />
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
