import Image from 'next/image'
import {Fragment, useState} from 'react'
import {VscEllipsis,VscDeviceCameraVideo} from 'react-icons/vsc';
import { AiOutlineSearch} from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { RxDividerVertical } from "react-icons/rx";



function BodyHeader() {

  return (
    <Fragment>
      <section className='w-2/3 h-14 float-left border-x mt-10 items-center justify-between bg-green-600'>
        
       <div  className='fixed z-10 w-2/3'>
       <div className= 'flex items-center justify-between bg-[#f0eeee] h-14 p-2 '> 
         <Image src='/Passport.jpg' alt='profile pic' height={50} width={50} className='rounded-full'/>

         <div className='hidden md:flex justify-between items-center mx-2'>
         <VscDeviceCameraVideo className='m-5  text-[#978f8f] text-3xl'/>
         <IoCallOutline className='m-5  text-[#978f8f] text-3xl'/>
         <RxDividerVertical className='m-5  text-[#978f8f] text-4xl'/>
         <AiOutlineSearch className='m-5  text-[#978f8f] text-3xl'/>
         <VscEllipsis className='m-5  text-[#978f8f] text-3xl'/>
       </div>

        </div>

        </div>

      </section>
     
    </Fragment>
  )
}
export default BodyHeader