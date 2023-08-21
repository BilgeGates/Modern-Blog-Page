import React from "react";
import WorkPlace from "../../assets/Imagewokplace.png";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div>
          <div>
            <img src={WorkPlace} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
