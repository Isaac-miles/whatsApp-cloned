import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'

import { VscChromeMaximize,VscChromeClose,VscChromeMinimize} from 'react-icons/vsc';

 function Header() {
  return (

    <header className='fixed h-10 top-0 z-30 p-0 flex w-full items-center justify-between bg-[#075e54] '>
      <div className='flex -mx-20 justify-center md:w-1/5'>
     
      <div className ='relative h-10'>
      {/* <Image src="https://rb.gy/vsvv2o" alt='' width={50} height= {50}/> */}
      <h1 className='text-white text-center p-1'>whatsUp</h1>

      </div>

      </div>

       <div className='hidden md:flex justify-between items-center  mx-2 h-10'>
        <ul>
          <li className='uLink'><VscChromeMinimize className='headerLink'/></li>
          <li className='uLink'><VscChromeMaximize className='headerLink'/></li>
          <li className='uLink'><VscChromeClose className='headerLink'/></li>
          <li></li>
          <li></li>
        </ul>
       </div>
    </header>
  )
}


export default Header