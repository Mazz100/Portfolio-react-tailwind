import React from "react";
import crowdFundImage from "../assets/crowdfunding-product-page.png";
import tipCalculatorImage from "../assets/tip-calculator-app.png";
import restApiCountriesImage from "../assets/Restful-API-countries.png";
import clipBoardImage from "../assets/Clipboard-landing-page.png";

const Projects = () => {
  const projects = [
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
    },

    {
      screenshot: tipCalculatorImage,
      name: "Tip calculator app",
      description: `In this Frontend Mentor project, I efficiently managed state using the useContext hook, minimizing parent-to-child prop passing and reducing prop drilling. 
        This approach allowed for proper state storage, making it easy to modify and access states as needed.`,
      techUsed: {
        react: "React.js",
        scss: "SCSS",
        html: "HTML5",
      },
    },

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
        tailwind: "Tailwind CSS",
        html: "HTML5",
      },
    },

    {
      screenshot: clipBoardImage,
      name: "Clipboard landing page",
      description: `This landing page project by Frontend Mentor, showcases my use of both flex and grid layouts to achieve a well-structured design. 
      I ensured proper HTML tag usage for each piece of content, eliminating excessive tags and maintaining clean, semantic markup.`,
      techUsed: {
        react: "React.js",
        tailwind: "Tailwind CSS",
        html: "HTML5",
      },
    },
  ];

  return (
    <div>
      <h2>Projects</h2>

      {projects.map((project, idx) => (
        <div key={idx} className="max-w-[36rem]">
          <img src={project.screenshot} alt={`${project.name} screenshot`} />
          <h3>{project.name}</h3>
          <p>{project.description}</p>

          <ul>
            {Object.entries(project.techUsed).map(([key, value]) => (
              <li key={key}>{value}</li>
            ))}
          </ul>
        </div>
      ))}

      <div>
        <a href="#">More on GitHub</a>
      </div>
    </div>
  );
};

export default Projects;
