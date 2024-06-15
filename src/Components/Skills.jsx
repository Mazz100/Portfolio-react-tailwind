import React from "react";
import htmlIcon from "../assets/html-5.svg";
import cssIcon from "../assets/css-3.svg";
import sassIcon from "../assets/sass.svg";
import tailwindIcon from "../assets/tailwind-css.svg";
import jsIcon from "../assets/javascript-js.svg";
import nodeJsIcon from "../assets/node-js.svg";
import reactJsIcon from "../assets/reactjs.svg";
import radixIcon from "../assets/brand-radix-ui.svg";
import reactRouterIcon from "../assets/react-router.svg";

const Skills = ({ skillRef }) => {
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
    {
      icon: reactRouterIcon,
      name: "React Router",
    },
    {
      icon: radixIcon,
      name: "Radix UI",
    },
  ];

  return (
    <div className="flex flex-col items-center p-12">
      <h2 className="mb-10 text-5xl" id="Skills">
        Tech Skills
      </h2>
      <ul className="flex flex-col items-center gap-8 desktop:grid desktop:grid-cols-4 desktop:place-items-start tablet:grid tablet:auto-rows-auto tablet:grid-cols-2 tablet:place-content-center tablet:gap-4">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="flex h-full w-full flex-col items-center rounded-md bg-secondary-color p-10 text-center transition-transform motion-reduce:hover:scale-100 desktop:hover:scale-105"
          >
            <img
              className="h-full w-full"
              src={skill.icon}
              alt={`${skill.name} icon`}
            />
            <span className="my-3 text-2xl">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
