import React from "react";
import Introduction from "./about/introduction";
import Connect from "./about/connect";
import Section from "./about/section";

const About = () => {
  return (
    <div className="about heading-1">
      <Introduction />
      <Section />
      <Connect />
    </div>
  );
};

export default About;
