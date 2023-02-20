import React, { FC, PropsWithChildren, useContext} from 'react'

type cardMen = string[]

const MenuCard:FC<PropsWithChildren> =(props, cardMenus:cardMen)=> {
   
  return (
    <div className='card w-[217px]'>
      <div>
      <ul>
        <li className='hover:bg-[#f0eeee] p-2' >
          <div>Home</div>
        </li>
        <li className='hover:bg-[#f0eeee] p-2'>
          <div>Home</div>
        </li>
        <li className='hover:bg-[#f0eeee] p-2'>
          <div>Home</div>
        </li>
        {/* <li>Clear</li>
        <li>Delete</li>
        <li>Profile</li> */}
      </ul>
      </div>
      

    </div>
  )
}

export default MenuCard