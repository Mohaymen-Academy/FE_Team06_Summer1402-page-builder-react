import React, { useState,  useEffect } from 'react';
import "../../assets/Styles/Page1.css"
function  Text() {
	return (
        <>
            <div className="fixed flex flex-col px-4 py-3 left-0 h-[94%] overflow-y-scroll  w-[300px] border border-t-0  bg-white smmobile:hidden vsmmobile:hidden ">
                <div className="my-3">متن</div>
                <div className="flex flex-row items-center justify-between mx-[8%] mobile:mx-0  my-5 w-[80%] h-[30px]  bg-white">
                    <img className="max-w-[25px] max-h-[23px] " src="images/1.png"/>
                    <img className="max-w-[25px] max-h-[23px] " src="images/2.png"/>
                    <img className="max-w-[25px] max-h-[23px] " src="images/3.png"/>
                    <img className="max-w-[25px] max-h-[23px] " src="images/4.png"/>
                    <img className="max-w-[25px] max-h-[23px] " src="images/5.png"/>
                    <img className="max-w-[25px] max-h-[23px] " src="images/6.png"/>
                    
                </div>
                <div className="flex flex-row justify-between py-[7px]">
                    <div className="text-[12px]  my-3">نوع متن</div>
                    <button className="text-[#6C6E78]  gap-2 font-medium border rounded-lg text-[11px] px-2 py-1  justify-between inline-flex items-center w-[35%] " type="button">متوسط
                        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                </div>
                <div className="flex flex-row justify-between py-[7px]">
                    <div className="text-[12px]  my-3">نوع عنوان</div>
                    <button className="text-[#6C6E78]  gap-2 font-medium border rounded-lg text-[11px] px-2 py-1  justify-between inline-flex items-center w-[35%] " type="button">پیش فرض
                        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col justify-between py-[7px]">
                    <div className="text-[12px] mb-3">متن مورد نظر خود را وارد کنید  </div>
                    <button className="left-sidebar-input w-full m-0 h-[100px] text-right " type="button">برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نا مفهموم از صنعت چاپ و با استفافاده از طراحان گرافیک است.</button>
                </div>
                <div className="flex flex-row items-center justify-between mx-[8%] mobile:mx-0  my-5 w-[80%] h-[30px]  bg-white">
                    <img className="max-w-[25px] max-h-[23px] " src="images/1.png"/>
                    <img className="max-w-[25px] max-h-[23px] " src="images/2.png"/>
                    <img className="max-w-[25px] max-h-[23px] " src="images/3.png"/>
                    <img className="max-w-[25px] max-h-[23px] " src="images/4.png"/>
                    <img className="max-w-[25px] max-h-[23px] " src="images/5.png"/>
                    <img className="max-w-[25px] max-h-[23px] " src="images/6.png"/>
                    
                </div>
                <div className="flex flex-row justify-between py-[7px]  ">
                    <div className="text-[12px] my-1 ">رنگ  </div>
                    <button className="left-sidebar-input bg-slate-400  " type="button"> 
                    </button>               
                </div>
                <div className="flex flex-row justify-between py-[7px]  ">
                    <div className="text-[12px] my-1 ">سایز فونت</div>
                    <button className="left-sidebar-input " type="button">16 
                    </button>               
                </div>
                <div className="flex flex-row justify-between py-[7px] my-0">
                    <div className="text-[12px] my-1">ارتفاع خطوط</div>
                    <button className="left-sidebar-input " type="button">24
                    </button>    
                </div>
                <div className="flex flex-row justify-between py-[7px]">
                    <div className="text-[12px]  my-3"> حاشیه</div>
                    <button className="text-[#6C6E78]  gap-2 font-medium border rounded-lg text-[11px] px-2 py-1  justify-between inline-flex items-center " type="button">4
                        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                </div>
                <div className="flex flex-row justify-between py-[7px] my-0">
                    <div className="text-[12px] my-1">فاصله گذاری </div>
                    <button className="left-sidebar-input " type="button">24
                    </button>    
                </div>
                <div className="flex flex-col justify-between py-[7px]">
                    <div className="text-[12px] mb-3">لینک دکمه </div>
                    <button className="left-sidebar-input w-full m-0 " type="button">لینک مورد نظر خود را وارد کنید</button>
                </div>
            </div>
        </>
        );
    }
    
    export default Text;
