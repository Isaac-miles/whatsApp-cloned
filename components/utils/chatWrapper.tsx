import React, { FC, PropsWithChildren, useContext} from 'react'
import { ChatContext } from '../../store/chat-context';


import ChartCard from './chartCard'

const ChatWrapper:FC<PropsWithChildren> =()=> {
    const chatCtx = useContext(ChatContext);

    const CurrentChat = chatCtx.chats.map((chat)=>(
       <ChartCard key={chat.id} name={chat.name} message={chat.message} img={chat.img} dateAndTime ={chat.timeAndDate} id={chat.id} clicked={chatCtx.addChat.bind(null, chat.id)}/>

    ))
  return (
    <section className='relative top-40 w-full h-screen border-x overflow-y-auto  scroll-smooth '>
      {CurrentChat}
    </section>
  )
}


export default ChatWrapper