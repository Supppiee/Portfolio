import React from 'react'
import {CONTACT} from "../constants"
import { RiPhoneFill } from 'react-icons/ri';

const Contact = () => {
    console.log(CONTACT);
  return (
    <div className='border-b border-neutral-900 pb-20  mt-10'>
        <div className="text-center text-2xl text-neutral-400">Get in touch
        </div>
        <div className="text-center tracking-tighter ">
                
                <p className='my-4 text-neutral-400 '>{CONTACT.phoneNo}</p>
                <a href="suprithhb54@gmail.com"><p className='my-4 text-neutral-400'>{CONTACT.email}</p></a>
            </div>
        
    </div>
  )
}
export default Contact