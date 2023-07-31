import React, { useState, useEffect,useContext } from 'react';
import "../../assets/Styles/Page1.css"
import ColorPicker from '../../utility/ColorPicker';
import { ElementsContext } from '../Layout';
function CardSideBar({ setters }) {
    const layoutContext = useContext(ElementsContext);
    const setter = layoutContext.current.setters
    console.log("HERE ",layoutContext.current.setters)
    return (
        <>
            <div className="fixed flex flex-col px-4 py-3 left-0 h-[94%] overflow-y-scroll  w-[300px] border border-t-0  bg-white smmobile:hidden vsmmobile:hidden ">
                <div className="my-3">کارت</div>
                <div className="flex flex-row items-center justify-between mx-[8%] mobile:mx-0  my-5 w-[80%] h-[30px]  bg-white">
                    <img className="max-w-[25px] max-h-[23px] " src="images/1.png" onClick={()=>setter.setalign(1) } />
                    <img className="max-w-[25px] max-h-[23px] " src="images/2.png" onClick={()=>setter.setalign(2) } />
                    <img className="max-w-[25px] max-h-[23px] " src="images/3.png" onClick={()=>setter.setalign(3) } />
                    <img className="max-w-[25px] max-h-[23px] " src="images/4.png" onClick={()=>setter.setalign(4) } />
                    <img className="max-w-[25px] max-h-[23px] " src="images/5.png" onClick={()=>setter.setalign(5) } />
                    <img className="max-w-[25px] max-h-[23px] " src="images/6.png" onClick={()=>setter.setalign(6) } />
                </div>
                <div className="flex flex-row justify-between py-[7px]">
                    <button className="text-[#6C6E78]  font-medium border rounded-lg text-[11px] px-2 py-1  justify-between inline-flex items-center w-full h-[35px]" type="button">نوع کارت خود را انتخاب کنید
                        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-row justify-between py-[7px]">
                    <div className="text-[12px]  my-3">اندازه کارت</div>
                    <button className="text-[#6C6E78]  gap-2 font-medium border rounded-lg text-[11px] px-2 py-1  justify-between inline-flex items-center w-[35%] " type="button">متوسط
                        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-row justify-between py-[7px]">
                    <div className="text-[12px]  my-3">عرض کارت</div>
                    <button className="text-[#6C6E78]  gap-2 font-medium border rounded-lg text-[11px] px-2 py-1  justify-between inline-flex items-center w-[35%] " type="button">پیش فرض
                        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-row justify-between py-[7px]  ">
                    <div className="text-[12px] my-1 ">حاشیه</div>
                    <button className="left-sidebar-input " type="button">16
                    </button>
                </div>
                <div className="flex flex-row justify-between py-[7px] my-0">
                    <div className="text-[12px] my-1">فاصله</div>
                    <button className="left-sidebar-input " type="button">24
                    </button>
                </div>
                <div className="flex flex-row justify-between py-[7px]">
                    <div className="text-[12px]  my-3">گوشه ها</div>
                    <button className="text-[#6C6E78]  gap-2 font-medium border rounded-lg text-[11px] px-2 py-1  justify-between inline-flex items-center " type="button">4
                        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col justify-between py-[7px]">
                    <div className="text-[12px] mb-3">متن 1</div>
                    <button className="left-sidebar-input w-full m-0 " type="button">لورم ایپسوم </button>
                </div>
                <div className="flex flex-row items-center justify-between mx-[8%] mobile:mx-0  my-5 w-[80%] h-[30px]  bg-white">
                    <img className="max-w-[25px] max-h-[23px] " src="images/1.png" />
                    <img className="max-w-[25px] max-h-[23px] " src="images/2.png" />
                    <img className="max-w-[25px] max-h-[23px] " src="images/3.png" />
                    <img className="max-w-[25px] max-h-[23px] " src="images/4.png" />
                    <img className="max-w-[25px] max-h-[23px] " src="images/5.png" />
                    <img className="max-w-[25px] max-h-[23px] " src="images/6.png" />

                </div>
                <div className=" flex flex-col justify-center items-center border-dashed border-2 border-[#0066FF] rounded-lg mobile:h-[100px] h-[150px]  mb-3 ">
                    <div className="flex flex-col justify-center items-center w-[50px] h-[50px] rounded-lg bg-[#dce5f1]">
                        <img className="w-[25px] h-[25px]" src="images/plus.png" />
                    </div>
                    <div className="text-[#0066FF] m-4 mb-1 mobile:text-xs">افزودن عکس</div>
                    <div className="text-xs mobile:hidden">حجم عکس تا 5 مگابایت و با فرمت PNG, JPG</div>
                </div>
                <ColorPicker title={'رنگ پس زمینه'} />
                <ColorPicker title={'رنگ متن'} />

                <div className="flex flex-row justify-between py-[7px]  ">
                    <div className="text-[12px] my-1 ">آیکون دار</div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </div>
                <div className="flex flex-col justify-between py-[7px]">
                    <div className="text-[12px] mb-3">لینک دکمه </div>
                    <button className="left-sidebar-input w-full m-0 " type="button">لینک مورد نظر خود را وارد کنید</button>
                </div>
            </div>
        </>
    );
}

export default CardSideBar;
