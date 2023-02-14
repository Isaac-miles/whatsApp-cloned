import {VscSmiley} from 'react-icons/vsc';
import { MdAttachFile } from "react-icons/md";
import { BsMic } from "react-icons/bs";



function Footer() {

  return (
      <footer className='w-full h-14 float-left border-x  items-center justify-between overflow-hidden'>
        

       <div className= 'flex items-center justify-between bg-[#f0eeee] h-14 p-2 ' > 

         <div className='flex justify-between items-center mx-2'>
         <VscSmiley className='m-5  text-[#978f8f] text-3xl'/>
         <MdAttachFile className='m-5  text-[#978f8f] text-4xl'/>
        </div>
          <input type="text" placeholder='Type a Message' className='w-4/5 p-2 rounded-md focus:border-none' />
         <BsMic className='m-5  text-[#978f8f] text-4xl'/>

        </div>
      </footer>
  )
}
export default Footer