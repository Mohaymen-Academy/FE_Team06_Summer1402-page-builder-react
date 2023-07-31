import React, { useState, useEffect, useContext } from 'react';
import { ElementsContext } from '../Layout';

import DropDown from '../DropDown';
import FileUploader from '../../utility/FileUploader';
export default function Slider() {
  const layoutContext = useContext(ElementsContext);
  function handleSetting(func , value)
  {
      layoutContext.current.setters[func](value);
  }
  console.log("HERE ", layoutContext.current.setters)
  return (
    <div className="fixed flex flex-col px-4 py-3 left-0 h-[94%] overflow-y-auto  w-[300px] border border-t-0  bg-white smmobile:hidden vsmmobile:hidden ">
      <div className="my-3">اسلایدر
      </div>
      <div className="flex flex-row items-center justify-between mx-[8%] mobile:mx-0  my-5 w-[80%] h-[30px]  bg-white">
                    <img className="max-w-[25px] max-h-[23px] " src="images/2.png" onClick={()=>handleSetting("setalign",1) } />
                    <img className="max-w-[25px] max-h-[23px] " src="images/1.png" onClick={()=>handleSetting("setalign",2) } />
                    <img className="max-w-[25px] max-h-[23px] " src="images/3.png" onClick={()=>handleSetting("setalign",3) } />
                    <img className="max-w-[25px] max-h-[23px] " src="images/4.png" onClick={()=>handleSetting("setalign",4) } />
                    <img className="max-w-[25px] max-h-[23px] " src="images/5.png" onClick={()=>handleSetting("setalign",5) } />
                    <img className="max-w-[25px] max-h-[23px] " src="images/6.png" onClick={()=>handleSetting("setalign",6) } />
      </div>
      <div className="flex flex-row justify-between py-[7px]">
          <DropDown Default=" ساختار اسلاید خود را انتخاب کنید" items={[1,2,3,4]} width="100%" setVal = {handleSetting} func="settype" />
      </div>
      <div className="flex flex-row justify-between py-[7px]  ">
          <div className="text-[12px] my-1 ">حاشیه</div>
          <input className="left-sidebar-input text-center " style={{width:"20%"}} onChange={(e) => handleSetting("setpadding",e.target.value)} defaultValue="16"></input>
      </div>
      <div className="flex flex-row justify-between py-[7px] my-0">
          <div className="text-[12px] my-1">فاصله</div>
          <input className="left-sidebar-input text-center " style={{width:"20%"}} onChange={(e) => handleSetting("setgap",e.target.value)} defaultValue="24"></input>
      </div>
      <div className="flex flex-row justify-between py-[7px]">
          <div className="text-[12px]  my-3">تعداد محتوای اسلایدر</div>
          <DropDown Default="4" items={[1,2,3,4]} width="35%" setVal = {handleSetting} func="setslideNumber"/>
      </div>
      <div className="flex flex-row justify-between py-[7px]">
          <div className="text-[12px]  my-3">نحوه نمایش اسلایدر</div>
          <DropDown Default="4" items={[1,2,3,4]} width="35%" setVal = {handleSetting} func="setdisplay"/>
      </div>
      <div className="flex flex-row justify-between py-[7px]">
          <div className="text-[12px]  my-3">نوع انتقال </div>
          <DropDown Default=" تمام صفحه" items={[1,2,3,4]} width="35%" setVal = {handleSetting} func="settransition"/>
      </div>
      <FileUploader setVal = {handleSetting} func="setimage"/>
      <div className="flex flex-row justify-between py-[7px]">
                    <div className="text-[12px]  my-3">عرض ویدیو</div>
                    <DropDown Default="پیش فرض" items={[1,2,3,4]} width="35%" setVal = {handleSetting} func="setwidthImg"/>
        </div>
    </div >
  )
}

// {/* <div
//   className='flex flex-col gap-3'>
  
//   {/* <div className="flex flex-row justify-between py-[7px]  ">
//     <div className="text-[12px] my-1 ">پخش خودکار</div>
//     <label class="relative inline-flex items-center cursor-pointer">
//       <input type="checkbox" value="" className="sr-only peer" />
//       <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//     </label>
//   </div> */}


// </div> */}