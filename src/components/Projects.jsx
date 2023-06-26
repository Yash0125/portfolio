import React from "react";
import project1 from "../image/project1.png";
import project2 from "../image/project2.png";
import project3 from "../image/project3.png";
import project4 from "../image/project4.png";
import project5 from "../image/project5.png";
import project6 from "../image/project6.png";
import project7 from "../image/project7.png";
import project8 from "../image/project8.png";
import project9 from "../image/project9.png";
import project10 from "../image/project10.png";
import project11 from "../image/project11.png";

const Projects = () => {
  const project = [
    {
      id: 1,
      title: "CloudNET",
      techStack: "HTML,CSS,Javascript,React.js",
      src: project1,
      liveDemo: "https://cloud-net.netlify.app/",
      sourceCode: "https://github.com/Yash0125/cloudnet",
    },
    {
      id: 2,
      src: project2,
      title: "YourNotes",
      techStack: "HTML,CSS,Javascript,React.js",
      liveDemo: "https://your-notes-note-app.netlify.app/",
      sourceCode: "https://github.com/Yash0125/your-notes",
    },
    {
      id: 3,
      title: "Emart",
      src: project3,
      techStack: "HTML,CSS,Javascript,React.js",
      liveDemo: "https://emart-e-commerce-website.netlify.app/",
      sourceCode: "https://github.com/Yash0125/emart",
    },
    {
      id: 4,
      src: project4,
      title: "WeatherLens",
      techStack: "HTML,CSS,Javascript",
      liveDemo: "https://weather-lens-weather-app.netlify.app/",
      sourceCode: "https://github.com/Yash0125/weather-lens",
    },
    {
      id: 5,
      src: project5,
      title: "SpeedNews",
      techStack: "HTML,CSS,Javascript,React.js",
      liveDemo: "https://github.com/Yash0125/speednews",
      sourceCode: "https://github.com/Yash0125/speednews",
    },
    {
      id: 6,
      src: project6,
      title: "Pokedex",
      techStack: "HTML,CSS,Javascript,React.js",
      liveDemo: "https://pokedex-react-js-app.netlify.app/",
      sourceCode: "https://github.com/Yash0125/pokedex",
    },
    {
      id: 7,
      src: project7,
      title: "Quiz App",
      techStack: "HTML,CSS,Javascript,React.js",
      liveDemo: "https://quiz-app-frontend-dev.netlify.app/",
      sourceCode: "https://github.com/Yash0125/quiz-app",
    },
    {
      id: 8,
      src: project8,
      title: "Typing Test",
      techStack: "HTML,CSS,Javascript,React.js",
      liveDemo: "https://typing-test-in-react.netlify.app/",
      sourceCode: "https://github.com/Yash0125/typing-test",
    },
    {
      id: 9,
      src: project9,
      title: "EMI Calculator",
      techStack: "HTML,CSS,Javascript,React.js",
      liveDemo: "https://emi-calculator-for-loan-using-react.netlify.app/",
      sourceCode: "https://github.com/Yash0125/emi-calculator",
    },
    {
      id: 10,
      src: project10,
      title: "Image Slider",
      techStack: "HTML,CSS,Javascript,React.js",
      liveDemo: "https://image-slider-reactjs-assignment.netlify.app/",
      sourceCode: "https://github.com/Yash0125/image-slider",
    },
    {
      id: 11,
      src: project11,
      title: "Analog Clock",
      techStack: "HTML,CSS,Javascript",
      liveDemo: "https://analog-clock-javascript-css.netlify.app/",
      sourceCode: "https://github.com/Yash0125/clock",
    },
  ];
  return (
    <div
      name="projects"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white xs:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {project.map(
            ({ id, title, techStack, src, liveDemo, sourceCode }) => (
              <div key={id} className="shadow shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <p className="text-2xl ml-4 mt-4">
                  Title :{" "}
                  <span className="text-2xl text-cyan-600">{title}</span>
                </p>
                <p className="text-xl ml-4 mt-4">
                  TechStack :{" "}
                  <span className="text-md text-cyan-600">{techStack}</span>
                </p>
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => (window.location.href = `${liveDemo}`)}
                    className="bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md  w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Live Demo
                  </button>
                  <button
                    onClick={() => (window.location.href = `${sourceCode}`)}
                    className="border-2 border-cyan-600 rounded-md  w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Source Code
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
