import React from "react";
import * as Separator from "@radix-ui/react-separator";
import crowdFundImage from "../assets/crowdfunding-product-page.png";
import tipCalculatorImage from "../assets/tip-calculator-app.png";
import restApiCountriesImage from "../assets/Restful-API-countries.png";
import clipBoardImage from "../assets/Clipboard-landing-page.png";

const Projects = () => {
  const projects = [
    {
      screenshot: restApiCountriesImage,
      name: "Restful API countries",
      description: `In this Frontend Mentor project, I utilized APIs and asynchronous functions to fetch and display JSON data dynamically. 
      I incorporated React-Router to enable navigation to each country's details and manage 404 error pages. 
      By using the useParams hook, I retrieved individual country IDs, and the useSearchParams hook allowed for storing user values in the URL, facilitating link sharing and bookmarking.
      Additionally, I employed the Radix UI Select component for its accessibility and customization options, which helped me achieve the desired functionality and appearance.`,
      techUsed: {
        react: "React.js",
        reactRouter: "React Router",
        radixUi: "Radix UI",
        tailwind: "Tailwind",
        html: "HTML5",
      },

      code: "https://github.com/Mazz100/REST-countries-API",
      url: "https://rest-countries-api-iota-eight.vercel.app/",
    },

    {
      screenshot: crowdFundImage,
      name: "Crowdfunding Page",
      description:
        "In this project by Frotend Mentor, I maintained the state management with useContext hook and minimized the parent to child prop passing and prop drilling, properly storing states and easily modify and access it",
      techUsed: {
        react: "React.js",
        scss: "SCSS",
        html: "HTML5",
      },

      code: "https://github.com/Mazz100/Crowdfunding-Product-Page",
      url: "https://crowdfunding-product-page-brown.vercel.app/",
    },

    {
      screenshot: tipCalculatorImage,
      name: "Tip calculator app",
      description: `In this Frontend Mentor project, I effeciently utilized the useState and useEffect hook to dynamically calculate tips and manage user input. Furthermore, resetting the calculator for new input`,
      techUsed: {
        react: "React.js",
        scss: "SCSS",
        html: "HTML5",
      },

      code: "https://github.com/Mazz100/Tip-Calculator-App",
      url: "https://tip-calculator-app-one-blue.vercel.app/",
    },

    {
      screenshot: clipBoardImage,
      name: "Clipboard landing page",
      description: `This landing page project by Frontend Mentor, showcases my use of both flex and grid layouts to achieve a well-structured design. 
      I ensured proper HTML tag usage for each piece of content, eliminating excessive tags and maintaining clean, semantic markup.`,
      techUsed: {
        tailwind: "Tailwind",
        html: "HTML5",
      },

      code: "https://github.com/Mazz100/Clipboard-landing-page",
      url: "https://mazz100.github.io/Clipboard-landing-page/",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center p-12">
        <h2 className="mb-10 text-center text-5xl" id="Projects">
          Projects
        </h2>
        {projects.map((project) => (
          <div
            key={project.name}
            className="group mb-10 flex flex-col items-center overflow-hidden rounded-lg bg-secondary-color desktop:grid desktop:grid-cols-2 desktop:grid-rows-1 desktop:gap-8"
          >
            <img
              className="h-full object-cover transition-transform duration-200 motion-reduce:group-hover:scale-100 desktop:group-hover:scale-105"
              src={project.screenshot}
              alt={`${project.name} screenshot`}
            />

            <div className="p-6">
              <h3 className="my-4 text-center text-lg">{project.name}</h3>
              <p className="mb-4 opacity-70">{project.description}</p>

              <ul className="flex flex-wrap items-center gap-4 text-sm">
                {Object.entries(project.techUsed).map(([key, value]) => (
                  <li key={key} className="rounded-md bg-body-bg-color p-2">
                    {value}
                  </li>
                ))}
              </ul>

              <Separator.Root
                className="mt-4 bg-body-bg-color data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full"
                orientation="horizontal"
              />

              <a
                href={project.url}
                type="b"
                target="_blank"
                className="my-4 mr-4 inline-flex items-center underline underline-offset-8 transition-colors hover:text-states-color"
              >
                Project Live Demo
                <svg
                  fill="none"
                  height="48"
                  viewBox="0 0 48 48"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m32 27v5h-16v-16h5m0 11 11-11m0 0v6m0-6h-6"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </a>

              <a
                href={project.code}
                target="_blank"
                className="my-4 inline-flex items-center underline underline-offset-8 transition-colors hover:text-states-color"
              >
                Project Code
                <svg
                  fill="none"
                  height="48"
                  viewBox="0 0 48 48"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m32 27v5h-16v-16h5m0 11 11-11m0 0v6m0-6h-6"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}

        <a
          href="https://github.com/Mazz100"
          className="col-span-2 place-self-center rounded-md p-3 underline underline-offset-8 transition-colors hover:text-states-color"
        >
          More on GitHub
        </a>
      </div>
    </>
  );
};

export default Projects;
