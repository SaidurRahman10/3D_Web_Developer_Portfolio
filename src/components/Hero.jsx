import { motion } from "framer-motion";
import { styles } from "../styles";
import {ComputersCanvas} from './canvas'


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className=" text-[#915eff]">Saidur Rahman</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a web developer with experience in MERN stack technologies. This
            includes MongoDB, Express, React , Node.js ,Redux, Next.JS ,
            Firebase & Sanity etc.
            <br className="sm:block hidden" />
            <span className="hidden lg:block">
              I have 1 years of experience in web Design & 6 month of experience
              in MERN Stack. I have a passion for learning new technologies and
              optimizing my skills. One of my special ability is i can easily
              improve myself through the use of modern technology.{" "}
            </span>
          </p>
        </div>

      </div>
    <ComputersCanvas />
    </section>
  );
};

export default Hero;
