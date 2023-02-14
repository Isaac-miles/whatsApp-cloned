import React, { FC, PropsWithChildren, useContext} from 'react'
import { ChatContext } from '../../store/chat-context';


import ChartCard from './chartCard'

const ChatWrapper:FC<PropsWithChildren> =()=> {
    const chatCtx = useContext(ChatContext);

    const activeChat = chatCtx.chats.map((chat)=>(
       <ChartCard key={chat.id} name={chat.name} message={chat.message} img={chat.img} dateAndTime ={chat.timeAndDate} id={chat.id} />

    ))
  return (
    <section className='relative top-28 w-full border-x overflow-y-auto  scroll-smooth '>
      {activeChat}
    </section>
  )
}


export default ChatWrapper