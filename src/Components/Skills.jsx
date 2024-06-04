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
      alt: "HTML",
      name: "HTML",
    },
    {
      icon: cssIcon,
      alt: "CSS",
      name: "CSS",
    },
    {
      icon: sassIcon,
      alt: "Sass",
      name: "Sass",
    },
    {
      icon: tailwindIcon,
      alt: "Tailwind CSS",
      name: "Tailwind CSS",
    },
    {
      icon: jsIcon,
      alt: "JavaScript",
      name: "JavaScript",
    },
    {
      icon: nodeJsIcon,
      alt: "Node JS",
      name: "Node JS",
    },
    {
      icon: reactJsIcon,
      alt: "React JS",
      name: "React JS",
    },
  ];

  return (
    <div>
      <h2>Tech Skills</h2>
      <ul>
        {skills.map((skill, idx) => (
          <li key={skill.name}>
            <img src={skill.icon} alt={skill.alt} />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
