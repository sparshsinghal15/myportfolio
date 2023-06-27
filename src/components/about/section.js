import React from "react";

import Row from "antd/es/row";
import Col from "antd/es/col";

const Section = ({
  section,
  index,
  setSectionIndex,
  setDetailsModalVisible,
  sectionEnumValue,
  setSectionEnumValue,
}) => {
  const { title, description, image, resumeBtn } = section;

  const onShowMoreClick = () => {
    setSectionIndex(index);
    setDetailsModalVisible(true);
    setSectionEnumValue(sectionEnumValue);
  };

  return (
    <div className="section fade-in-section" key={index}>
      <div className="heading-1">{title}</div>
      <Row gutter={[24, 8]}>
        <Col span={12}>
          <img src={image} />
        </Col>
        <Col span={12}>
          <div className="heading-3">{description}</div>
          <div className="action-buttons flex text-center">
            {section.details && (
              <div
                className="custom-button custom-button-white-ghost"
                onClick={onShowMoreClick}
              >
                Show More
              </div>
            )}

            <div className="ml-2">{resumeBtn}</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Section;
