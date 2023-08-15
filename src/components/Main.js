import React from "react";
import { Link } from "react-router-dom"

/* 
    This is you entry point for your routes
*/
const Main = () => {
  return (
    <div>
      <h1>Welcome to the Wizarding Schools Network!</h1>
      <Link to = "/Wizarding-schools">View the School of Wizards</Link>
      <br />
      <Link to = "WizStudents">View all training Wizards</Link>
    </div>
  );
};

export default Main;