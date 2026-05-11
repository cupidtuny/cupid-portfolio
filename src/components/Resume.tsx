import React from "react";
import { FaDownload, FaFilePdf, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Resume: React.FC = () => {
  return (
    <div id="resume" className="relative min-h-screen py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Resume Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="animated-gradient">Resume</span> & Contact
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Download my resume or get in touch to discuss opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Resume Download Card */}
          <div className="bg-transparent border border-purple-500/30 rounded-lg p-8 blur-background2 shadow-xl hover:border-purple-500/60 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="mr-3">📄</span>
              Download Resume
            </h3>
            
            <p className="text-gray-200 mb-8">
              Get a comprehensive overview of my skills, experience, and achievements in different formats.
            </p>

            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group">
                <FaFilePdf className="mr-3 text-2xl group-hover:animate-bounce" />
                <span>Download PDF Resume</span>
                <FaDownload className="ml-3 group-hover:translate-y-1 transition-transform" />
              </button>

            </div>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Stats:</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-purple-900/30 rounded-lg p-4">
                  <p className="text-3xl font-bold text-purple-300">8+</p>
                  <p className="text-gray-300 text-sm">Years Experience</p>
                </div>
                <div className="bg-purple-900/30 rounded-lg p-4">
                  <p className="text-3xl font-bold text-purple-300">50+</p>
                  <p className="text-gray-300 text-sm">Projects Completed</p>
                </div>
                <div className="bg-purple-900/30 rounded-lg p-4">
                  <p className="text-3xl font-bold text-purple-300">15+</p>
                  <p className="text-gray-300 text-sm">Technologies</p>
                </div>
                <div className="bg-purple-900/30 rounded-lg p-4">
                  <p className="text-3xl font-bold text-purple-300">10+</p>
                  <p className="text-gray-300 text-sm">Team Members Led</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-transparent border border-purple-500/30 rounded-lg p-8 blur-background2 shadow-xl hover:border-purple-500/60 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="mr-3">📧</span>
              Get In Touch
            </h3>
            
            <p className="text-gray-200 mb-8">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <a
                href="mailto:kevin.chen@email.com"
                className="flex items-center p-4 bg-purple-900/30 rounded-lg hover:bg-purple-800/50 transition-all duration-300 group"
              >
                <div className="bg-purple-600 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                  <SiGmail className="text-2xl text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-300 text-sm">kevinchen.dev1993@email.com</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/kevin-chen-3b479212/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-purple-900/30 rounded-lg hover:bg-purple-800/50 transition-all duration-300 group"
              >
                <div className="bg-blue-700 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                  <FaLinkedin className="text-2xl text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">LinkedIn</p>
                  <p className="text-gray-300 text-sm">kevin-chen-3b479212</p>
                </div>
              </a>

              {/* X */}
              <a
                href="https://x.com/KevinChen1209"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-purple-900/30 rounded-lg hover:bg-purple-800/50 transition-all duration-300 group"
              >
                <div className="bg-gray-900 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.579 2.25H9.08l4.265 5.636L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">X (Twitter)</p>
                  <p className="text-gray-300 text-sm">@KevinChen1209</p>
                </div>
              </a>

            </div>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-4">Availability:</h4>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <p className="text-gray-200">
                  Open to full-time opportunities and freelance projects
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 rounded-lg p-8 blur-background2">
          <h3 className="text-2xl font-bold text-white mb-4">
            Let&apos;s Build Something Amazing Together
          </h3>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Whether you have a project in mind, need a consultation, or just want to connect, 
            I&apos;d love to hear from you. Let&apos;s create something extraordinary!
          </p>
          <a
            href="mailto:kevinchen.dev1993@email.com"
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Send Me a Message
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
