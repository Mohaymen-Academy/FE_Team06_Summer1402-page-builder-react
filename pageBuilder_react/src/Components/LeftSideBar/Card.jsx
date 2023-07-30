import React, { useState,  useEffect } from 'react';
import "../assets/Styles/Page1.css"

function CardSideBar() {
	return (
        <>
            <div className="fixed flex flex-col px-4 py-3 left-0 h-screen  w-[300px] border border-t-0  bg-white smmobile:hidden vsmmobile:hidden ">
                <div className="my-3">کارت</div>
                <div className="flex flex-row items-center justify-between mx-[8%] mobile:mx-0  my-5 w-[80%] h-[30px]  bg-white">
                    <img className="max-w-[25px] max-h-[23px] " src="images/1.png"/>
                    <img className="max-w-[25px] max-h-[23px] " src="images/2.png"/>
                    <img className="max-w-[25px] max-h-[23px] " src="images/3.png"/>
                    <img className="max-w-[25px] max-h-[23px] " src="images/4.png"/>
                    <img className="max-w-[25px] max-h-[23px] " src="images/5.png"/>
                    <img className="max-w-[25px] max-h-[23px] " src="images/6.png"/>
                    
                </div>
                <div className=" flex flex-col justify-center items-center border-dashed border-2 border-[#0066FF] rounded-lg mobile:h-[100px] h-[150px] ml-3 mb-3 ">
                    <div  className="flex flex-col justify-center items-center w-[50px] h-[50px] rounded-lg bg-[#dce5f1]">
                        <img className="w-[25px] h-[25px]" src="images/plus.png"/>
                    </div>
                    <div className="text-[#0066FF] m-4 mb-1 mobile:text-xs">افزودن عکس</div>
                    <div className="text-xs mobile:hidden">حجم عکس تا 5 مگابایت و با فرمت PNG, JPG</div>
                    </div>
                <div className="flex flex-row justify-between p-[7px] mobile:flex-col mobile:items-center">
                    <div className="text-[12px]  my-3">عرض عکس</div>
                    <button className="text-[#6C6E78]  gap-6 font-medium border rounded-lg text-[11px] px-5 py-1  justify-between inline-flex items-center " type="button">پیش فرض 
                        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                </div>
                <div className="flex flex-row justify-between p-[7px]  ">
                    <div className="text-[12px] my-1 ">حاشیه</div>
                    <button className="left-sidebar-input " type="button">16 
                    </button>               
                </div>
                <div className="flex flex-row justify-between p-[7px] my-0">
                    <div className="text-[12px] my-1">فاصله</div>
                    <button className="left-sidebar-input " type="button">24
                    </button>    
                </div>
                <div className="flex flex-row justify-between p-[7px]">
                    <div className="text-[12px]  my-3">گوشه ها</div>
                    <button className="text-[#6C6E78]  gap-2 font-medium border rounded-lg text-[11px] px-2 py-1  justify-between inline-flex items-center " type="button">4
                        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                </div>
            </div>
        </>
        );
    }
    
    export default CardSideBar;
