import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import {RiCss3Line} from 'react-icons/ri'
import {RiHtml5Line} from 'react-icons/ri'
import {RiJavaLine} from 'react-icons/ri'
import {RiJavascriptLine} from 'react-icons/ri'
import {RiDatabase2Line} from 'react-icons/ri'

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <div className='my-20 text-4xl text-center'>Technologies</div>
        <div className="flex flex-wrap gap-6 items-center justify-center">

            {/* HTML */}
            <div className="rounded-2xl border-neutral-800 border-4 hover:border-orange-600">
                <RiHtml5Line className='text-6xl p-2 text-orange-600 '></RiHtml5Line>
            </div>
            
            {/* Css */}
            <div className="rounded-2xl border-neutral-800 border-4 hover:border-blue-600 ">
                <RiCss3Line className='text-6xl p-2 text-blue-600'></RiCss3Line>
            </div>

            {/* javascrpit */}
            <div className="rounded-2xl border-neutral-800 border-4 hover:border-yellow-600">
                <RiJavascriptLine className='text-6xl p-2 text-yellow-400'></RiJavascriptLine>
            </div>

            {/* react */}
            <div className="rounded-2xl border-neutral-800 border-4 hover:border-cyan-600">
                <RiReactjsLine className='text-6xl p-2 text-cyan-400'></RiReactjsLine>
            </div>
            
            {/* java */}
            <div className="rounded-2xl border-neutral-800 border-4 hover:border-red-600">
                <RiJavaLine className='text-6xl p-2 text-red-600'></RiJavaLine>
            </div>

            {/* RiDatabase2Line */}
            <div className="rounded-2xl border-neutral-800 border-4 hover:border-purple-500">
                <RiDatabase2Line className='text-6xl p-2 text-purple-500'></RiDatabase2Line>
            </div>
        </div>
    </div>
  )
}

export default Technologies