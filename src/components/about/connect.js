import React from "react";
import { PAGE_URL } from "../../constants/urls";
import { Link } from "react-router-dom";

const Connect = () => {
  return (
    <div className="connect text-center mt-3">
      <div className="title-2">Let's brew something</div>
      <div className="title-2">great together!</div>
      <div className="mt-5">
        <Link to={PAGE_URL.CONNECT}>
          <div className="custom-button custom-button-white button">
            Get in touch
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Connect;
