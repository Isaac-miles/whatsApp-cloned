import { format, compareAsc } from 'date-fns'
import {createContext, FC, PropsWithChildren, useState} from 'react'
import { VscVmActive } from 'react-icons/vsc'




const timeFormat = format(new Date(), 'MM/dd/yyyy')

const chats = [
  {
  id:1,
  message:{
    messageIn:['Hello Dad', 'I am home'],
    messageOut:['Yes my Lovely Son']
  },
  img: '/img2.jpg',
  name: 'Josiah🤍',
  timeAndDate: timeFormat.toString()
      },
  {
  id:2,
  message:{
    messageIn:['Bro', 'howfa na'],
    messageOut:['I de owe Bill gate', 'na why I never show up since ']
  },
  img: '/img3.png',
  name: 'Elon Not Musk',
  timeAndDate:timeFormat.toString()
      },
  {
  id:3,
  message:{
    messageIn:['Hi'],
    messageOut:['My introduction is next week']
  },
  img: '/img4.png',
  name: 'Pelumi',
  timeAndDate: timeFormat.toString()
      },
  {
  id:4,
  message:{
    messageIn:['Bro', 'howfa na'],
    messageOut:['I de owe Bill gate']
  },
  img: '/img4.png',
  name: 'Cross',
  timeAndDate:timeFormat.toString()
      },
  {
  id:5,
  message:{
    messageIn:['Bro', 'howfa na'],
    messageOut:['I de owe Bill gate']
  },
  img: '/img2.jpg',
  name: 'Miles',
  timeAndDate:timeFormat.toString()
      },
  {
  id:6,
  message:{
    messageIn:['Bro', 'howfa na'],
    messageOut:['I de owe Bill gate']
  },
  img: '/img3.png',
  name: 'omolola',
  timeAndDate:timeFormat.toString()
      },
  {
  id:7,
  message:{
    messageIn:['Bro', 'howfa na'],
    messageOut:['I de owe Bill gate']
  },
  img: '/img2.jpg',
  name: 'Helen',
  timeAndDate:timeFormat.toString()
      },
  {
  id:8,
  message:{
    messageIn:['Bro', 'howfa na'],
    messageOut:['I de owe Bill gate']
  },
  img: '/img4.png',
  name: 'Mathew',
  timeAndDate:timeFormat.toString()
      },
  {
  id:9,
  message:{
    messageIn:['Bro', 'howfa na'],
    messageOut:['I de owe Bill gate']
  },
  img: '/img3.png',
  name: 'John',
  timeAndDate: timeFormat.toString()
      },
  {
  id:10,
  message:{
    messageIn:['Bro', 'howfa na'],
    messageOut:['I de owe Bill gate']
  },
  img: '/img2.jpg',
  name: 'durela',
  timeAndDate: timeFormat.toString()
      },
  {
  id:11,
  message:{
    messageIn:['Bro', 'howfa na'],
    messageOut:['I de owe Bill gate']
  },
  img: '/img2.jpg',
  name: 'Joha',
  timeAndDate: timeFormat.toString()
      },
  {
  id:12,
  message:{
    messageIn:['Bro', 'howfa na'],
    messageOut:['I de owe Bill gate']
  },
  img: '/img2.jpg',
  name: 'ken',
  timeAndDate: timeFormat.toString()
      },
  {
  id:13,
  message:{
    messageIn:['Bro', 'howfa na'],
    messageOut:['I de owe Bill gate']
  },
  img: '/img2.jpg',
  name: 'Talker',
  timeAndDate: timeFormat.toString()
      },
  {
  id:14,
  message:{
    messageIn:['Bro', 'howfa na'],
    messageOut:['I de owe Bill gate']
  },
  img: '/img2.jpg',
  name: 'Maccaronni',
  timeAndDate: timeFormat.toString()
      },
  {
  id:15,
  message:{
    messageIn:['Bro', 'howfa na'],
    messageOut:['I de owe Bill gate']
  },
  img: '/img2.jpg',
  name: 'Tao',
  timeAndDate: timeFormat.toString()
      },
  {
  id:16,
  message:{
    messageIn:['Bro', 'howfa na'],
    messageOut:['I de owe Bill gate']
  },
  img: '/img2.jpg',
  name: 'Debo',
  timeAndDate: timeFormat.toString()
      },
  {
  id:17,
  message:{
    messageIn:['Bro', 'howfa na'],
    messageOut:['I de owe Bill gate']
  },
  img: '/img2.jpg',
  name: 'Sydney',
  timeAndDate: timeFormat.toString()
      },
  {
  id:18,
  message:{
    messageIn:['Bro', 'howfa na'],
    messageOut:['I de owe Bill gate']
  },
  img: '/img2.jpg',
  name: 'Jolie',
  timeAndDate: timeFormat.toString()
      },
  {
  id:19,
  message:{
    messageIn:['Bro', 'howfa na'],
    messageOut:['I de owe Bill gate']
  },
  img: '/img2.jpg',
  name: 'Tenni',
  timeAndDate: timeFormat.toString()
      },
  {
  id:20,
  message:{
    messageIn:['Bro', 'howfa na'],
    messageOut:['I de owe Bill gate']
  },
  img: '/img2.jpg',
  name: 'Buju',
  timeAndDate: timeFormat.toString()
      },
  {
  id:21,
  message:{
    messageIn:['Bro', 'howfa na'],
    messageOut:['I de owe Bill gate']
  },
  img: '/img2.jpg',
  name: 'Davido',
  timeAndDate: timeFormat.toString()
      }
    ]

type Chat = {
  id: number,
  name: string,
  img: string,
  message:{
    messageIn: string[],
    messageOut: string[]
  },
  timeAndDate: string,
}[]
type activeChat = {
  id: number,
  name: string,
  img: string,
  message:{
    messageIn: string[],
    messageOut: string[]
  },
  timeAndDate: string,
}

 interface chatContextType {
  chats:Chat,
  activeChat:activeChat,
  menuCard:boolean
  addChat: (id:number)=>void
  delChat: (id:number)=>void
  hoverMenuOpen:(id:number)=>void
  hoverMenuClose: (id:number)=>void

}


 export const ChatContext = createContext<chatContextType>({
  chats:[],
  menuCard:false,
  activeChat: {} as activeChat,
  addChat: ()=>{},
  delChat: ()=>{},
  hoverMenuOpen: ()=>{},
  hoverMenuClose: ()=>{},
 })

 const ChatContextProvider: FC<PropsWithChildren> = (props) =>{
  const [chat, setChats] =  useState<Chat>(chats);
  const [activeChat, setActiveChat] =  useState<activeChat>({} as activeChat);
  const [menuCard, setMenuCard] = useState<boolean>(false)
  
  const hoverMenuOpen =(id:number)=>{
    setMenuCard(true)
    console.log(menuCard);
    
    }
 
  const hoverMenuClose =(id:number)=>{
    setMenuCard(false)
    }
 
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
    delChat,
    menuCard,
    hoverMenuOpen,
    hoverMenuClose
  };

  return (
    <ChatContext.Provider value={value}>
      {props.children}
    </ChatContext.Provider>
  )
 }

 export default ChatContextProvider