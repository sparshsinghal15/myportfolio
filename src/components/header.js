import React from "react";

import { BLOG_URL } from "../constants/data";
import { PAGE_URL } from "../constants/urls";

import { Link } from "react-router-dom";

window.addEventListener("scroll", function () {
  let header = document.getElementById("header");
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > 0) {
    header.classList.remove("transparent-header");
    header.classList.add("scrolled-header");
  } else {
    header.classList.remove("scrolled-header");
    header.classList.add("transparent-header");
  }
});

const Header = () => {
  return (
    <div id="header" className="header transparent py-5">
      <div className="container">
        <div className="sub-container flex align-center justify-space-between">
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
            <div className="custom-button custom-button-white">
              Get in touch
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
