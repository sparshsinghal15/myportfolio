import React from "react";
import { NAME } from "../constants/data";

import { SOCIAL_MEDIA_ICONS } from "../constants/data";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container text-center">
        <div className="social-media">
          {SOCIAL_MEDIA_ICONS.map((item, index) => (
            <a href={item.url} key={index}>
              {item.icon}
            </a>
          ))}
        </div>
        <div>Designed and developed by {NAME}</div>
      </div>
    </div>
  );
};

export default Footer;
