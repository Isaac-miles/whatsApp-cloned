import {Fragment} from 'react'
import Footer from './Footer'
import BodyHeader from './utils/BodyHeader'
import Chats from './utils/chats'
import MainChatWrapper from './utils/mainChatWrapper'



export default function MainChat() {
  return (
    <MainChatWrapper>
      <BodyHeader/>
      <Chats/>
      <Footer/>
    </MainChatWrapper>
  )
}
