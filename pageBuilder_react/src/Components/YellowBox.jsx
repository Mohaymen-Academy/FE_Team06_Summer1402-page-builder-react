import React from 'react'

export default function YellowBox({ children }) {
  return (
    <div
      // onDrag={(e)=>console.log(e)}
      className="pointer-events-none flex flex-col w-[100%] h-[100%] ">
      <div className="pointer-events-none flex flex-col  justify-start items-start  h-fit vsmmobile:mb-0">
        <div className="pointer-events-none flex flex-row border-solid border-2 border-[#FFD1A1] border-b-0 rounded-full rounded-br-none items-center justify-around ">
          <img className="pointer-events-none w-[15px] h-[15px] vsmmobile:w-[10px] vsmmobile:h-[10px]" src="images/yellow pen.png" />
          <img className="pointer-events-none w-[15px] h-[15px] vsmmobile:w-[10px] vsmmobile:h-[10px]" src="images/yellow trash.png" />
          <img className="pointer-events-none w-[15px] h-[15px] vsmmobile:w-[10px] vsmmobile:h-[10px]" src="images/yellow hand.png" />
        </div>
        <div className="pointer-events-none  flex justify-center items-center border-solid border-2 border-[#FFD1A1] rounded-lg rounded-tr-none h-[80%] vsmmobile:h-[63%]  w-full">
          {children}
        </div>
      </div>
    </div>
  )
}
