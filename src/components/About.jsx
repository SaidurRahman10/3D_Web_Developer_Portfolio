import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({index, title, icon}) =>{
    return (
        <Tilt className="xs:w-[250px]">{title}</Tilt>
    )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a web developer with experience in MERN stack technologies. This
        includes MongoDB, Express, React ,Next.JS , Redux, TypeScript , Node.js, ThreeJS Firebase & Sanity. I have 2 years of experience in web Design & 1 month of experience in MERN Stack.
        I have a passion for learning new technologies and optimizing my skills.
        One of my special ability is, I can easily improve myself through the use
        of modern technology. Let's work together to bring our ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">

    {services.map((service, index) => (
        <ServiceCard
        key={service.title}
        index={index} {...service}
        />

    ))}

      </div>
    </>
  );
};

export default About;
