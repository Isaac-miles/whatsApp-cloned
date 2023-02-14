import React, { FC, PropsWithChildren } from 'react'
import ChartCard from './chartCard'

const MainChatWrapper:FC<PropsWithChildren> =(props)=> {
  return (
      <div className='flex flex-col w-2/3 h-screen justify-between  float-right'>
         {props.children}
      </div>

  )
}


export default MainChatWrapper