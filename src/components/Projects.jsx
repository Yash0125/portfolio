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
import project12 from "../image/project12.png";

const Projects = () => {
  const project = [
    {
      id: 1,
      title: "CloudNET",
      techStack: "HTML,CSS,Javascript,React.js",
      description:`Your go-to video library app, featuring seamless playback, intuitive search, and a handy "watch later" function. Crafted with 93% accessibility.`,
      src: project1,
      liveDemo: "https://cloud-net.netlify.app/",
      sourceCode: "https://github.com/Yash0125/cloudnet",
    },
    {
      id: 2,
      src: project2,
      title: "YourNotes",
      techStack: "HTML,CSS,Javascript,React.js",
      description:"An elegant note-taking app with seamless add, save, and search functionalities. It offers a unique toggle mode and a responsive UI crafted with vanilla CSS. ",
      liveDemo: "https://your-notes-note-app.netlify.app/",
      sourceCode: "https://github.com/Yash0125/your-notes",
    },
    {
      id: 3,
      title: "Emart",
      src: project3,
      techStack: "HTML,CSS,Javascript,React.js",
      description:"Presented a dynamic product listing with efficient cart management. Leveraged React hooks like UseContext and UseReducer for seamless global state management.",
      liveDemo: "https://emart-e-commerce-website.netlify.app/",
      sourceCode: "https://github.com/Yash0125/emart",
    },
    {
      id: 4,
      src: project4,
      title: "WeatherLens",
      techStack: "HTML,CSS,Javascript",
      description:"Experience real-time weather updates including temperature, wind speed, and humidity. Effortlessly search for real-time data in any city. ",
      liveDemo: "https://weather-lens-weather-app.netlify.app/",
      sourceCode: "https://github.com/Yash0125/weather-lens",
    },
    {
      id: 5,
      src: project5,
      title: "SpeedNews",
      techStack: "HTML,CSS,Javascript,React.js",
      description:"Enjoy customized, up-to-the-minute news spanning business, sports, and tech. Infinite scroll adds seamless browsing, while Bootstrap ensures responsive design. ",
      liveDemo: "https://github.com/Yash0125/speednews",
      sourceCode: "https://github.com/Yash0125/speednews",
    },
    {
      id: 6,
      src: project6,
      title: "Pokedex",
      techStack: "HTML,CSS,Javascript,React.js",
      description:"Explore a comprehensive Pokemon list, with bookmarking and search functionalities. Effortlessly manage your favorites, remove them, and even filter by strength.",
      liveDemo: "https://pokedex-react-js-app.netlify.app/",
      sourceCode: "https://github.com/Yash0125/pokedex",
    },
    {
      id: 7,
      src: project7,
      title: "Quiz App",
      techStack: "HTML,CSS,Javascript,React.js",
      description:"Test your knowledge in a one-minute quiz. Race against the timer, answer questions, and receive a score out of 5 along with your completion time.",
      liveDemo: "https://quiz-app-frontend-dev.netlify.app/",
      sourceCode: "https://github.com/Yash0125/quiz-app",
    },
    {
      id: 8,
      src: project8,
      title: "Typing Test",
      techStack: "HTML,CSS,Javascript,React.js",
      description:" Put your typing skills to the test with a 5-minute paragraph challenge. Receive an accuracy score and words per minute result based on your performance.",
      liveDemo: "https://typing-test-in-react.netlify.app/",
      sourceCode: "https://github.com/Yash0125/typing-test",
    },
    {
      id: 9,
      src: project9,
      title: "EMI Calculator",
      techStack: "HTML,CSS,Javascript,React.js",
      description:"Easily determine your repayment amount with this app. Input the loan amount, interest rate, and tenure, and instantly receive the calculated EMI value you need to pay.",
      liveDemo: "https://emi-calculator-for-loan-using-react.netlify.app/",
      sourceCode: "https://github.com/Yash0125/emi-calculator",
    },
    {
      id: 10,
      src: project10,
      title: "Image Slider",
      techStack: "HTML,CSS,Javascript,React.js",
      description:"Navigate through images effortlessly using previous and next buttons, or engage the slideshow mode for a hands-free experience.",
      liveDemo: "https://image-slider-reactjs-assignment.netlify.app/",
      sourceCode: "https://github.com/Yash0125/image-slider",
    },
    {
      id: 11,
      src: project11,
      title: "Analog Clock",
      techStack: "HTML,CSS,Javascript",
      description:"Enjoy the simplicity of a classic analog watch on your device. This app provides you with the time in the traditional analog format.",
      liveDemo: "https://analog-clock-javascript-css.netlify.app/",
      sourceCode: "https://github.com/Yash0125/clock",
    },
    {
      id: 12,
      src: project12,
      title: "TicTacToe",
      techStack: "React",
      description:"Discover our React-powered Tic-Tac-Toe app! Play classic X and O with a twist – take on our advanced AI bot in this single-player adventure.",
      liveDemo: "https://tic-tac-toe-react-js-hooks.netlify.app/",
      sourceCode: "https://github.com/Yash0125/tic-tac-toe",
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
            ({ id, title, techStack, src, liveDemo,description, sourceCode }) => (
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
                <p className="text-xl ml-4 mt-4">
                  Description :{" "}
                  <span className="text-sm text-cyan-600">{description}</span>
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
