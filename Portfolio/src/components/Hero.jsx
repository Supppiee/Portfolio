import React from "react";
import { HERO_CONTENT } from "../constants";
import profile_pic from "../assets/kevinRushProfile.jpg";
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-10 lg:mb-35 ">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            initial={{x:-100, opacity: 0}}
            animate={{x: 0, opacity:100}}
            transition={{duration: 0.5, delay: 0}}
               className="pb-16 tracking-tight text-4xl font-thin lg:text-8xl lg:mt-16 ">
              Suprith H B
            </motion.h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-600 tracking-tight text-transparent bg-clip-text text-3xl">
              Full Stack Developer
            </span>
            <p className="my-2 py-9 tracking-tighter font-thin max-w-xl ">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img className="border-none rounded-lg h-100" src={profile_pic} alt="Profile pic"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
