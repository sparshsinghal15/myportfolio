import React from "react";
import Introduction from "./about/introduction";
import Connect from "./about/connect";
import Section from "./about/section";

import { SECTIONS } from "../constants/data";

const About = () => {
  return (
    <div className="about heading-1">
      <Introduction />
      <div className="sections">
        {SECTIONS.map((section, index) => (
          <Section section={section} />
        ))}
      </div>
      <Connect />
    </div>
  );
};

export default About;