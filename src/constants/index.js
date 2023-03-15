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
  fastResale,
  marnState,
  tourest,
 
  ecommerce,
  portfolioWebsite,
  linkedin,
  fiverr
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "ABOUT",
  },
  {
    id: "work",
    title: "WORK",
  },
  {
    id: "contact",
    title: "CONTACT",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.JS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];





const experiences = [
  {
    title: "Web Design & WordPress Developer",
    company_name: "Fiverr.",
    icon: fiverr,
    iconBg: "#383E56",
    date: `January 2020 - March 2021`,
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.JS Developer",
    company_name: "Fiverr.",
    icon: fiverr,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Linked in Work for a Man",
    icon: linkedin,
    iconBg: "#383E56",
    date: "Feb 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Saidur Rahman proved me wrong.",
    name: "AS Arman",
    designation: "Web Developer",
    company: "Fiverr.",
    image: "https://i.ibb.co/CvxFhRk/min1.jpg",
  },
  {
    testimonial:
      " Saidur is my student, He is very good Developer you already know about this. He is truly cares about their clients' success like Saidur does.",
    name: "Jhankar Mahbub",
    designation: "CEO",
    company: "Programming Hero",
    image: "https://i.ibb.co/VT58Yw1/mini3.jpg",
  },
  {
    testimonial:
      "Saidur Rahman is a Great Developer. After Saidur optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Mohipul Islam",
    designation: "Front-End Engineer",
    company: "SIMEC",
    image: "https://i.ibb.co/4VCqWKM/mini2.jpg",
  },
];

const projects = [
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: tourest,
    source_code_link: "https://github.com/SaidurRahman10/TIMETOGO-CLIENT",
    live_website: "https://timetogo-d9e5b.web.app/",
  },

  {
    name: "Fast Resale",
    description:
      "The Website is For Sell Secondhand cars.This project was create by Tailwind with tailwind components & [Create React App], React Router Dom ,Express, mongoDb and some Common Functionality .",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Expressjs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: fastResale,
    source_code_link: "https://github.com/SaidurRahman10/Fast-Resale-client",
    live_website: "https://fast-resale-100e5.web.app/",
  },
  {
    name: "Portfolio Website",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Expressjs",
        color: "pink-text-gradient",
      },
    ],
    image: portfolioWebsite,
    source_code_link: "https://github.com/SaidurRahman10/Portfolio2.0-",
    live_website: "https://lambent-semifreddo-346ef1.netlify.app/",
  },
  {
    name: "Ecommerce Website",
    description:
      "This website is E-commerce Website. This website main priority is Selling Product. There is cart section for byre and Some Unique Feature in there.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link:
      "https://github.com/SaidurRahman10/Professonal-Ecommerce-Website",
    live_website: "https://saidurrahman10.github.io/Professonal-Ecommerce-Website/",
  },
  {
    name: "Task Management",
    description:
      "Web application that organize user task , view estimated task time ranges for on time work complete, and locate available time based on their current time.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: marnState,
    source_code_link:
      "https://github.com/SaidurRahman10/Task-Management-Tool-Client",
    live_website: "https://task-management-tool-6bc39.web.app/",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
    live_website: "https://task-management-tool-6bc39.web.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
