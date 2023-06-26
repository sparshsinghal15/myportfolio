import SoftwareDevelopment from "../public/images/softwareDevelopment.png";
import BusinessAnalytics from "../public/images/businessAnalytics.png";
import Youtube from "../public/images/youtube.png";
import Blog from "../public/images/blog.png";
import DownloadResumeButton from "../components/independent/downloadResumeButton";
import ResumeSoftware from "../public/pdfs/resume_software.pdf";

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

export const SECTIONS_PROFESSION = [
  {
    title: "Software Development",
    description: "I have worked on ",
    image: SoftwareDevelopment,
    resumeBtn: <DownloadResumeButton src={ResumeSoftware} />,
  },
  {
    title: "Business Analytics",
    description: "I have worked on this this ",
    image: BusinessAnalytics,
    resumeBtn: null,
  },
  {
    title: "Youtube",
    description: "I have worked on this this ",
    image: Youtube,
    resumeBtn: null,
  },
  {
    title: "Blog",
    description: "I have worked on this this ",
    image: Blog,
    resumeBtn: null,
  },
];

export const SECTIONS_EDUCATION = [
  { title: "Indian Institute of Technology, Kanpur" },
];

export const SOCIAL_MEDIA_ICONS = [
  { title: "LinkedIn", url: LINKEDIN_URL, icon: <FaLinkedin /> },
  { title: "Instagram", url: INSTAGRAM_URL, icon: <FaInstagram /> },
  { title: "Youtube", url: YOUTUBE_URL, icon: <FaYoutube /> },
  { title: "Mail", url: LINKEDIN_URL, icon: <CiMail /> },
  { title: "Github", url: GITHUB_URL, icon: <FaGithub /> },
];
