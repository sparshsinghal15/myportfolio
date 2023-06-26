import SoftwareDevelopment from "../public/images/softwareDevelopment.png";
import BusinessAnalytics from "../public/images/businessAnalytics.png";
import Youtube from "../public/images/youtube.png";
import Blog from "../public/images/blog.png";

import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { LINKEDIN_URL, INSTAGRAM_URL, YOUTUBE_URL, GITHUB_URL } from "./urls";

export const NAME = "Sparsh Singhal";
export const PROFESSIONS = [
  "Software Developer",
  "Business Analyst",
  "Youtuber",
  "Blogger",
];

export const SECTIONS = [
  {
    title: "Software Development",
    description: "I have worked on ",
    image: SoftwareDevelopment,
  },
  {
    title: "Business Analytics",
    description: "I have worked on this this ",
    image: BusinessAnalytics,
  },
  {
    title: "Youtube",
    description: "I have worked on this this ",
    image: Youtube,
  },
  {
    title: "Blog",
    description: "I have worked on this this ",
    image: Blog,
  },
];

export const SOCIAL_MEDIA_ICONS = [
  { title: "LinkedIn", url: LINKEDIN_URL, icon: <FaLinkedin /> },
  { title: "Instagram", url: INSTAGRAM_URL, icon: <FaInstagram /> },
  { title: "Youtube", url: YOUTUBE_URL, icon: <FaYoutube /> },
  { title: "Mail", url: LINKEDIN_URL, icon: <CiMail /> },
  { title: "Github", url: GITHUB_URL, icon: <FaGithub /> },
];
