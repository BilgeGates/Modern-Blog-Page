import React from "react";
import PersonIMG from "../../../../assets/PersonAnonymous.png";
import "./one.css";

const One = () => {
  return (
    <section>
      <div className="blogSingle__container">
        <span>Technology</span>
        <h3>
          The Impact of Technology on the Workplace: How Technology is Changing
        </h3>
        <div className="card__author">
          <div className="card__author__img">
            <img src={PersonIMG} alt="" />
          </div>
          <small>Tracey Wilson</small>
          <p>August 20, 2022</p>
        </div>
      </div>
    </section>
  );
};

export default One;
