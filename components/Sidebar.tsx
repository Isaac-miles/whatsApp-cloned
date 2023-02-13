import Image from 'next/image'
import {Fragment, useState} from 'react'
import { VscAdd,VscEllipsis,VscListFilter,VscArrowLeft} from 'react-icons/vsc';
import { TbCircleDotted } from "react-icons/tb";
import { AiOutlineSearch } from "react-icons/ai";
import ChatWrapper from './utils/chatWrapper';


function Sidebar() {

const [txF, setTxF] = useState<boolean>(false)
const focusTxf =() =>{
 setTxF(true) 
}
const blurTxf =() =>{
 setTxF(false) 
}

  return (
    <Fragment>
      <section className='w-1/3  float-left mt-10 '>
        
       <div  className='fixed z-10 w-1/3  '>
        {/* profile section */}
        <div className= 'flex items-center justify-between bg-[#f0eeee] h-14 p-2 '> 
         <Image src='/Passport.jpg' alt='profile pic' height={50} width={50} className='rounded-full'/>

         <div className='hidden md:flex justify-between items-center mx-2'>
         <TbCircleDotted className='m-5  text-[#978f8f] font-bold text-3xl'/>
         <VscAdd className='m-5  text-[#978f8f] font-bold text-3xl'/>
         <VscEllipsis className='m-5  text-[#978f8f] font-bold text-3xl'/>
       </div>
        
        </div>

        {/* search section */}
        <div className= 'flex items-center justify-between bg-[#ffffff]  w-full border'> 
          <div className='max-h-14 w-full m-auto'>
         <input type="search" onFocus={focusTxf} onBlur={blurTxf} placeholder='Search or start new chat' className='w-[95%] p-2 m-2 bg-[#f0eeee] rounded-md pl-14' />
        { !txF && <AiOutlineSearch className='relative -top-11 left-3  text-3xl  text-[#978f8f]'/>}
         { txF && <VscArrowLeft className='relative -top-11 left-3 text-3xl  text-[#075e54]'/>}
         </div>
       <VscListFilter className='mr-1 text-[#978f8f] font-bold text-3xl'/>
        
        </div>
        </div>
        <ChatWrapper/>

      </section>
     
    </Fragment>
  )
}
export default  Sidebar