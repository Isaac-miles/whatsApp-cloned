import { FC, PropsWithChildren, useContext } from "react"
import { ChatContext } from "../../store/chat-context"

// type activeChat = {
//   id: number,
//   name: string,
//   img: string,
//   message: string,
//   timeAndDate: string,
// }

//  const  Chats:FC<PropsWithChildren> = (props: activeChat)=>{
 const  Chats:FC<PropsWithChildren> = (props)=>{
  const ctx = useContext(ChatContext)
  const messageIn = ctx.activeChat.message.messageIn
  const messageOut = ctx.activeChat.message.messageOut
  // console.log(messageIn);
    for(let m in messageIn){
      // console.log(messageIn[m]);
      
    }

  
  return (
      <section className=' bg-[#e1d6c7] h-[100%] float-left border-x  items-center   overflow-y-auto'>
        <>
        <div className="fixed w-32 h-10 text-center
        rounded-md p-2 bg-[#eaeaea] text-lg left-[50%]  mt-3 mb-10 mx-[10%] text-black">{ctx.activeChat.timeAndDate}</div>
        
       {messageIn.map((message)=>(<div key={message} id="messageIn" className=" w-[95%]   mx-5 mt-1 p-2 float-left ">
          <div className="max-w-[60%] float-left  bg-white rounded-md p-1">
            <span className="inline-block ">{message}</span>
            <span className="relative top-2 text-sm m-2">{ctx.activeChat.timeAndDate}</span>
          </div>
  
        </div>))}
       {messageOut.map((message)=>(<div key={message} id="messageOut" className=" w-[95%]  mx-5 mt-2 p-2  float-right ">
          <div className="max-w-[60%] float-right  bg-white rounded-md p-1">
            <span className="inline-block">{message}</span>
            <span className="relative top-2 text-sm m-2">{ctx.activeChat.timeAndDate}</span>
          </div>
  
        </div>))}
        </>
      </section>
  )
}
export default Chats