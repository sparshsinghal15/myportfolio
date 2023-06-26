import React from "react";
import { NAME } from "../constants/data";
import { LINKEDIN_URL, INSTAGRAM_URL } from "../constants/urls";

import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container text-center">
        <div className="social-media">
          <a href={LINKEDIN_URL}>
            <FaLinkedin />
          </a>
          <a href={INSTAGRAM_URL}>
            <FaInstagram />
          </a>
        </div>
        <div>Designed and developed by {NAME}</div>
      </div>
    </div>
  );
};

export default Footer;
