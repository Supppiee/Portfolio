import React from "react";
import { HERO_CONTENT } from "../constants";
import profile_pic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-10 lg:mb-35">
      <div className="flex flex-wrap">
        {}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            {}
            <motion.h1
              initial={{ x: -200, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="pb-16 tracking-tight text-4xl font-thin lg:text-8xl lg:mt-16"
            >
              Suprith H B
            </motion.h1>

            
            <motion.span
              initial={{ x: -200, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-600 tracking-tight text-transparent bg-clip-text text-3xl"
            >
              Software Developer
            </motion.span>

            
            <motion.p
              initial={{ x: -200, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="my-2 py-9 tracking-tighter font-thin max-w-xl"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            initial={{ x: 200, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center"
          >
            <img
              className="border-none rounded-xl w-96"
              src={profile_pic}
              alt="Profile pic"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
