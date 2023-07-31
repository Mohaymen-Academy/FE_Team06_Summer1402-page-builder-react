import React, { Children } from 'react'

export default function YellowBox({children}) {
  return (
    <div class="flex flex-col max-w-[350px] h-[600px] w-[100%] vsmmobile:h-[550px] smmobile:h-[550px] mobile:h-[550px]  tablet:h-[550px] bg-white">
        <div class="flex flex-col  justify-start items-start g mt-10  h-[220px] m-7 mb-4 vsmmobile:mb-0">
            <div class="flex flex-row border-solid border-2 border-[#FFD1A1] border-b-0 rounded-full rounded-br-none items-center justify-around h-[13%] w-[30%] ">
                <img class="w-[15px] h-[15px] vsmmobile:w-[10px] vsmmobile:h-[10px]" src="images/yellow pen.png" />
                <img class="w-[15px] h-[15px] vsmmobile:w-[10px] vsmmobile:h-[10px]" src="images/yellow trash.png" />
                <img class="w-[15px] h-[15px] vsmmobile:w-[10px] vsmmobile:h-[10px]" src="images/yellow hand.png" />
            </div>
            <div class="border-solid p-2 border-2 border-[#FFD1A1] rounded-lg rounded-tr-none h-[80%] vsmmobile:h-[63%]  w-full">
                {children}
            </div>
        </div>
    </div>
  )
}
