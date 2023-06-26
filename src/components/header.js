import React from "react";

import { BLOG_URL, PAGE_URL } from "../constants/urls";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header py-5">
      <div className="container flex justify-space-between align-center">
        <Link to={PAGE_URL.ABOUT}>
          <div className="title">Sparsh Singhal</div>
        </Link>
        <div className="action flex">
          <Link to={PAGE_URL.ABOUT}>
            <div className="button">About</div>
          </Link>
          <a href={BLOG_URL} target="_blank">
            <div className="button">Blog</div>
          </a>
        </div>
        <Link to={PAGE_URL.CONNECT}>
          <div className="custom-button custom-button-white">Get in touch</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
