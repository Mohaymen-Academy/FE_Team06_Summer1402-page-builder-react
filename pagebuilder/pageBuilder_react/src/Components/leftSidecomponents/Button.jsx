import React, { useState, useEffect, useContext } from 'react';
import "../../assets/Styles/Page1.css"
import ColorPicker from '../../utility/ColorPicker';
import { ElementsContext } from '../Layout';
import DropDown from '../DropDown';
import FileUploader from '../../utility/FileUploader';
import Align from '../../utility/Align';

import { getValue } from '../../utility/Functions';
function Button() {
    const layoutContext = useContext(ElementsContext);
    const setter = layoutContext.current.setters
    function handleSetting(func, value) {
        layoutContext.current.setters[func](value);
    }
    return (
        <>
               <div className="my-3">دکمه</div>
               <Align  type="item" handleSetting={handleSetting} Default={getValue(layoutContext,"align")} />

                <div className="flex flex-row justify-between py-[7px]">
                    <div className="text-[12px]  my-3">اندازه دکمه</div>
                    <DropDown Default={getValue(layoutContext, 'size')} width="35%"
                        title_items={{
                            1: 'کوچک',
                            2: 'متوسط',
                            3: 'بزرگ',
                            4: 'خیل بزرگ',
                        }} setVal = {handleSetting} func="setsize" />
                </div>
                <div className="flex flex-row justify-between py-[7px]">
                    <div className="text-[12px]  my-3">عرض دکمه</div>
                    <DropDown Default={getValue(layoutContext, 'width')} width="35%"
                        title_items={{
                            60: 'پیش فرض',
                            80: 'یک و نیم برابر',
                            100: 'دو برابر',
                            120: 'سه برابر',
                        }} setVal = {handleSetting} func="setwidth" />
                </div>
                <div className="flex flex-row justify-between py-[7px]  ">
                    <div className="text-[12px] my-1 ">حاشیه</div>
                    <input className="left-sidebar-input text-center " style={{width:"20%"}} onChange={(e) => handleSetting("setpadding",e.target.value)} defaultValue={getValue(layoutContext, 'padding')}></input>
                </div>
                <div className="flex flex-row justify-between py-[7px] my-0">
                    <div className="text-[12px] my-1">فاصله</div>
                    <input className="left-sidebar-input text-center " style={{width:"20%"}} onChange={(e) => handleSetting("setgap",e.target.value)} defaultValue={getValue(layoutContext, 'gap')}></input>

            </div>
            <div className="flex flex-row justify-between py-[7px]">
                <div className="text-[12px]  my-3">گوشه ها</div>
                <input className="left-sidebar-input text-center " style={{ width: "20%" }} onChange={(e) => handleSetting("setradius", e.target.value)} defaultValue={getValue(layoutContext, 'radisu')} 
                type='number' step={1}
                 />
                {/* <DropDown Default={getValue(layoutContext, 'width')} width="20%"
                        title_items={{
                            1: '1 ',
                            2: ' 2  ',
                            3: '3 ',
                            4: '4 ',
                        }} setVal = {handleSetting} func="setradius"/> */}
            </div>
            <div className="flex flex-col justify-between py-[7px]">
                <div className="text-[12px] mb-3">متن 1</div>
                <textarea className="left-sidebar-input" name="Text1" cols="40" rows="1" onChange={(e) => handleSetting("settext", e.target.value)} defaultValue={getValue(layoutContext, 'text')}></textarea>
            </div>

            <div className="flex flex-row items-center justify-between mx-[8%] mobile:mx-0  my-5 w-[80%] h-[30px]  bg-white">
                <img className="max-w-[25px] max-h-[23px] " src="images/1.png" onClick={() => handleSetting("settextAlign", 1)} />
                <img className="max-w-[25px] max-h-[23px] " src="images/2.png" onClick={() => handleSetting("settextAlign", 2)} />
                <img className="max-w-[25px] max-h-[23px] " src="images/3.png" onClick={() => handleSetting("settextAlign", 3)} />
                <img className="max-w-[25px] max-h-[23px] " src="images/4.png" onClick={() => handleSetting("settextAlign", 4)} />
                <img className="max-w-[25px] max-h-[23px] " src="images/5.png" onClick={() => handleSetting("settextAlign", 5)} />
                <img className="max-w-[25px] max-h-[23px] " src="images/6.png" onClick={() => handleSetting("settextAlign", 6)} />
            </div>

                <Align layoutContext={layoutContext} type="text" handleSetting={handleSetting} Default={getValue(layoutContext,"textAlign")} />

            <ColorPicker title={'رنگ پس زمینه'} defualcolor={getValue(layoutContext,'bgcolor')} setVal={handleSetting} func="setbgcolor" />
            <ColorPicker title={'رنگ متن'}    defualcolor={getValue(layoutContext,'textColor')} setVal={handleSetting} func="settextColor" />

            {/* <div className="flex flex-row justify-between py-[7px]  ">
                <div className="text-[12px] my-1 ">آیکون دار</div>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={getValue(layoutContext,'hasIcon')} className="sr-only peer" onChange={(e) => handleSetting("sethasIcon", !layoutContext.current.values.hasIcon)} />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
            </div> */}
            <div className="flex flex-col justify-between py-[7px]">
                <div className="text-[12px] mb-3">لینک دکمه </div>
                <input className="left-sidebar-input  " style={{ width: "100%" }} onChange={(e) => handleSetting("sethasIcon", e.target.value)} defaultValue={getValue(layoutContext, 'hasIcon')} placeholder="لینک مورد نظر خود را وارد کنید"></input>

            </div>
        </>
    );
}

export default Button;
