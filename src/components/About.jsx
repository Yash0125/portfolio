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
          I'm a web developer. I'm proficient in HTML, CSS, JavaScript, React
          JS; plus modern css libraries like Material UI and Tailwind CSS. I design & develop web
          apps using the latest technologies to deliver the high-quality
          products. constantly open to learning new things
        </p>
        <br />
        <p className="text-xl">
          Ability to create innovative, creative, & interactive web designs to
          boost customer engagement. Sound knowledge in HTML5, CSS , Javascript,
          React.js. Build reusable code for future use while optimising web
          performance.
        </p>
      </div>
    </div>
  );
};

export default About;
