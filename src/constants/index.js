import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";
import port04 from "../assets/img/port04.jpg";
import port05 from "../assets/img/port05.jpg";
import port06 from "../assets/img/port06.jpg";
import port07 from "../assets/img/port07.jpg";
import port08 from "../assets/img/port08.jpg";
import port09 from "../assets/img/port09.jpg";
import port10 from "../assets/img/port10.jpg";
import port11 from "../assets/img/port11.jpg";
import JinParkResumeDark from "../assets/file/JinParkResumeDark.pdf";
import JinParkResumeLight from "../assets/file/JinParkResumeLight.pdf";

export const headerNav = [
  {
    title: "intro",
    url: "#intro",
  },
  {
    title: "motto",
    url: "#motto",
  },
  {
    title: "achievement",
    url: "#achievement",
  },
  {
    title: "portfolio",
    url: "#port",
  },
  {
    title: "contact",
    url: "#contact",
  },
];

export const introText = {
  title1: "Passionate",
  title2: "and Creative",
  desc: ["Talent is born", "and nurtured through", "effort"],
};

export const skillText = [
  {
    title: "Realize my own dream",
    desc: "Ever since I was a little boy, I like trying and creating new things. To me, software engineering means way more than just a job. I design my dream and construct it in lines of code. I get to be truly happy when I bring my dream into reality.",
  },
  {
    title: "The harder I strive, the more opportunities I get",
    desc: "You make your own luck, by working hard. You just find out what you want to do and simply concentrate on it, then you see the way. All you need to do in the process is to believe in, root for, and love yourself no matter what.",
  },
  {
    title: "Be honest to myself",
    desc: "Honesty helps you listen to your inner self. If you are not honest to yourself, you can't passionately enjoy and push through the work. People should do what they enjoy from the bottom of their heart in order to enjoy their lives.",
  },
];

export const achievementText = [
  {
    text: ["First place", "at AUTCup", "Robotics competition"],
    title: "Selected as one of 2 participants",
    view: "https://news.umanitoba.ca/a-whole-new-world-computer-science-students-travel-to-iran-for-autcup-robotics-competition/",
    info: [
      "COMPETITION",
      "Competition Period: 7 days",
      "Stack : ROS, C++, OpenCV",
    ],
  },
  {
    text: ["First place", "at ROBOCUP Robotics competition", "In Montreal"],
    title: "Handpicked as one of 3 participants",
    view: "https://sci.umanitoba.ca/news/first-place-win-for-students-at-2018-robocup-robotics-competition/",
    info: [
      "COMPETITION",
      "Competition Period: 6 days",
      "Stack : ROS, C++, OpenCV, OpenAI",
    ],
  },
  {
    text: [
      "Publish",
      "a paper as a first author",
      "regarding Artificial intelligent",
    ],
    title:
      "Analysis and Prediction of Patterns in Futures Trading Datasets Using LSTM",
    view: "https://ojs.lib.umanitoba.ca/index.php/pmuser/article/view/604",
    info: [
      "Publish",
      "Writing Period: 2 months",
      "Stack : Keras, TensorFlow, Python",
    ],
  },
  {
    text: ["Finalist", "at Idea competition", "In university of manitoba"],
    title:
      "How can artificial intelligence assist us in sustainable development?",
    view: "https://news.umanitoba.ca/hear-the-proposed-solutions-from-finalist-teams-at-game-changer-grand-finale/",
    info: [
      "COMPETITION",
      "Competition Period: 2 weeks",
      "Stack : Keras, TensorFlow, Python",
    ],
  },
];

export const portText = [
  {
    num: "01",
    title: "Rise people HR management system ",
    desc: "The product manages a company's HR system, such as time scheduling and tracking",
    stack: "Angular, Node.js, Typescript, Postgres, Redis, SCSS",
    img: port01,
    view: "https://risepeople.com/",
  },
  {
    num: "02",
    title: "Quadrant client management system",
    desc: "The client is expanding their business internationally. Me and my team members created a cloud based website for them.",
    stack: "React, Node.js, Javascript, Typescript, Postgres, MicroORM",
    img: port02,
    view: "https://quadrantprivate.com/",
  },
  {
    num: "03",
    title: "Companies online registration system",
    desc: "The system helps entrepreneurs register their business name and use it in different provinces so that name duplication issue can be resolved",
    stack: "C#, MySQL",
    img: port03,
    view: "https://companiesoffice.gov.mb.ca/",
  },
  {
    num: "04",
    title: "Carte system to measure products",
    desc: "The system measures a product's size with complex parts",
    stack: "XAML, WPF, C#, Prisma, Postgres",
    img: port04,
    view: "https://carte.ca/",
  },
  {
    num: "05",
    title: "Chatbot by ChatGPT",
    desc: "This is a django project that utilizes openAI API.",
    stack: "django, Python, OpenAI",
    img: port05,
    code: "https://github.com/LegendaryPark/django-chatbot",
  },
  {
    num: "06",
    title: "Video processing/uploading system",
    desc: "This is a backend project that uploads video processing module to cloud, and processes and uploads a video in cloud",
    stack: "NextJS, Typescript, Firebase, Docker, GCP",
    img: port06,
    code: "https://github.com/LegendaryPark/Youtube-clone",
  },
  {
    num: "07",
    title: "VIN decoder",
    desc: "This is vehicle identification number (VIN) decoder that fetches vehicles' information.",
    stack: "FastApi, Python, Sqlite",
    img: port07,
    code: "https://github.com/LegendaryPark/VIN-Decoder",
  },
  {
    num: "08",
    title: "Momentum",
    desc: "You can check weather in your area, time, and motivational saying as well!",
    stack: "Vanilla javascript",
    img: port08,
    code: "https://github.com/LegendaryPark/wholepaper",
    view: "https://legendarypark.github.io/wholepaper/",
  },
  {
    num: "09",
    title: "Drawing board",
    desc: "Draw a beautiful painting yourself!",
    stack: "Vanilla javascript",
    img: port09,
    code: "https://github.com/LegendaryPark/vanilla-drawing-app",
    view: "https://legendarypark.github.io/vanilla-drawing-app/",
  },
  {
    num: "10",
    title: "Netflix Clone",
    stack: "React, Tailwind, Next.JS, Prisma, MongoDB, NextAuth, Vercel",
    desc: "It's a fullstack project. Coming soon!",
    img: port10,
  },
  {
    num: "11",
    title: "New portfolio website!",
    desc: "I'm moving to my brand new website soon!",
    img: port11,
  },
];

export const contactText = [
  {
    link: JinParkResumeDark,
    title: "Resume - Dark",
  },
  {
    link: JinParkResumeLight,
    title: "Resume - Light",
  },
  {
    link: "https://www.linkedin.com/in/jin-park-31169a119/",
    title: "Linkedin",
  },
  {
    link: 'mailto:"pbjkmn00@gmail.com"',
    title: "pbjkmn00@gmail.com",
  },
];
