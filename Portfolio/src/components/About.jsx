import React from "react";
import about from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 lg:pl-14">
      <div className="text-4xl my-4 text-center p-10">
        About <span className="text-neutral-500">Me</span>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-12">
          <div className="flex items-center justify-center">
            <img className="rounded-xl pt-15 lg:pr-20" src={about} alt="about" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-10 lg:pl-14">
          <div className="flex justify-center flex-col lg:justify-start">
            <p className="max-w-xl my-10 tracking-tight font-thin">
              {ABOUT_TEXT}
            </p>
            <div className="flex justify-center lg:justify-start">
              <a href="https://flowcv.com/resume/5s5rm8gk8e">
                <button className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-600 py-4 px-8 w-full sm:w-auto text-neutral-950 font-bold rounded-lg mt-7">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
