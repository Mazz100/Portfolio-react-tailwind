import React from "react";
import htmlIcon from "../assets/html-5.svg";
import cssIcon from "../assets/css-3.svg";
import sassIcon from "../assets/sass.svg";
import tailwindIcon from "../assets/tailwind-css.svg";
import jsIcon from "../assets/javascript-js.svg";
import nodeJsIcon from "../assets/node-js.svg";
import reactJsIcon from "../assets/reactjs.svg";

const Skills = () => {
  const skills = [
    {
      icon: htmlIcon,
      name: "HTML",
    },
    {
      icon: cssIcon,
      name: "CSS",
    },
    {
      icon: sassIcon,
      name: "Sass",
    },
    {
      icon: tailwindIcon,
      name: "Tailwind CSS",
    },
    {
      icon: jsIcon,
      name: "JavaScript",
    },
    {
      icon: nodeJsIcon,
      alt: "Node JS",
      name: "Node JS",
    },
    {
      icon: reactJsIcon,
      name: "React JS",
    },
  ];

  return (
    <div className="flex flex-col items-center mb-6">
      <h2 className="text-4xl my-6">Tech Skills</h2>
      <ul className="flex flex-col items-center">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="flex flex-col bg-secondary-color p-4 rounded-md mb-6 last-of-type:mb-0 w-3/4"
          >
            <img src={skill.icon} alt={`${skill.name} icon`} />
            <span className="self-center text-lg my-3">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
