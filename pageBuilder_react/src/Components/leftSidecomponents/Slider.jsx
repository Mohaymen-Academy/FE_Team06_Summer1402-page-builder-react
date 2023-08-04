import React, { useState, useEffect, useContext } from 'react';
import { ElementsContext } from '../Layout';
import { getValue } from '../../utility/Functions';
import DropDown from '../DropDown';
import FileUploader from '../../utility/FileUploader';
import Align from '../../utility/Align';

export default function Slider() {
  const layoutContext = useContext(ElementsContext);
  function handleSetting(func , value)
  {
      layoutContext.current.setters[func](value);
  }
  return (
    <>
      <div className="my-3">اسلایدر
      </div>
      <Align type="item" handleSetting={handleSetting} Default={getValue(layoutContext,"align")} />

      <div className="flex flex-col justify-between py-[7px]">
      <div className="text-[12px]  my-3">ساختار اسلایدر را انتخاب کنید  </div>
      <DropDown Default={80} width="100%"
                        title_items={{
                            80: 'پیش فرض',
                            100: 'یک و نیم برابر',
                            120: 'دو برابر',
                            240: 'سه برابر',
                        }}
                        setVal={handleSetting} func="setwidth" />

      </div>
      <div className="flex flex-row justify-between py-[7px]  ">
          <div className="text-[12px] my-1 ">حاشیه</div>
          <input className="left-sidebar-input text-center " style={{width:"20%"}} onChange={(e) => handleSetting("setpadding",e.target.value)} defaultValue={getValue(layoutContext,'padding')}></input>
      </div>
      <div className="flex flex-row justify-between py-[7px] my-0">
          <div className="text-[12px] my-1">فاصله</div>
          <input className="left-sidebar-input text-center " style={{width:"20%"}} onChange={(e) => handleSetting("setgap",e.target.value)} defaultValue={getValue(layoutContext,'gap')}></input>
      </div>
      <div className="flex flex-row justify-between py-[7px]">
          <div className="text-[12px]  my-3">تعداد محتوای اسلایدر</div>
          <DropDown Default={80} width="35%"
                        title_items={{
                            80: 'پیش فرض',
                            100: 'یک و نیم برابر',
                            120: 'دو برابر',
                            240: 'سه برابر',
                        }}
                        setVal={handleSetting} func="setwidth" />
      </div>
      <div className="flex flex-row justify-between py-[7px]">
          <div className="text-[12px]  my-3">نحوه نمایش اسلایدر</div>
          <DropDown Default={80} width="35%"
                        title_items={{
                            80: 'پیش فرض',
                            100: 'یک و نیم برابر',
                            120: 'دو برابر',
                            240: 'سه برابر',
                        }}
                        setVal={handleSetting} func="setwidth" />
      </div>
      <div className="flex flex-row justify-between py-[7px]">
          <div className="text-[12px]  my-3">نوع انتقال </div>
          <DropDown Default={80} width="35%"
                        title_items={{
                            80: 'پیش فرض',
                            100: 'یک و نیم برابر',
                            120: 'دو برابر',
                            240: 'سه برابر',
                        }}
                        setVal={handleSetting} func="setwidth" />
      </div>
      <FileUploader setVal = {handleSetting} func="setimage"/>
      <div className="flex flex-row justify-between py-[7px]">
                    <div className="text-[12px]  my-3">عرض عکس</div>
                    <DropDown Default={80} width="35%"
                        title_items={{
                            80: 'پیش فرض',
                            100: 'یک و نیم برابر',
                            120: 'دو برابر',
                            240: 'سه برابر',
                        }}
                        setVal={handleSetting} func="setwidth" />
        </div>
                        <div className="flex flex-row justify-between py-[7px] my-0">
                            <div className="text-[12px] my-1">گوشه ها</div>
                            <input className="left-sidebar-input text-center " style={{width:"20%"}} onChange={(e) => handleSetting("setradius",e.target.value)} defaultValue={getValue(layoutContext,'radius')}></input>
                        </div>
    </ >
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