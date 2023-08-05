import React, { useState, useEffect,useContext } from 'react';
// import "../assets/Styles/Page1.css"
import "../../assets/Styles/Page1.css"
import { ElementsContext } from '../Layout';
import DropDown from '../DropDown';
import FileUploader from '../../utility/FileUploader';
import { getValue } from '../../utility/Functions';
import Align from '../../utility/Align';

function ImageSideBar() {
    const layoutContext = useContext(ElementsContext);
    const setter = layoutContext.current.setters
    // console.log("HERE ", layoutContext.current.setters)
    function handleSetting(func , value)
    {
        layoutContext.current.setters[func](value);
    }
    return (
        <>
                <div className="my-3">عکس</div>
                <Align type="item" handleSetting={handleSetting} Default={getValue(layoutContext,"align")} />

                <FileUploader setVal = {handleSetting} func="setimage"/>

                <div className="flex flex-row justify-between py-[7px]">
                    <div className="text-[12px]  my-3">عرض عکس</div>
                    <DropDown Default={getValue(layoutContext, 'width')} width="35%"
                        title_items={{
                            100: 'پیش فرض',
                            180: 'یک و نیم برابر',
                            240: 'دو برابر',
                            300: 'سه برابر',
                        }} setVal = {handleSetting} func="setwidth"/>
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
                    <div className="text-[12px]  my-3">گوشه ها</div>
                    <input className="left-sidebar-input text-center " style={{width:"20%"}} onChange={(e) => handleSetting("setradisu",e.target.value)} defaultValue={getValue(layoutContext, 'radisu')}></input>

                    {/* <DropDown Default={getValue(layoutContext, 'radisu')} width="35%"
                        title_items={{
                            10: 'پیش فرض',
                            15: 'یک و نیم برابر',
                            20: 'دو برابر',
                            30: 'سه برابر',
                        }} setVal = {handleSetting} func="setradisu"/> */}
                </div>
        </>
    );
}

export default ImageSideBar;
