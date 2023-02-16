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
  const activeChat = ctx.activeChat

  return (
      <section className=' bg-[#e1d6c7] h-[100%] float-left border-x  items-center   overflow-y-auto'>
        <>
        <div className="fixed w-32 h-10 text-center
        rounded-md p-2 bg-[#eaeaea] text-lg left-[50%]  mt-3 mx-[10%] text-black">{activeChat.timeAndDate}</div>
        
        <div id="messageIn" className=" w-[95%] min-h-fit h-28 mx-5 mt-14 p-2 bg-red-500">
          <div className="w-[60%] h-24  bg-white rounded-md p-1">
            {/* <span id="tain-in" className="w-10 h-10 bg-stone-900 rounded-r-xl">Hello</span> */}
            <span>{activeChat.message}</span>
          </div>
        </div>
        <div id="messageIn" className=" w-[95%] min-h-fit h-28 m-5 p-2 bg-red-500">
          <div className="w-[60%] h-24 float-right bg-white">
          <span></span>
          </div>

        </div>
        </>
      </section>
  )
}
export default Chats