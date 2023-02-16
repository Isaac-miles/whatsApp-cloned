import React, { FC, PropsWithChildren,useContext } from 'react'
import { ChatContext } from '../../store/chat-context';
import ChartCard from './chartCard'

const MainChatWrapper:FC<PropsWithChildren> =(props)=> {
  const ctx = useContext(ChatContext)
  const activeChat = ctx.activeChat
  return (
      <div className='flex flex-col w-2/3 h-screen justify-between  float-right'>
         { activeChat.id && props.children}
      </div>

  )
}


export default MainChatWrapper