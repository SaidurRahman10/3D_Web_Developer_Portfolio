import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";
import img from "../assets/fa.jpg";

import {
  FaPhone,
  FaLocationArrow,
  FaEnvelope,
  FaCalendar,
} from "react-icons/fa";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full   gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className=" bg-transparent bg-opacity-30 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div className="mt-16" variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>

        <div>
          <div
            id="about"
            className=" text-white  bg-black bg-opacity-50 rounded-2xl shadow-2xl p-5 py-10"
          >
            <div className="mx-auto grid  grid-cols-1 lg:grid-cols-2 place-items-center ">
              <div className="">
                <img className="h-96 w-auto rounded-3xl" src={img} alt="" />
              </div>
              <div className="">
                <h1 className="text-2xl font-bold">Who am i?</h1>
                <motion.p
                  variants={fadeIn("", "", 0.1, 1)}
                  className="mt-4  text-[17px] max-w-3xl leading-[30px]"
                >
                  I'm a Web Developer with experience in web development using
                  MERN Stack technologies MongoDB, Express, React, Next, Redux,
                  TypeScript Node.js, Basic Graphic Design & git. I'm a quick
                  learner and collaborate closely with clients to create
                  efficient, scalable, and user-friendly solutions that solve
                  real-world problems. Let's work together to bring your ideas
                  to life!
                </motion.p>

                <div className="mt-12">
                  <h1 className="text-xl font-bold">Personal Info</h1>

                  <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5  ">
                    <div className="flex gap-3">
                      <div>
                        <FaPhone className=" h-5 w-5  text-red-500 "></FaPhone>
                      </div>
                      <div className="">
                        <p className="text-xs text-slate-400">Phone</p>
                        <p className="text-sm">+8801798515747</p>
                      </div>
                    </div>

                    <div className="flex gap-3 ">
                      <div>
                        <FaLocationArrow className=" h-5 w-5  text-sky-500 "></FaLocationArrow>
                      </div>
                      <div className="">
                        <p className="text-xs text-slate-400">Location</p>
                        <p className="text-sm">Feni, Bangladesh</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div>
                        <FaEnvelope className=" h-5 w-5 text-teal-500 "></FaEnvelope>
                      </div>
                      <div className="">
                        <p className="text-xs text-slate-400">Email</p>
                        <p className="text-sm">saidurrahman1473@...</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div>
                        <FaCalendar className=" h-5 w-5  text-orange-500"></FaCalendar>
                      </div>

                      <div className="">
                        <p className="text-xs text-slate-400">Birthday</p>
                        <p className="text-sm">January 3, 2003</p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1JVjmAtzc3CFbEC8C62qjsVzRAgtD_pPJ/view?usp=sharing",
                        "_blank"
                      )
                    }
                    className="btn w-full py-2 duration-300 bg-cyan-600 mt-5 rounded-lg shadow-lg hover:bg-indigo-600"
                  >
                    Download Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
