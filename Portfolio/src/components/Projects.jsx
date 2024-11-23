import React from 'react'
import {PROJECTS} from "../constants"

const Projects = () => {
  console.log(PROJECTS);
  return (
    <div className='border-b border-neutral-900 pb-4 pt-10'>
      <h2 className='text-center text-4xl'>Projects</h2>
      <div className="pt-10 mt-10 ">
      {
        
        PROJECTS.map((projects,index)=>(
          <div className="mb-8 flex flex-wrap lg:justify-center pb-8" key="index">
            <div className="w-full lg:w-1/4 sm:pl-9">
            <img src={projects.image} className='mb-6 rounded-xl' width={200} height={200} alt="project_img" />
            </div>
            <div className="max-w-xl w-full lg:w-3/4">
              <h6 className='mb-2 font-semibold text-2xl'>{projects.title}</h6>
              <p className='mb-4 text-neutral-400'>{projects.description}</p>
              {
                projects.technologies.map((tech,index)=>(
                  <span className='mr-1 rounded bg-neutral-900 text-purple-400 px-2 py-1 hover:text-purple-300' key={index}>{tech}</span>
                ))
              }
            </div>
            
          </div>
        ))
      }
      </div>
      
      
      
    </div>
  )
}

export default Projects