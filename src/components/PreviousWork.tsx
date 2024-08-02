const projects = [
  {
    title: "Hypotenuse AI",
    description:
      "Hypotenuse.ai is an AI-powered platform designed to generate high-quality content for e-commerce brands and marketers. It offers tools for creating SEO-optimized blog articles, product descriptions, social media posts, ad copy, and more. The platform supports bulk content generation and integrates with CMS systems like Shopify and WordPress.",
    imageUrl: "/projects/ai.png",
    caseStudyUrl: "#",
  },
  {
    title: "American Express",
    description:
      "Offers small business loans and financial services, providing flexible lines of credit and simplified cash flow management tools for small businesses.",
    imageUrl: "/projects/americanexpress.png",
    caseStudyUrl: "#",
  },
  {
    title: "Future Learn",
    description:
      " An online learning platform offering courses, programs, and degrees from leading universities and institutions worldwide. It focuses on a wide range of subjects.",
    imageUrl: "/projects/futurelearn.png",
    caseStudyUrl: "#",
  },
  {
    title: "Bioweb",
    description:
      "comprehensive time tracking and attendance solution SaaS product. The primary objective was to provide employers with accurate and reliable tracking of their employees' work hours, locations, and overall working activities. The solution aims to streamline time management, improve productivity, and ensure transparency in employee activities.",
    imageUrl: "/projects/Screenshot_2.png",
    caseStudyUrl: "#",
  },
  {
    title: "CerasHealth",
    description:
      "Navigate your patient care journey with our five seamless AI-powered platform components utilizing predictive analytics and outcome benchmarks..",
    imageUrl: "/projects/ceras.png",
    caseStudyUrl: "#",
  },
];

const PreviousWork: React.FC = () => {
  return (
    <div id="previouswork" className="bg-transparent text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-center mb-20">
          Previous Projects
        </h2>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-[#0a0a0a]"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={project.imageUrl}
                  alt={project.title}
                />
              </div>
              <div className="flex-1 bg-transparent p-6 flex flex-col justify-between pw-bg">
                <div className="flex-1">
                  {project.caseStudyUrl !== "#" ? (
                    <a
                      href={project.caseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="block mt-2">
                        <p className="text-xl font-semibold text-gray-300">
                          {project.title}
                        </p>
                        <p className="mt-3 text-base text-gray-300">
                          {project.description}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <a>
                      <div className="block mt-2">
                        <p className="text-xl font-semibold text-gray-300">
                          {project.title}
                        </p>
                        <p className="mt-3 text-base text-gray-300">
                          {project.description}
                        </p>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviousWork;
