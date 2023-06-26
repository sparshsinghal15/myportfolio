import React from "react";

import { PAGE_ENUM } from "../constants/constants";
import { BLOG_URL } from "../constants/urls";

const Header = ({ setPage }) => {
  return (
    <div className="header py-4">
      <div className="container flex justify-space-between align-center">
        <div className="title">Sparsh Singhal</div>
        <div className="action flex">
          <div className="button" onClick={() => setPage(PAGE_ENUM.ABOUT)}>
            About
          </div>
          <a href={BLOG_URL} target="_blank">
            <div className="button">Blog</div>
          </a>
        </div>
        <div className="custom-button">Get in touch</div>
      </div>
    </div>
  );
};

export default Header;
