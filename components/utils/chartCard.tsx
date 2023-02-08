import Image from 'next/image'
import {useState} from 'react'
import {VscChevronDown} from 'react-icons/vsc';


interface details{
  img:string,
  name: string,
  dateAndTime: string,
  message: string,

}
 function ChartCard(props: details) {
  const [hoverOver, setHover] = useState<boolean>(false)
  const hoverEnter =()=>{setHover(true)}
  const hoverLeave =()=>{setHover(false)}

  return (
    <div className='relative flex items-center h-20  m-0 border-y hover:bg-[#f0eeee]' onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
      <div className ='flex-none w-16 h-20 ml-1 py-4'>
        <div className='items-center w-full justify-center '>
        <Image src={props.img} alt='profile pic' height={49} width={49} className='rounded-full'/>
        </div>
      </div>

          <div className="w-full pr-1  h-20  m-0">

            <div className='flex justify-between h-10 w-full '>
              <div className=' w-4/5 text-xl pt-1'>{props.name}</div>
              <div className=' w-1/5 text-lg text-center'>{props.dateAndTime}</div>
            </div>

            <div className='flex justify-between h-10  w-full'>
              <div className=' w-4/5'>{props.message}</div>
              <div className='text-end w-1/5 text-lg'></div>
              { hoverOver && <VscChevronDown className='text-2xl'/>}
           
        </div>
           
          </div>
      </div>
    
 
  )
}

export default ChartCard