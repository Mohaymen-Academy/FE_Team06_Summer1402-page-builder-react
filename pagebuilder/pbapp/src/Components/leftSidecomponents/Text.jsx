import React, { useState, useEffect, useContext } from 'react';
import "../../assets/Styles/Page1.css"
import ColorPicker from '../../utility/ColorPicker';
import { ElementsContext } from '../Layout';
import DropDown from '../DropDown';
import FileUploader from '../../utility/FileUploader';
import { getValue } from '../../utility/Functions';
import Align from '../../utility/Align';

function Text() {
    const layoutContext = useContext(ElementsContext);
    function handleSetting(func, value) {
        layoutContext.current.setters[func](value);
    }
    return (
        <>
            <div className="my-3">متن</div>
            <Align type="item" layoutContext={layoutContext} handleSetting={handleSetting} Default={getValue(layoutContext, "align")} />

            <div className="flex flex-row justify-between py-[7px]">
                <div className="text-[12px]  my-3"> نوع متن</div>
                <DropDown Default={getValue(layoutContext, 'fontfamliy')} title_items={{
                    1: 'شبنم',
                    2: 'ایران سانس',
                    3: 'لاله زار',
                    4: 'استعداد',
                }} width="35%" setVal={handleSetting} func="setfontfamliy" />
            </div>
            <div className="flex flex-row justify-between py-[7px]">
                <div className="text-[12px]  my-3">نوع عنوان </div>
                <DropDown Default={getValue(layoutContext, 'tagtype')} title_items={{
                    3: 'عنوان H1',
                    2: 'عنوان H2',
                    1: 'عنوان H3',
                }} width="35%" setVal={handleSetting} func="settagtype" />
            </div>
            <div className="flex flex-col justify-between py-[7px]">
                <div className="text-[12px] mb-3">متن مورد نظر خود را وارد کنید</div>
                <textarea className="left-sidebar-input" name="Text1" cols="40" rows="4" onChange={(e) => handleSetting("settext", e.target.value)} placeholder={getValue(layoutContext, 'text')}></textarea>
            </div>
            <Align layoutContext={layoutContext} type="text" handleSetting={handleSetting} Default={getValue(layoutContext, "textAlign")} />

            <div className="flex flex-row justify-between py-[7px]  ">
                <div className="text-[12px] my-1 ">سایز فونت</div>
                <input className="left-sidebar-input text-center " style={{ width: "20%" }} onChange={(e) => handleSetting("setfontsize", e.target.value)} defaultValue={getValue(layoutContext, 'fontsize')}></input>
            </div>
            <ColorPicker title={'رنگ متن'} defualcolor={getValue(layoutContext, 'textColor')} setVal={handleSetting} func="settextColor" />
            <div className="flex flex-row justify-between py-[7px] my-0">
                <div className="text-[12px] my-1">ارتفاع خط</div>
                <input className="left-sidebar-input text-center " style={{ width: "20%" }} onChange={(e) => handleSetting("setlineHeight", e.target.value)} defaultValue={getValue(layoutContext, 'lineHeight')}></input>

            </div>
            <div className="flex flex-row justify-between py-[7px]  ">
                <div className="text-[12px] my-1 ">حاشیه</div>
                <input className="left-sidebar-input text-center " style={{ width: "20%" }} onChange={(e) => handleSetting("setpadding", e.target.value)} defaultValue={getValue(layoutContext, 'padding')}></input>
            </div>
            <div className="flex flex-row justify-between py-[7px] my-0">
                <div className="text-[12px] my-1">فاصله</div>
                <input className="left-sidebar-input text-center " style={{ width: "20%" }} onChange={(e) => handleSetting("setgap", e.target.value)} defaultValue={getValue(layoutContext, 'gap')}></input>

            </div>
            <div className="flex flex-col justify-between py-[7px]">
                <div className="text-[12px] mb-3">لینک متن </div>
                <input className="left-sidebar-input  " style={{ width: "100%" }} onChange={(e) => handleSetting("setlink", e.target.value)} placeholder={getValue(layoutContext, 'link') ? getValue(layoutContext, 'link'):"لینک مورد نظر خود را وارد کنید"}></input>

            </div>
        </>
    );
}

export default Text;
