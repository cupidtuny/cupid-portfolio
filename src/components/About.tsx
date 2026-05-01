import React from "react";
import Image from "next/image";
import { FaCode, FaServer, FaCloud, FaBrain, FaCheck } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <div id="about" className="relative flex items-center justify-center min-h-screen py-20">
      <div className="text-white px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-16">
          About <span className="animated-gradient">Kevin Chen</span>
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
            <h3 className="text-2xl font-semibold text-white mb-6">Professional Summary</h3>
            <div className="space-y-4">
              <p className="text-gray-200 text-lg leading-relaxed">
                Hello! I&apos;m Kevin Chen, a passionate full-stack developer with 8+ years of experience 
                building innovative web applications and leading development teams. I specialize in creating 
                scalable, user-centric solutions that drive business growth and enhance user experiences.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed">
                My expertise spans across modern JavaScript frameworks, cloud infrastructure, and AI integration. 
                I&apos;m committed to writing clean, maintainable code and following industry best practices. 
                I thrive in collaborative environments where I can mentor junior developers and contribute to 
                meaningful projects.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed">
                Beyond coding, I&apos;m passionate about staying current with emerging technologies and 
                sharing knowledge with the developer community. Let&apos;s build something amazing together!
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-transparent rounded-lg shadow-lg px-6 py-8 border blur-background2">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Technical Expertise
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-300 flex items-center">
                <FaCode className="mr-2" /> Frontend Development
              </h4>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-start">
                  <FaCheck className="mr-2 mt-1 text-xs flex-shrink-0" />
                  <span>React.js, Next.js, Vue.js, TypeScript</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="mr-2 mt-1 text-xs flex-shrink-0" />
                  <span>Tailwind CSS, Material-UI, Styled Components</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="mr-2 mt-1 text-xs flex-shrink-0" />
                  <span>Redux, Context API, State Management</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="mr-2 mt-1 text-xs flex-shrink-0" />
                  <span>Responsive Design, Accessibility (WCAG)</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-300 flex items-center">
                <FaServer className="mr-2" /> Backend Development
              </h4>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-start">
                  <FaCheck className="mr-2 mt-1 text-xs flex-shrink-0" />
                  <span>Node.js, Express.js, NestJS</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="mr-2 mt-1 text-xs flex-shrink-0" />
                  <span>Python, Django, Flask, FastAPI</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="mr-2 mt-1 text-xs flex-shrink-0" />
                  <span>RESTful APIs, GraphQL, WebSockets</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="mr-2 mt-1 text-xs flex-shrink-0" />
                  <span>PostgreSQL, MongoDB, Redis</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-300 flex items-center">
                <FaCloud className="mr-2" /> Cloud & DevOps
              </h4>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-start">
                  <FaCheck className="mr-2 mt-1 text-xs flex-shrink-0" />
                  <span>AWS (EC2, S3, Lambda, RDS)</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="mr-2 mt-1 text-xs flex-shrink-0" />
                  <span>Docker, Kubernetes, CI/CD</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="mr-2 mt-1 text-xs flex-shrink-0" />
                  <span>GitHub Actions, Jenkins</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="mr-2 mt-1 text-xs flex-shrink-0" />
                  <span>Monitoring: DataDog, CloudWatch</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700">
            <h4 className="text-xl font-semibold text-gray-300 mb-4 flex items-center justify-center">
              <FaBrain className="mr-2" /> AI & Machine Learning
            </h4>
            <div className="text-gray-200 text-center space-y-2">
              <p className="text-gray-200">
                <span className="mr-4">OpenAI GPT-4, ChatGPT API Integration</span>
                <span className="mr-4">LangChain, Vector Databases</span>
              </p>
              <p className="text-gray-200">
                <span className="mr-4">TensorFlow, PyTorch</span>
                <span className="mr-4">Hugging Face Transformers</span>
                <span>RAG Systems</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
