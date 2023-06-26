import React from "react";

const DownloadResumeButton = ({ src }) => {
  return (
    <a href={src} download="Resume (Sparsh Singhal)">
      <div className="custom-button custom-button-blue">Download Resume</div>
    </a>
  );
};

export default DownloadResumeButton;
