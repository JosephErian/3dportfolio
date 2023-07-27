import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  phc,
  upwork,
  tito,
  it,
  materialui,
  postgres,
  expressjs,
  live,
  chatgpt,
  rest,
  jsm,
  smart,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "IT Specialist",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "MaterialUI CSS",
  //   icon: materialui,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "postgreSQL",
  //   icon: postgres,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Tito Business Center",
    company_name: "IT Specialist",
    icon: tito,
    link: "https://www.linkedin.com/company/tito-business-center/",
    iconBg: "#383E56",
    date: "June 2019 - April 2021",
    points: [
      "Maintained, installed and prepared more than 1000 Windows and Linux Computers.",
      "Installed Hardware like hard drives, memories and combining computers.", 
      "Installed many of software in clients' desktops and laptops just like Graphic Design Programs, Games, etc..",
    ],
  },
  {
    title: "Freelancer",
    company_name: "Graphic Designer",
    icon: upwork,
    link: "https://www.linkedin.com/company/upwork/",
    iconBg: "#E6DEDD",
    date: "March 2020 - April 2021",
    points: [
      "Specialized in creating visually appealing designs.",
      "Developed creative concepts and visual designs for logos and branding materials",
      "Mostly Worked with Libraries, local Companies and printing Offices.",
    ],
  },
  {
    title: "PHC",
    company_name: "IT Specialist",
    icon: phc,
    link: "https://www.linkedin.com/company/pharmacists-house-for-pharmaceutical-trading/mycompany/",
    iconBg: "#383E56",
    date: "July 2022 - Present",
    points: [
      "Built and Maintained full branch consists of +30 computers configuring Active Directory, File Server, Print Server, DHCP, DNS and End-users computers.",
      "Installed Physical Security Cameras like Hikvision,Yes-Original and Fingerprint devices.",
      "Extend network cables into buildings.",
      "Worked on Firewall systems i.e. Fortigate 60E.",
    ],
  },
  {
    title: "Freelancer",
    company_name: "Web Developer",
    icon: it,
    link: "https://www.linkedin.com/in/joseph-erian/",
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      "Working now for many companies and local agencies.",
      "Support with realiable solutions with the bugs.",
      "Implementing tasks on time.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ChatGPT3",
    description:
      "One page website just with amazing styles and colors.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "green-text-gradient",
      },
      
    ],
    image: chatgpt,
    source_code_link: "https://github.com/josephErian/ChatGPT3",
    live_code_link:"https://josepherian.github.io/ChatGPT3/"
  },
  {
    name: "3D Shirt Modeling",
    description:
      "3D Web App for modeling shrits with different texture Client-side and Server-side using three.js and express.js ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "white-text-gradient",
      },
      
    ],
    image: jsm,
    source_code_link: "https://github.com/josephErian/jsm",
    live_code_link:"https://jshirt-73sx.onrender.com/"
  },
  {
    name: "GertichRestaurant",
    description:
      "Webpage for a Resturant with coloful and well designed layout with wonderful gallery.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Vanilla CSS",
        color: "yellow-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: rest,
    source_code_link: "https://github.com/josephErian/GeritchRestaurant",
    live_code_link:"https://gertichrestaurant.onrender.com"
  },
  {
    name: "Smart Brain",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Express.js",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: smart,
    live_code_link: "https://smart-brain-front-8meq.onrender.com/",
    source_code_link: "https://github.com/josephErian/smart-brain-front",
  },
];

export { services, technologies, experiences, testimonials, projects };
