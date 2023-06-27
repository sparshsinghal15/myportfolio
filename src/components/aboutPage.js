import React, { useEffect, useState } from "react";
import Introduction from "./about/introduction";
import Connect from "./about/connect";
import Section from "./about/section";

import { SECTIONS, SECTIONS_ENUM } from "../constants/data";
import DetailsModal from "./about/detailsModal";

const About = () => {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [sectionEnumValue, setSectionEnumValue] = useState(0);
  const [detailsModalVisible, setDetailsModalVisible] = useState(false);

  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in-section");
    const appearOptions = { threshold: 0.1 };
    const appearOnScroll = new IntersectionObserver(
      (entries, appearOnScroll) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          else {
            entry.target.classList.add("is-visible");
            appearOnScroll.unobserve(entry.target);
          }
        });
      },
      appearOptions
    );
    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });
  }, []);

  return (
    <div className="about heading-1">
      <Introduction />

      {Object.keys(SECTIONS_ENUM).map((item, sectionInd) => (
        <div className="sections fade-in-section">
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

      <DetailsModal
        section={SECTIONS[sectionEnumValue][sectionIndex]}
        detailsModalVisible={detailsModalVisible}
        setDetailsModalVisible={setDetailsModalVisible}
      />
    </div>
  );
};

export default About;
