import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers";
import logo from "../assets/logo.png";
import { FaFacebook , FaTwitter, FaLinkedin, FaGithub , FaDownload } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto shadow-md`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          
        
        <img className=" md:h-60 w-auto hidden md:block" src={logo} />
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-yellow-400 opacity-75" />
          <div className="w-1 sm:h-80 h-40 bg-yellow-400 opacity-25" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm &nbsp;<span className=" text-yellow-400">
            <Typewriter
                       loop={20}
                      cursor
                      cursorStyle='_'
                     words={['SRS', 'Saidur Rahman', 'Saidur', ' Saidur Rahman']}
                    />

            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 uppercase`}>
          Professional FULL STACK DEVELOPER  
          </p>
        </div>
      </div>
     
     <div className="lg:h-16 h-32 ">
    
     </div>

      <ComputersCanvas  />
      
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
