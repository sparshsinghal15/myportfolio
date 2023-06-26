import React from "react";
import { NAME } from "../constants/data";
import { LINKEDIN_URL, INSTAGRAM_URL, YOUTUBE_URL } from "../constants/urls";

import { FaInstagram, FaLinkedin, FaMailBulk, FaYoutube } from "react-icons/fa";

import { CiMail } from "react-icons/ci";
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
          <a href={YOUTUBE_URL}>
            <FaYoutube />
          </a>
          <a href={YOUTUBE_URL}>
            <CiMail />
          </a>
        </div>
        <div>Designed and developed by {NAME}</div>
      </div>
    </div>
  );
};

export default Footer;
