import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-50">
            About
          </p>
        </div>
        <p className="text-xl mt-15">
          I'm a web developer.As previously stated, I completed five projects:
          four in React and one in JavaScript. I made an e-commerce website, a
          video library app, a weather app, a news app, and a note app. In that
          project, I used context-api, fetch API, and other libraries like
          react-router-dom, react-icons, react-scroll, etc.I utilised the
          Material Ui and Bootstrap CSS libraries.
        </p>
        <br />
        <p className="text-xl">
          Ability to create innovative, creative, & interactive web designs to
          boost customer engagement. Sound knowledge in HTML5, CSS , Javascript,
          React.js. Build reusable code for future use while optimising web
          performance.constantly open to learning new things
        </p>
      </div>
    </div>
  );
};

export default About;
