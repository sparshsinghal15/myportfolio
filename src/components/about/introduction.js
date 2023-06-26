import React from "react";
import Profession from "./introduction/profession";

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="title-1">
        Hi, I'm <span className="name">Sparsh Singhal</span>
      </div>
      <div className="title-2">
        a <Profession />.
      </div>
    </div>
  );
};

export default Introduction;
