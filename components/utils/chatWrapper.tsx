import React, { FC, PropsWithChildren } from 'react'
import ChartCard from './chartCard'

const ChatWrapper:FC<PropsWithChildren> =()=> {
  const chats = [
  {
  id:1,
  message: 'hello Miles',
  img: '/img2.jpg',
  name: 'Omokafe',
  timeAndDate:  new Date().getUTCFullYear().toLocaleString()
      },
  {
  id:2,
  message: 'yes o I got called into bar today',
  img: '/img2.jpg',
  name: 'David',
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
  message: 'my phone is faulty at the moment',
  img: '/img4.png',
  name: 'Isaac',
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
  message: 'wahala no too much ',
  img: '/img3.png',
  name: 'Milo',
  timeAndDate: new Date().getUTCFullYear().toLocaleString()
      },
  {
  id:7,
  message: 'wahala no too much ',
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
    const activeChat = chats.map((chat)=>(
       <ChartCard key={chat.id} name={chat.name} message={chat.message} img={chat.img} dateAndTime ={chat.timeAndDate} />

    ))
  return (
    <section className='relative top-28 w-full border-x overflow-y-auto  scroll-smooth '>
      {activeChat}
    </section>
  )
}


export default ChatWrapper