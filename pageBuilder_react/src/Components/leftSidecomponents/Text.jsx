import React, { useState, useEffect,useContext } from 'react';
import "../../assets/Styles/Page1.css"
import ColorPicker from '../../utility/ColorPicker';
import { ElementsContext } from '../Layout';
import DropDown from '../DropDown';
import FileUploader from '../../utility/FileUploader';
import { getValue } from '../../utility/Functions';
import Align from '../../utility/Align';

function Text() {
    const layoutContext = useContext(ElementsContext);
    const setter = layoutContext.current.setters
    console.log("HERE ", layoutContext.current.setters)
    function handleSetting(func , value)
    {
        layoutContext.current.setters[func](value);
    }
    return (
        <>
                <div className="my-3">متن</div>
                <Align type="item" handleSetting={handleSetting} Default={getValue(layoutContext,"align")} />

                <div className="flex flex-row justify-between py-[7px]">
                    <div className="text-[12px]  my-3"> نوع متن</div>
                    <DropDown Default={getValue(layoutContext, 'size')} title_items={{
                        1: 'کوچک',
                        2: 'متوسط',
                        3: 'بزرگ',
                        4: 'خیل بزرگ',
                    }} width="35%" setVal = {handleSetting} func="setfontfamliy" />
                </div>
                <div className="flex flex-row justify-between py-[7px]">
                    <div className="text-[12px]  my-3">نوع عنوان </div>
                    <DropDown Default={getValue(layoutContext, 'size')} title_items={{
                        1: 'کوچک',
                        2: 'متوسط',
                        3: 'بزرگ',
                        4: 'خیل بزرگ',
                    }} width="35%" setVal = {handleSetting} func="settitle"/>
                </div>
                <div className="flex flex-col justify-between py-[7px]">
                    <div className="text-[12px] mb-3">متن مورد نظر خود را وارد کنید</div>
                    <textarea className="left-sidebar-input" name="Text1" cols="40" rows="4" onChange={(e) => handleSetting("settext",e.target.value)} placeholder="برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نا مفهموم از صنعت چاپ و با استفافاده از طراحان گرافیک است."></textarea>
                </div>
                <Align type="text" handleSetting={handleSetting} Default={getValue(layoutContext,"textAlign")} />

                
                <ColorPicker title={'رنگ متن'} setVal = {handleSetting} func="settextColor" />
                
                <div className="flex flex-row justify-between py-[7px]  ">
                    <div className="text-[12px] my-1 ">سایز فونت</div>
                    <input className="left-sidebar-input text-center " style={{width:"20%"}} onChange={(e) => handleSetting("setfontsize",e.target.value)} defaultValue={getValue(layoutContext,'fontsize')}></input>
                </div>
                <div className="flex flex-row justify-between py-[7px] my-0">
                    <div className="text-[12px] my-1">ارتفاع خط</div>
                    <input className="left-sidebar-input text-center " style={{width:"20%"}} onChange={(e) => handleSetting("setlineHeight",e.target.value)} defaultValue={getValue(layoutContext,'lineHeight')}></input>

                </div>
                <div className="flex flex-row justify-between py-[7px]  ">
                    <div className="text-[12px] my-1 ">حاشیه</div>
                    <input className="left-sidebar-input text-center " style={{width:"20%"}} onChange={(e) => handleSetting("setpadding",e.target.value)} defaultValue={getValue(layoutContext,'padding')}></input>
                </div>
                <div className="flex flex-row justify-between py-[7px] my-0">
                    <div className="text-[12px] my-1">فاصله</div>
                    <input className="left-sidebar-input text-center " style={{width:"20%"}} onChange={(e) => handleSetting("setgap",e.target.value)} defaultValue={getValue(layoutContext,'gap')}></input>

                </div>
                <div className="flex flex-col justify-between py-[7px]">
                    <div className="text-[12px] mb-3">لینک متن </div>
                    <input className="left-sidebar-input  " style={{width:"100%"}} onChange={(e) => handleSetting("setlink",e)} placeholder="لینک مورد نظر خود را وارد کنید"></input>

                </div>
        </>
    );
}

export default Text;
