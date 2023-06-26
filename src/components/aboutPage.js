import React from "react";
import Introduction from "./about/introduction";
import Connect from "./about/connect";
import Section from "./about/section";

import { SECTIONS_EDUCATION, SECTIONS_PROFESSION } from "../constants/data";

const About = () => {
  return (
    <div className="about heading-1">
      <Introduction />
      {/* Education */}
      <div className="sections">
        {SECTIONS_EDUCATION.map((section, index) => (
          <Section section={section} index={index} />
        ))}
      </div>
      {/* Profession */}
      <div className="sections">
        {SECTIONS_PROFESSION.map((section, index) => (
          <Section section={section} index={index} />
        ))}
      </div>
      {/* Cool things */}
      <div className="sections">A few cool things about me...</div>
      <Connect />
    </div>
  );
};

export default About;
