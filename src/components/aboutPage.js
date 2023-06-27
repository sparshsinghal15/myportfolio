import React, { useState } from "react";
import Introduction from "./about/introduction";
import Connect from "./about/connect";
import Section from "./about/section";

import {
  SECTIONS,
  SECTIONS_EDUCATION,
  SECTIONS_ENUM,
  SECTIONS_EXTRAS,
  SECTIONS_PROFESSION,
} from "../constants/data";
import Details from "./about/details";

const About = () => {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [sectionEnumValue, setSectionEnumValue] = useState(0);
  const [detailsModalVisible, setDetailsModalVisible] = useState(false);

  return (
    <div className="about heading-1">
      <Introduction />
      {/* Education */}

      {Object.keys(SECTIONS_ENUM).map((item, sectionInd) => (
        <div className="sections">
          {SECTIONS[sectionInd].map((section, itemInd) => (
            <Section
              section={section}
              index={itemInd}
              setSectionIndex={setSectionIndex}
              setDetailsModalVisible={setDetailsModalVisible}
              sectionEnumValue={sectionInd}
              setSectionEnumValue={setSectionEnumValue}
            />
          ))}
        </div>
      ))}
      <Connect />

      {/* Modals */}
      <Details
        section={SECTIONS[sectionEnumValue][sectionIndex]}
        detailsModalVisible={detailsModalVisible}
        setDetailsModalVisible={setDetailsModalVisible}
      />
    </div>
  );
};

export default About;
