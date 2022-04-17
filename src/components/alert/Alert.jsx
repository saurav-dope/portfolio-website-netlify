import React from "react";
import "./alert.css";

const Alert = () => {
  return (
    <section className="alert show">
      <span className="exclamation-circle"></span>
      <span className="msg">
        Sorry! This Feature Is Currently Not In Service
        {console.log("hi")}
      </span>
    </section>
  );
};

export default Alert;
