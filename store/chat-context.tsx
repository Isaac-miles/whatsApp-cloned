import { format, compareAsc } from 'date-fns'
import {createContext, FC, PropsWithChildren, useState} from 'react'
import { VscVmActive } from 'react-icons/vsc'




const timeFormat = format(new Date(), 'MM/dd/yyyy')

const chats = [
  {
  id:1,
  message: 'hello  ⚽',
  img: '/img2.jpg',
  name: 'Josiah🤍',
  timeAndDate: timeFormat.toString()
      },
  {
  id:2,
  message: 'I de owe Bill gate',
  img: '/img3.png',
  name: 'Elon Musk',
  timeAndDate:timeFormat.toString()
      },
  {
  id:3,
  message: 'My introduction is next week',
  img: '/img4.png',
  name: 'Pelumi',
  timeAndDate: timeFormat.toString()
      },
  {
  id:4,
  message: 'Abeg send me 2k😭😭...',
  img: '/img4.png',
  name: 'Cross',
  timeAndDate:timeFormat.toString()
      },
  {
  id:5,
  message: 'wahala no too much ',
  img: '/img2.jpg',
  name: 'Miles',
  timeAndDate:timeFormat.toString()
      },
  {
  id:6,
  message: 'wahala be like church projects ',
  img: '/img3.png',
  name: 'omotunde',
  timeAndDate:timeFormat.toString()
      },
  {
  id:7,
  message: 'Heard you getting married ',
  img: '/img2.jpg',
  name: 'Helen',
  timeAndDate:timeFormat.toString()
      },
  {
  id:8,
  message: 'wahala no too much ',
  img: '/img4.png',
  name: 'Mathew',
  timeAndDate:timeFormat.toString()
      },
  {
  id:9,
  message: 'wahala no too much ',
  img: '/img3.png',
  name: 'John',
  timeAndDate: timeFormat.toString()
      },
  {
  id:10,
  message: 'wahala no too much ',
  img: '/img2.jpg',
  name: 'durela',
  timeAndDate: timeFormat.toString()
      },
  {
  id:11,
  message: 'wahala no too much ',
  img: '/img2.jpg',
  name: 'Joha',
  timeAndDate: timeFormat.toString()
      },
  {
  id:12,
  message: 'wahala no too much ',
  img: '/img2.jpg',
  name: 'ken',
  timeAndDate: timeFormat.toString()
      },
  {
  id:13,
  message: 'wahala no too much ',
  img: '/img2.jpg',
  name: 'Talker',
  timeAndDate: timeFormat.toString()
      },
  {
  id:14,
  message: 'wahala no too much ',
  img: '/img2.jpg',
  name: 'Maccaronni',
  timeAndDate: timeFormat.toString()
      },
  {
  id:15,
  message: 'wahala no too much ',
  img: '/img2.jpg',
  name: 'Tao',
  timeAndDate: timeFormat.toString()
      },
  {
  id:16,
  message: 'wahala no too much ',
  img: '/img2.jpg',
  name: 'Debo',
  timeAndDate: timeFormat.toString()
      },
  {
  id:17,
  message: 'wahala no too much ',
  img: '/img2.jpg',
  name: 'Sydney',
  timeAndDate: timeFormat.toString()
      },
  {
  id:18,
  message: 'wahala no too much ',
  img: '/img2.jpg',
  name: 'Jolie',
  timeAndDate: timeFormat.toString()
      },
  {
  id:19,
  message: 'wahala no too much ',
  img: '/img2.jpg',
  name: 'Tenni',
  timeAndDate: timeFormat.toString()
      },
  {
  id:20,
  message: 'wahala no too much ',
  img: '/img2.jpg',
  name: 'Buju',
  timeAndDate: timeFormat.toString()
      },
  {
  id:21,
  message: 'wahala no too much ',
  img: '/img2.jpg',
  name: 'Davido',
  timeAndDate: timeFormat.toString()
      }
    ]

type Chat = {
  id: number,
  name: string,
  img: string,
  message: string,
  timeAndDate: string,
}[]
type activeChat = {
  id: number,
  name: string,
  img: string,
  message: string,
  timeAndDate: string,
}

 interface chatContextType {
  chats:Chat,
  activeChat:activeChat,
  addChat: (id:number)=>void,
  delChat: (id:number)=>void

}


 export const ChatContext = createContext<chatContextType>({
  chats:[],
  activeChat: {} as activeChat,
  addChat: ()=>{},
  delChat: ()=>{}
 })

 const ChatContextProvider: FC<PropsWithChildren> = (props) =>{
  const [chat, setChats] =  useState<Chat>(chats);
  const [activeChat, setActiveChat] =  useState<activeChat>({} as activeChat);
 
  const addChat = (id:number): void =>{
    // find the specified chat
    const activeChat = chat.find((chat)=>chat.id === id)
    if(activeChat)setActiveChat(activeChat)
    
    // console.log(id,  activeChat);

  }
  const delChat = (id:number)=>{}

  const value ={
    chats: chat,
    activeChat,
    addChat,
    delChat
  };

  return (
    <ChatContext.Provider value={value}>
      {props.children}
    </ChatContext.Provider>
  )
 }

 export default ChatContextProvider