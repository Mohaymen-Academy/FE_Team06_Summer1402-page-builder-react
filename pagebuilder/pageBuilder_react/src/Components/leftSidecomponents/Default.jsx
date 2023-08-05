import React, { useState, useEffect, useContext } from 'react';
import "../../assets/Styles/Page1.css"
import { getValue } from '../../utility/Functions';
import DropDown from '../DropDown';
import { ElementsContext } from '../Layout';
function DefaultSideBar() {
    const layoutContext = useContext(ElementsContext);
    function handleSetting(func, value) {
        layoutContext.current.setters[func](value);
    }

    return (
        <>
            <div className="my-3">تنظیمات صفحه</div>

            <div className="flex flex-row justify-between py-[7px]">
                <div className="text-[12px]  my-3">فاصله بین فریم ها</div>
                <DropDown Default={getValue(layoutContext, 'gap')} title_items={{
                    5: 'پیش فرض',
                    10: '2x',
                    15: '3x',
                    20: '4x',
                }} width="35%" setVal={handleSetting} func="setgap" />
            </div>

            <div className="flex flex-row justify-between py-[7px]  ">
                <div className="text-[12px] my-1 ">حاشیه</div>
                <input className="left-sidebar-input text-center " style={{ width: "20%" }} onChange={(e) => handleSetting("setmargin", e.target.value)} defaultValue={getValue(layoutContext, 'margin')}></input>
            </div>

            <div className="flex flex-row justify-between py-[7px]  ">
                <div className="text-[12px] my-1 ">فاصله از دیواره</div>
                <input className="left-sidebar-input text-center " style={{ width: "20%" }} onChange={(e) => handleSetting("setpadding", e.target.value)} defaultValue={getValue(layoutContext, 'padding')}></input>
            </div>

        </>
    );
}

export default DefaultSideBar;
