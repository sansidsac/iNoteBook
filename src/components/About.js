import React from "react";

const About = () => {
  return (
    <div>
      <h2 className="my-4">About</h2>
      <p className="about-para">
        iNotebook is a complete project that showcases my skills in MERN stack development. 
        It is a simple note-taking application that allows users to create, update and delete notes.
        The application features authentication and authorization, enabling users to sign up and log in.
        The frontend is built using React and the backend is developed with Node.js and Express.
        MongoDB is used as the database to store user data and notes.
      </p>
      <p className="about-para">
        This project was an opportunity for me to learn and apply the concepts I have learned in the Full Stack Open course provided by CodeWithHarry
        I hope you enjoy using iNotebook!
      </p>
    </div>
  );
};
export default About;
