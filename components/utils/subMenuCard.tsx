import React, { FC, PropsWithChildren} from 'react'

const MenuCard:FC<PropsWithChildren <{cardMen:string[]}>> =(props)=> {
  
  return (
    <div className='card w-[217px] z-20'>
      <div>
      <ul>
       {props.cardMen.map((menu)=> (<li key={menu} className='hover:bg-[#f0eeee] p-2' >
          <div>{menu}</div>
        </li>))}
      </ul>
      </div>
      

    </div>
  )
}

export default MenuCard