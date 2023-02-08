import Image from 'next/image'
import {Fragment, useState} from 'react'
import { VscAdd,VscEllipsis,VscListFilter,VscArrowLeft} from 'react-icons/vsc';
import { TbCircleDotted } from "react-icons/tb";
import { AiOutlineSearch } from "react-icons/ai";



function Main() {

// const [txF, setTxF] = useState<boolean>(false)
// const focusTxf =() =>{
//  setTxF(true) 
// }
// const blurTxf =() =>{
//  setTxF(false) 
// }

  return (
    <Fragment>
      <section className='w-2/3 float-right border-x mt-10'>
        
       <div  className='fixed z-10 bg-[#f0eeee] w-full'>
        {/* profile section */}
        <div className= 'flex items-center justify-between h-14 p-2 '> 
         <Image src='/Passport.jpg' alt='profile pic' height={50} width={50} className='rounded-full'/>

         <div className='hidden md:flex justify-between items-center mx-2'>
         <TbCircleDotted className='m-5  text-[#978f8f] font-bold text-3xl'/>
         <VscAdd className='m-5  text-[#978f8f] font-bold text-3xl'/>
         <VscEllipsis className='m-5  text-[#978f8f] font-bold text-3xl'/>
       </div>
        
        </div>

        </div>

      </section>
     
    </Fragment>
  )
}
export default Main