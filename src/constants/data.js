import SoftwareDevelopment from "../public/images/softwareDevelopment.png";
import BusinessAnalytics from "../public/images/businessAnalytics.png";
import Youtube from "../public/images/youtube.png";
import Blog from "../public/images/blog.png";
import IITKanpur from "../public/images/iitk.png";

import DownloadResumeButton from "../components/independent/downloadResumeButton";
import ResumeSoftware from "../public/pdfs/resume_software.pdf";

import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export const BLOG_URL = "https://lucidepiphany.com/";
export const LINKEDIN_URL = "https://www.linkedin.com/in/sparshsinghal15/";
export const INSTAGRAM_URL = "https://www.linkedin.com/in/sparshsinghal15/";
export const YOUTUBE_URL = "https://www.youtube.com/@SparshSinghalMusic";
export const GITHUB_URL = "https://github.com/sparshsinghal15";

export const NAME = "Sparsh Singhal";
export const PROFESSIONS = [
  "Software Developer",
  "Business Analyst",
  "Youtuber",
  "Blogger",
];

export const SECTIONS_ENUM = {
  PROFESSIONS: 0,
  EDUCATION: 2,
};

export const SECTIONS_PROFESSION = [
  {
    title: "Software Development",
    description: "I have worked on ",
    image: SoftwareDevelopment,
    resumeBtn: <DownloadResumeButton src={ResumeSoftware} />,
    details: { name: "hello" },
  },
  {
    title: "Business Analytics",
    description: "I have worked on this this ",
    image: BusinessAnalytics,
    resumeBtn: null,
    details: {},
  },
  {
    title: "Youtube",
    description: "I have worked on this this ",
    image: Youtube,
    resumeBtn: null,
    details: {},
  },
  {
    title: "Blog",
    description: "I have worked on this this ",
    image: Blog,
    resumeBtn: null,
    details: {},
  },
];

export const SECTIONS_EDUCATION = [
  { title: "Indian Institute of Technology, Kanpur", image: IITKanpur },
];

export const SOCIAL_MEDIA_ICONS = [
  { title: "LinkedIn", url: LINKEDIN_URL, icon: <FaLinkedin /> },
  { title: "Instagram", url: INSTAGRAM_URL, icon: <FaInstagram /> },
  { title: "Youtube", url: YOUTUBE_URL, icon: <FaYoutube /> },
  { title: "Mail", url: LINKEDIN_URL, icon: <CiMail /> },
  { title: "Github", url: GITHUB_URL, icon: <FaGithub /> },
];
