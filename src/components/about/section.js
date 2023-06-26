import React from "react";

import Row from "antd/es/row";
import Col from "antd/es/col";

const Section = ({ section }) => {
  const { title, description, image } = section;
  return (
    <div className="section mb-5">
      <div className="heading-1">{title}</div>
      <Row gutter={[24, 8]}>
        <Col span={12}>
          <img src={image} />
        </Col>
        <Col span={12}>
          <div className="heading-2">{description}</div>
          <div className="text-center">
            <div className="custom-button custom-button-blue button">
              Show More
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Section;
