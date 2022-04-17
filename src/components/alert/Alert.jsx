import React from "react";
import "./alert.css";
import { alertPortfolioMsg } from "../../App";

const Alert = ({ msg }) => {
  return (
    <section
      className={
        msg === alertPortfolioMsg ? "alert show alert1" : "alert show alert2"
      }
    >
      <span
        className={
          msg === alertPortfolioMsg
            ? "fas fa-exclamation-circle"
            : "fas fa-check"
        }
      ></span>
      <span className="msg">{msg}</span>
    </section>
  );
};

export default Alert;
