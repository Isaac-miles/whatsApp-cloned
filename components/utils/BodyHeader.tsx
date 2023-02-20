import { useContext } from "react"
import { ChatContext } from "../../store/chat-context"
import Image from 'next/image'
import {Fragment, useState} from 'react'
import {VscEllipsis,VscDeviceCameraVideo} from 'react-icons/vsc';
import { AiOutlineSearch} from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { RxDividerVertical } from "react-icons/rx";



function BodyHeader() {
  const ctx = useContext(ChatContext)
  const activeChat = ctx.activeChat

  return (
    <Fragment>
      <section className='w-full h-14 float-left border-x items-center justify-between'>
        
       <div  className='fixed z-10 w-2/3'>
       { activeChat.id && (<div className= 'flex items-center justify-between bg-[#f0eeee] h-14 p-2 '> 
        
        <div className="flex items-center h-14 w-1/6">
        <Image src={activeChat.img} alt='profile pic' height={50} width={50} className='rounded-full'/>
         <h1 className="text-xl  ml-2">{activeChat.name}</h1>
        </div>

         <div className='hidden md:flex justify-between items-center mx-2'>
         <VscDeviceCameraVideo className='m-5  text-[#978f8f] text-3xl'/>
         <IoCallOutline className='m-5  text-[#978f8f] text-3xl'/>
         <RxDividerVertical className='m-5  text-[#978f8f] text-4xl'/>
         <AiOutlineSearch className='m-5  text-[#978f8f] text-3xl'/>
         <VscEllipsis className='m-5  text-[#978f8f] text-3xl'/>
       </div>

        </div>) }

        </div>

      </section>
     
    </Fragment>
  )
}
export default BodyHeader