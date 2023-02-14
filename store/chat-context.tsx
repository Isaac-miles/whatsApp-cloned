import { TimeLike } from 'fs'
import {createContext, FC, PropsWithChildren, useState} from 'react'


const chats = [
  {
  id:1,
  message: 'hello dad ⚽',
  img: '/img2.jpg',
  name: 'Josiah🤍',
  timeAndDate:  new Date().getUTCFullYear().toLocaleString()
      },
  {
  id:2,
  message: 'I de owe Bill gate',
  img: '/img3.png',
  name: 'Elon Musk',
  timeAndDate: new Date().getUTCFullYear().toLocaleString()
      },
  {
  id:3,
  message: 'not so true ooo hhahahah',
  img: '/img4.png',
  name: 'Junior',
  timeAndDate:  new Date().getUTCFullYear().toLocaleString()
      },
  {
  id:4,
  message: 'I de Kuje Prison, na camera lense land me here...',
  img: '/img4.png',
  name: 'Mathew',
  timeAndDate: new Date().getUTCFullYear().toLocaleString()
      },
  {
  id:5,
  message: 'wahala no too much ',
  img: '/img2.jpg',
  name: 'Miles',
  timeAndDate: new Date().getUTCFullYear().toLocaleString()
      },
  {
  id:6,
  message: 'wahala be like church projects ',
  img: '/img3.png',
  name: 'omotunde',
  timeAndDate: new Date().getUTCFullYear().toLocaleString()
      },
  {
  id:7,
  message: 'Heard you getting married ',
  img: '/img2.jpg',
  name: 'Helen',
  timeAndDate: new Date().getUTCFullYear().toLocaleString()
      },
  {
  id:8,
  message: 'wahala no too much ',
  img: '/img4.png',
  name: 'Mathew',
  timeAndDate: new Date().getUTCFullYear().toLocaleString()
      },
  {
  id:9,
  message: 'wahala no too much ',
  img: '/img3.png',
  name: 'John',
  timeAndDate: new Date().getUTCFullYear().toLocaleString()
      },
  {
  id:10,
  message: 'wahala no too much ',
  img: '/img2.jpg',
  name: 'John',
  timeAndDate: new Date().getUTCFullYear().toLocaleString()
      }
    ]
    // {
    //   id:1,
    //   message: 'hello dad ⚽',
    //   img: '/img2.jpg',
    //   name: 'Josiah🤍',
    //   timeAndDate:  new Date().getUTCFullYear().toLocaleString()
    //       }
type Chat = {
  id: number,
  name: string,
  img: string,
  message: string,
  timeAndDate: string,
}[]

 interface chatContextType {
  chats:Chat,
  addChat: (id:number)=>any,
  delChat: (id:number)=>any

}


 export const ChatContext = createContext<chatContextType>({
  chats:[],
  addChat: ()=>{},
  delChat: ()=>{}
 })

 const ChatContextProvider: FC<PropsWithChildren> = (props) =>{
  const [chat, setChats] =  useState<Chat>([]);
  chats.map(ch=>chat.push(ch))

  const addChat = (id:number)=>{}
  const delChat = (id:number)=>{}

  const value ={
    chats: chat,
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