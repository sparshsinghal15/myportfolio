import SoftwareDevelopment from "../public/images/softwareDevelopment.png";
import BusinessAnalytics from "../public/images/businessAnalytics.png";
import Youtube from "../public/images/youtube.png";
import Blog from "../public/images/blog.png";
import IITKanpur from "../public/images/iitk.png";
import Book from "../public/images/books.png";

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

// Make sure the enum values are starting from 0 and increasing continuously
export const SECTIONS_ENUM = {
  PROFESSIONS: 1,
  EDUCATION: 0,
  EXTRAS: 2,
};

export const SECTIONS = {
  [SECTIONS_ENUM.PROFESSIONS]: [
    {
      title: "Software Development",
      description: "",
      image: SoftwareDevelopment,
      resumeBtn: <DownloadResumeButton src={ResumeSoftware} />,
      details: null,
    },
    {
      title: "Business Analytics",
      description: "",
      image: BusinessAnalytics,
      resumeBtn: null,
      details: null,
    },
    {
      title: "Youtube",
      description: "",
      image: Youtube,
      resumeBtn: null,
      details: null,
    },
    {
      title: "Blog",
      description: "",
      image: Blog,
      resumeBtn: null,
      details: null,
    },
  ],
  [SECTIONS_ENUM.EDUCATION]: [
    {
      title: "Indian Institute of Technology, Kanpur",
      description:
        "During my time at the prestigious Indian Institute of Technology (IIT) Kanpur, I pursued a Bachelor of Technology (B.Tech) degree, majoring in Chemical Engineering. Alongside my major, I also chose to broaden my knowledge and skills by completing minors in both Computer Science and Industrial and Management Engineering.",
      image: IITKanpur,
      resumeBtn: null,
      details: null,
    },
  ],
  [SECTIONS_ENUM.EXTRAS]: [
    {
      title: "A litte more about me...",
      description:
        "Let me give you a glimpse into my life outside of professional life. Music holds a special place in my heart, and I enjoy expressing myself through singing and playing instruments such as the piano and flute. I have a deep love for reading as well, where I find solace and inspiration within the pages of both fiction and non-fiction books. Additionally, I have a keen interest in language learning, and I am currently immersed in the captivating journey of mastering the Spanish language. These hobbies provide me with creative outlets, opportunities for personal growth, and a broader understanding of the world around me.",
      image: Book,
      resumeBtn: null,
      details: [
        {
          text: "Books have always been a cherished part of my life. Whether I'm curling up with a fantasy novel, delving into the depths of historical accounts, or expanding my knowledge through thought-provoking non-fiction, I find immense joy and enrichment in the written word. The ability of authors to craft compelling narratives, evoke emotions, and share profound insights never fails to captivate me.",
          image: null,
        },
        {
          text: "Music, too, plays a significant role in shaping my identity. Singing has been a form of self-expression for as long as I can remember. The power of a well-delivered melody or a heartfelt lyric resonates deeply within me. Additionally, my instrumental skills on the piano and flute allow me to explore different genres and experiment with creating my own compositions.",
          image: null,
        },
        {
          text: "In my pursuit of cultural understanding and personal growth, I have embarked on a journey of language learning. Currently, I am dedicated to mastering the Spanish language. This endeavor not only provides me with the ability to communicate with a wider range of individuals but also grants me a glimpse into the rich tapestry of Spanish-speaking cultures. It is a constant reminder that language is a gateway to diverse perspectives, connecting people across geographical boundaries.",
          image: null,
        },
        {
          text: "Through this website, I aim to share my passion for reading, music, and language learning. Join me as I delve into literary adventures, share melodic creations, and document my linguistic progress. Together, let's explore the world of words, melodies, and cultural exchanges. Thank you for taking the time to learn more about my hobbies and interests. I invite you to connect with me and share your own experiences and passions. Let's embark on a journey of discovery and inspiration together!",
          image: null,
        },
      ],
    },
  ],
};

export const SOCIAL_MEDIA_ICONS = [
  { title: "LinkedIn", url: LINKEDIN_URL, icon: <FaLinkedin /> },
  { title: "Instagram", url: INSTAGRAM_URL, icon: <FaInstagram /> },
  { title: "Youtube", url: YOUTUBE_URL, icon: <FaYoutube /> },
  { title: "Mail", url: LINKEDIN_URL, icon: <CiMail /> },
  { title: "Github", url: GITHUB_URL, icon: <FaGithub /> },
];
