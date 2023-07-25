import React, { useState,  useEffect } from 'react';
import "../assets/Styles/Page1.css"

function Header(props) {
	return (
		<>
            {
                props.pagename == "page1" ?
                    <div id={props.id} className="flex flex-col max-w-[350px] h-[600px] w-[100%] vsmmobile:h-[550px] smmobile:h-[550px] mobile:h-[550px] mb-5  tablet:h-[550px] bg-white">
                        <div className=" flex flex-col justify-center items-center border-dashed border-2  border-[#0066FF] rounded-lg mt-7 vsmmobile:h-[140px]  h-[150px] m-7  ">
                            <div  className="flex flex-col justify-center items-center w-[50px] h-[50px] mt-3 vsmmobile:h-[35px] vsmmobile:w-[35px] rounded-lg bg-[#dce5f1]">
                                <img className="w-[80%] h-[80%] m-[1px]" src="images/plus.png"/>
                            </div>
                            <div className="text-[#0066FF] m-4 mb-1">یک قالب را بکشید و رها کنید</div>
                        </div>
                    </div>:
                    <div id={props.id} class="flex flex-col max-w-[350px] h-[600px] w-[100%] vsmmobile:h-[550px] smmobile:h-[550px] mobile:h-[550px]  tablet:h-[550px] bg-white">
                        <div class="flex flex-col  justify-start items-start g mt-10  h-[220px] m-7 mb-4 vsmmobile:mb-0">
                            <div class="flex flex-row border-solid border-2 border-[#FFD1A1] border-b-0 rounded-full rounded-br-none items-center justify-around h-[13%] w-[30%] ">
                                <img class="w-[15px] h-[15px] vsmmobile:w-[10px] vsmmobile:h-[10px]" src="images/yellow pen.png"/>
                                <img class="w-[15px] h-[15px] vsmmobile:w-[10px] vsmmobile:h-[10px]" src="images/yellow trash.png"/>
                                <img class="w-[15px] h-[15px] vsmmobile:w-[10px] vsmmobile:h-[10px]" src="images/yellow hand.png"/>
                            </div>
                            <div class="border-solid p-2 border-2 border-[#FFD1A1] rounded-lg rounded-tr-none h-[80%] vsmmobile:h-[63%]  w-full">
                                <img class="rounded-lg w-full h-full " src="images/pic.jpg"/>
                            </div>
                        </div>
                        <div class=" flex flex-col justify-center items-center border-dashed border-2 border-[#0066FF] rounded-lg mt-2 vsmmobile:h-[140px]  h-[150px] m-7  ">
                            <div  class="flex flex-col justify-center items-center w-[50px] h-[50px] mt-3 vsmmobile:h-[35px] vsmmobile:w-[35px] rounded-lg bg-[#dce5f1]">
                                <img class="w-[80%] h-[80%] m-[1px]" src="images/plus.png"/>
                            </div>
                            <div class="text-[#0066FF] m-4 mb-1">یک قالب را بکشید و رها کنید</div>
                        </div>
                    </div>     
            }
        </>
    );
}

export default Header;