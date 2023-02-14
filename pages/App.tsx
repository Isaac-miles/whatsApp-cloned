import ChatContextProvider from '../store/chat-context'
import Header from '../components/Header'
import MainChat from '../components/MainChat'
import Sidebar from '../components/Sidebar'

export default function App() {
  return (
    <ChatContextProvider>
     <Header/>
      <Sidebar/> 
       <MainChat/> 
    </ChatContextProvider>
  )
}
