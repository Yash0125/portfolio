import React from "react";
import html from "../image/html.png";
import css from "../image/css.png";
import javascript from "../image/javascript.png";
import react from "../image/react.png";
import github from "../image/github.png";
import tailwind from "../image/tailwind.png";

const Skills = () => {
  const skill = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React.js",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 7,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDNf_xyfNDyt3NEy0S-ETw_2x6qhLwpqax89nd7hgqoA&s",
      title: "Material Ui",
      style: "shadow-blue-400",
    },

    {
      id: 8,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div
      name="skills"
      className="w-full bg-gradient-to-b from-gray-800 h-screen mt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skill.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
