import React, { useState, useEffect,useContext } from 'react';
import "../../assets/Styles/Page1.css"
// import ''
import { ElementsContext } from '../Layout';
function DefaultSideBar() {
    const layoutContext=useContext(ElementsContext);
    
    return (
        <>
                <div className="my-3">تنظیمات صفحه</div>

                <div className="flex flex-row justify-between p-[7px] mobile:flex-col mobile:items-center">
                    <div className="text-[12px]  my-3">فاصله بین فریم ها</div>
                    <button className="text-[#6C6E78]  gap-6 font-medium border rounded-lg text-[11px] px-5 py-1  justify-between inline-flex items-center " type="button">پیش فرض 
                        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                </div>
                <div className="flex flex-row justify-between p-[7px]  ">
                    <div className="text-[12px] my-1 ">حاشیه</div>
                    <button className="left-sidebar-input" type="button">16 
                    </button>               
                </div>
                <div className="flex flex-row justify-between p-[7px] my-0">
                    <div className="text-[12px] my-1">فاصله از دیواره</div>
                    <button className="left-sidebar-input" type="button">24
                    </button>    
                </div>      
        </>
        );
    }
    
    export default DefaultSideBar;
