import React from 'react';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <div className="text-white px-6 md:px-12">
        <h2 className="text-center text-xl md:text-3xl font-bold mb-20 mt-0">Hi, my name is Andre</h2>

        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <div className="bg-transparent rounded-lg shadow-lg px-5 py-6 sm:px-6 my-10 w-full max-w-3xl mx-auto border blur-background2 mt-0">
            <h2 className="text-2xl font-semibold text-white mb-6">About Me</h2>
            <div className="space-y-6">
              <p className="text-gray-200">
                Hello, I am Andre and I have been working as a software developer for 6+ years while working or managing several websites and AI products.
                My goal is to start an amazing career where I can contribute to the best of my skills and efforts for the growth of the organization and the satisfaction of clients.
                I work efficiently, ensuring my code is clean, W3C valid, semantic, and easy to maintain. Let&apos;s collaborate and create something amazing together!
              </p>
              <h3 className="text-xl font-semibold text-white">Languages & Frameworks</h3>
              <div className="flex items-start flex-col">
                <div className='text-left'>✅ Some of the skills I use now on the front-end:</div>
                <ul className='space-y-2 ml-2 my-2'>
                  <li>✔ Language: JavaScript (ES5/ES6, Babel), Typescript, HTML5, CSS3 with SCSS.</li>
                  <li>✔ Frameworks: ReactJS(Gatsby/NextJS), Vue2/Vue3, Redux, Vuex, Nuxt;</li>
                  <li>✔ UI CSS Frameworks: Tailwind, React Suite, Material UI, Bootstrap, Shadcn, Vuetify;</li>
                  <li>✔ Cloud: AWS, Firebase</li>
                  <li>✔ Design: Object-Oriented UI/UX Design, responsive web, …</li>
                  <li>✔ Others: Axios, AJAX, Webpack, npm, yarn, …</li>
                </ul>
                <div className='text-left'>✅ Some of the skills I use now on the back-end:</div>
                <ul className='space-y-2 ml-2 my-2'>
                  <li>✔ Language: Nodejs, PHP, Python</li>
                  <li>✔ Database: MongoDB, SQL, Firebase/Firestore</li>
                  <li>✔ Cloud hosting: AWS, Azure, Google Cloud Platform</li>
                </ul>
                <div className='text-left'>✅ AI technologies I work with:</div>
                <ul className='space-y-2 ml-2 my-2'>
                  <li>✔ GenAI: ChatGPT, GPT-4, DALL-E, LLAMA3, FineTuning</li>
                  <li>✔ Frameworks: LangChain</li>
                  <li>✔ Libraries: Transformers, Hugging Face</li>
                  <li>✔ Tools: Auto-GPT, OpenAI API</li>
                </ul>
                {/* <button className="mt-3 bg-transparent border hover:bg-white hover:text-black font-bold py-2 px-4 rounded hover:border-none">
                  <Link href='https://resume.io/r/kpSyznSzv' target='_blank'>
                    Resume
                  </Link>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
