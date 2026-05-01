import React from "react";

const interests = [
  { id: 1, icon: "🚀", title: "Innovation & Technology", description: "Constantly exploring emerging technologies like AI, blockchain, and quantum computing. Love attending tech conferences and hackathons to stay ahead of the curve." },
  { id: 2, icon: "📚", title: "Continuous Learning", description: "Avid reader of technical blogs, research papers, and books. Currently learning Rust and exploring WebAssembly for high-performance applications." },
  { id: 3, icon: "🎨", title: "Design & UX", description: "Passionate about creating beautiful, intuitive interfaces. Believe that great software is where engineering meets design." },
  { id: 4, icon: "🤝", title: "Mentorship", description: "Active mentor at coding bootcamps and online communities. Love helping aspiring developers navigate their tech careers." },
  { id: 5, icon: "🌍", title: "Open Source", description: "Regular contributor to open-source projects. Believe in giving back to the community that has given me so much." },
  { id: 6, icon: "⚡", title: "Performance Optimization", description: "Obsessed with making applications faster and more efficient. Love the challenge of optimizing code and infrastructure." }
];

const values = [
  { id: 1, title: "Quality Over Quantity", description: "I believe in writing clean, maintainable code that stands the test of time rather than rushing to ship features.", icon: "✨" },
  { id: 2, title: "Collaboration", description: "The best solutions come from diverse perspectives. I value teamwork, open communication, and shared learning.", icon: "🤜🤛" },
  { id: 3, title: "User-Centric Approach", description: "Every line of code I write is with the end user in mind. Their experience and satisfaction drive my decisions.", icon: "❤️" },
  { id: 4, title: "Continuous Growth", description: "Technology evolves rapidly, and so should we. I'm committed to lifelong learning and adaptation.", icon: "📈" }
];

const hobbies = [
  { id: 1, title: "Photography", icon: "📷", description: "Capturing moments and landscapes during travels" },
  { id: 2, title: "Hiking", icon: "🏔️", description: "Exploring nature trails and mountain peaks" },
  { id: 3, title: "Gaming", icon: "🎮", description: "Strategy games and indie titles" },
  { id: 4, title: "Coffee", icon: "☕", description: "Third-wave coffee enthusiast and home barista" },
  { id: 5, title: "Music", icon: "🎵", description: "Electronic music production in spare time" },
  { id: 6, title: "Cooking", icon: "🍳", description: "Experimenting with different cuisines" }
];

const LifeCulture: React.FC = () => {
  return (
    <div id="culture" className="relative min-h-screen py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Life & <span className="animated-gradient">Culture</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Beyond code — my passions, values, and what drives me
          </p>
        </div>

        {/* Interests */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">What I&apos;m Passionate About</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {interests.map((item) => (
              <div key={item.id} className="border border-white/10 rounded-lg p-6 blur-background2 hover:border-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Core Values</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div key={value.id} className="border border-white/10 rounded-lg p-8 blur-background2 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start">
                  <span className="text-4xl mr-4">{value.icon}</span>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">When I&apos;m Not Coding</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {hobbies.map((hobby) => (
              <div key={hobby.id} className="border border-white/10 rounded-lg p-6 text-center blur-background2 hover:border-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-3">{hobby.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">{hobby.title}</h4>
                <p className="text-gray-400 text-sm">{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Work Style */}
        <div className="border border-white/10 rounded-lg p-8 blur-background2">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">My Work Style</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
                <span className="mr-2">💼</span> Professional Approach
              </h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start"><span className="text-gray-500 mr-2 mt-1">▸</span><span><strong className="text-gray-200">Agile Mindset:</strong> Embrace change, iterate quickly, deliver value</span></li>
                <li className="flex items-start"><span className="text-gray-500 mr-2 mt-1">▸</span><span><strong className="text-gray-200">Clear Communication:</strong> Regular updates, transparent progress tracking</span></li>
                <li className="flex items-start"><span className="text-gray-500 mr-2 mt-1">▸</span><span><strong className="text-gray-200">Proactive Problem Solving:</strong> Anticipate issues before they arise</span></li>
                <li className="flex items-start"><span className="text-gray-500 mr-2 mt-1">▸</span><span><strong className="text-gray-200">Documentation:</strong> Believe in self-documenting code and clear READMEs</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
                <span className="mr-2">🎯</span> What I Look For
              </h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start"><span className="text-gray-500 mr-2 mt-1">▸</span><span><strong className="text-gray-200">Challenging Projects:</strong> Problems that push technical boundaries</span></li>
                <li className="flex items-start"><span className="text-gray-500 mr-2 mt-1">▸</span><span><strong className="text-gray-200">Growth Opportunities:</strong> Teams that invest in learning and development</span></li>
                <li className="flex items-start"><span className="text-gray-500 mr-2 mt-1">▸</span><span><strong className="text-gray-200">Impact:</strong> Work that makes a meaningful difference</span></li>
                <li className="flex items-start"><span className="text-gray-500 mr-2 mt-1">▸</span><span><strong className="text-gray-200">Culture:</strong> Collaborative, innovative, and inclusive environments</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-12 text-center">
          <div className="border border-white/10 rounded-lg p-8 blur-background2 max-w-3xl mx-auto">
            <p className="text-2xl text-gray-300 italic mb-4">
              &quot;Code is like humor. When you have to explain it, it&apos;s bad.&quot;
            </p>
            <p className="text-gray-500 font-semibold">— Cory House</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeCulture;
