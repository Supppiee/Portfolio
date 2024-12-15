import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiCss3Line } from "react-icons/ri";
import { RiHtml5Line } from "react-icons/ri";
import { RiJavaLine } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { RiDatabase2Line } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <div className="my-20 text-4xl text-center">Technologies</div>
      <div className="flex flex-wrap gap-6 items-center justify-center">
        {/* HTML */}
        <div className="relative group">
          <div className="rounded-2xl border-neutral-800 border-4 group-hover:border-orange-600">
            <RiHtml5Line className="text-6xl p-2 text-orange-600" />
          </div>
          <span className="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 scale-0 transition-transform group-hover:scale-100 bg-black text-white text-xs px-1.5 py-0.5 rounded shadow">
            HTML
          </span>
        </div>

        {/* CSS */}
        <div className="relative group">
          <div className="rounded-2xl border-neutral-800 border-4 group-hover:border-blue-600">
            <RiCss3Line className="text-6xl p-2 text-blue-600" />
          </div>
          <span className="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 scale-0 transition-transform group-hover:scale-100 bg-black text-white text-xs px-1.5 py-0.5 rounded shadow">
            CSS
          </span>
        </div>

        {/* JavaScript */}
        <div className="relative group">
          <div className="rounded-2xl border-neutral-800 border-4 group-hover:border-yellow-600">
            <RiJavascriptLine className="text-6xl p-2 text-yellow-400" />
          </div>
          <span className="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 scale-0 transition-transform group-hover:scale-100 bg-black text-white text-xs px-1.5 py-0.5 rounded shadow">
            JavaScript
          </span>
        </div>

        {/* React */}
        <div className="relative group">
          <div className="rounded-2xl border-neutral-800 border-4 group-hover:border-cyan-600">
            <RiReactjsLine className="text-6xl p-2 text-cyan-400" />
          </div>
          <span className="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 scale-0 transition-transform group-hover:scale-100 bg-black text-white text-xs px-1.5 py-0.5 rounded shadow">
            React
          </span>
        </div>

        {/* Java */}
        <div className="relative group">
          <div className="rounded-2xl border-neutral-800 border-4 group-hover:border-red-600">
            <RiJavaLine className="text-6xl p-2 text-red-600" />
          </div>
          <span className="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 scale-0 transition-transform group-hover:scale-100 bg-black text-white text-xs px-1.5 py-0.5 rounded shadow">
            Java
          </span>
        </div>

        {/* Spring Boot */}
        <div className="relative group">
          <div className="rounded-2xl border-neutral-800 border-4 group-hover:border-green-600">
            <SiSpringboot className="text-6xl p-2 text-green-600" />
          </div>
          <span className="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 scale-0 transition-transform group-hover:scale-100 bg-black text-white text-xs px-1.5 py-0.5 rounded shadow">
            Spring Boot
          </span>
        </div>

        {/* Database */}
        <div className="relative group">
          <div className="rounded-2xl border-neutral-800 border-4 group-hover:border-purple-500">
            <RiDatabase2Line className="text-6xl p-2 text-purple-500" />
          </div>
          <span className="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 scale-0 transition-transform group-hover:scale-100 bg-black text-white text-xs px-1.5 py-0.5 rounded shadow">
            MySQL
          </span>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
