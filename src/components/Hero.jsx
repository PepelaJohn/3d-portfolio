import React from "react";
import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-end  w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl flex-row flex items-start gap-5 mx-auto`}
      >
        <div className="flex flex-col   justify-center items-center mt-5">
          <div className="w-5 h-5  rounded-full bg-[#915eff]"></div>
          <div className="w-1  violet-gradient sm:h-80 h-40"></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} z-500 text-white`}>
            Hi, I'm
            <span className="text-[#915eff]"> Doe</span>
          </h1>
          <p className={`${styles.heroSubText} z-500 mt-2 text-white-100 `}>
            I develop web applications, user <br className="sm:block hidden" />{" "}
            Interfaces and 3D visuals.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[25px] h-[50px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
