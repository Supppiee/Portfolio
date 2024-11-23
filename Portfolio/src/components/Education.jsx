import React from 'react'
import { EDUCATION } from '../constants'

const Education = () => {
  return (
    <div className='border-b border-neutral-900 pb-10'>
        <h2 className='text-center text-4xl pt-20'>Education</h2>
        <div className="pt-14">
        {EDUCATION.map((education, index)=>(
            <div key={index} className="mb-6  flex flex-wrap lg:justify-auto">
                <div className="w-full lg:w-1/2 ">
                    <p className='pt-2 mb-2 text-neutral-400 text-sm lg:pl-0'>{education.degree}</p>
                </div>
                <div className="w-full max-w-xl lg:w-96">
                    <h6 className="font-semibold mb-2 pt-2 ">
                        {education.school} - <span className='text-sm text-purple-300'>{education.year}</span>
                    </h6>
                    <h6 className='text-sm text-purple-300'><span className="">Score</span> {education.score} </h6>
                    <h6 className='text-sm text-neutral-400 mb-2 pt-2'>{education.location}</h6>
                </div>
            </div>
        ))}
        </div>
        
        
    </div>
  )
}

export default Education