import React, { useState } from "react";
import Introduction from "./about/introduction";
import Connect from "./about/connect";
import Section from "./about/section";

import {
  SECTIONS_EDUCATION,
  SECTIONS_ENUM,
  SECTIONS_PROFESSION,
} from "../constants/data";
import Details from "./about/details";

const About = () => {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [sectionEnumValue, setSectionEnumValue] = useState(0);
  const [detailsModalVisible, setDetailsModalVisible] = useState(true);

  return (
    <div className="about heading-1">
      <Introduction />
      {/* Education */}
      <div className="sections">
        {SECTIONS_EDUCATION.map((section, index) => (
          <Section
            section={section}
            index={index}
            setSectionIndex={setSectionIndex}
            setDetailsModalVisible={setDetailsModalVisible}
            sectionEnumValue={SECTIONS_ENUM.EDUCATION}
            setSectionEnumValue={setSectionEnumValue}
          />
        ))}
      </div>
      {/* Profession */}
      <div className="sections">
        {SECTIONS_PROFESSION.map((section, index) => (
          <Section
            section={section}
            index={index}
            setSectionIndex={setSectionIndex}
            setDetailsModalVisible={setDetailsModalVisible}
            sectionEnumValue={SECTIONS_ENUM.PROFESSIONS}
            setSectionEnumValue={setSectionEnumValue}
          />
        ))}
      </div>
      {/* Cool things */}
      <div className="sections">A few cool things about me...</div>
      <Connect />

      {/* Modals */}
      <Details
        section={
          sectionEnumValue === SECTIONS_ENUM.PROFESSIONS
            ? SECTIONS_PROFESSION[sectionIndex]
            : SECTIONS_EDUCATION[sectionIndex]
        }
        detailsModalVisible={detailsModalVisible}
        setDetailsModalVisible={setDetailsModalVisible}
      />
    </div>
  );
};

export default About;
