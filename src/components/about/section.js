import React, { useRef } from "react";

import Row from "antd/es/row";
import Col from "antd/es/col";

import { CSSTransition } from "react-transition-group";
import "../../style/fade.css";

const Section = ({ section }) => {
  const { title, description, image, resumeBtn } = section;

  const nodeRef = useRef(null);

  return (
    <CSSTransition nodeRef={nodeRef} in={true} timeout={400} classNames="fade">
      <div className="section mb-5" ref={nodeRef}>
        <div className="heading-1">{title}</div>
        <Row gutter={[24, 8]}>
          <Col span={12}>
            <img src={image} />
          </Col>
          <Col span={12}>
            <div className="heading-2">{description}</div>
            <div className="action-buttons flex text-center">
              <div className="custom-button custom-button-blue">Show More</div>
              <div className="ml-2">{resumeBtn}</div>
            </div>
          </Col>
        </Row>
      </div>
    </CSSTransition>
  );
};

export default Section;
