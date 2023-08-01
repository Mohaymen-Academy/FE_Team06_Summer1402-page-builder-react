import React, { useState, useEffect,useContext } from 'react';
import "../../assets/Styles/Page1.css"
import ColorPicker from '../../utility/ColorPicker';
import { ElementsContext } from '../Layout';
import DropDown from '../DropDown';
import FileUploader from '../../utility/FileUploader';

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
            <div className="fixed flex flex-col px-4 py-3 left-0 h-[94%] overflow-y-scroll  w-[300px] border border-t-0  bg-white smmobile:hidden vsmmobile:hidden ">
                <div className="my-3">متن</div>
                <div className="flex flex-row items-center justify-between mx-[8%] mobile:mx-0  my-5 w-[80%] h-[30px]  bg-white">
                    <img className="max-w-[25px] max-h-[23px] " src="images/2.png" onClick={()=>handleSetting("setalign",1) } />
                    <img className="max-w-[25px] max-h-[23px] " src="images/1.png" onClick={()=>handleSetting("setalign",2) } />
                    <img className="max-w-[25px] max-h-[23px] " src="images/3.png" onClick={()=>handleSetting("setalign",3) } />
                    <img className="max-w-[25px] max-h-[23px] " src="images/4.png" onClick={()=>handleSetting("setalign",4) } />
                    <img className="max-w-[25px] max-h-[23px] " src="images/5.png" onClick={()=>handleSetting("setalign",5) } />
                    <img className="max-w-[25px] max-h-[23px] " src="images/6.png" onClick={()=>handleSetting("setalign",6) } />
                </div>
                <div className="flex flex-row justify-between py-[7px]">
                    <div className="text-[12px]  my-3"> نوع متن</div>
                    <DropDown Default="متوسط" items={[1,2,3,4]} width="35%" setVal = {handleSetting} func="setfontfamliy" />
                </div>
                <div className="flex flex-row justify-between py-[7px]">
                    <div className="text-[12px]  my-3">نوع عنوان </div>
                    <DropDown Default="پیش فرض" items={[1,2,3,4]} width="35%" setVal = {handleSetting} func="settitle"/>
                </div>
                <div className="flex flex-col justify-between py-[7px]">
                    <div className="text-[12px] mb-3">متن مورد نظر خود را وارد کنید</div>
                    <textarea className="left-sidebar-input" name="Text1" cols="40" rows="4" onChange={(e) => handleSetting("settext",e.target.value)} placeholder="برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نا مفهموم از صنعت چاپ و با استفافاده از طراحان گرافیک است."></textarea>
                </div>
                <div className="flex flex-row items-center justify-between mx-[8%] mobile:mx-0  my-5 w-[80%] h-[30px]  bg-white">
                    <img className="max-w-[25px] max-h-[23px] " src="images/1.png" onClick={() => handleSetting("settextAlign",1)} />
                    <img className="max-w-[25px] max-h-[23px] " src="images/2.png" onClick={() => handleSetting("settextAlign",2)}/>
                    <img className="max-w-[25px] max-h-[23px] " src="images/3.png" onClick={() => handleSetting("settextAlign",3)}/>
                    <img className="max-w-[25px] max-h-[23px] " src="images/4.png" onClick={() => handleSetting("settextAlign",4)}/>
                    <img className="max-w-[25px] max-h-[23px] " src="images/5.png" onClick={() => handleSetting("settextAlign",5)}/>
                    <img className="max-w-[25px] max-h-[23px] " src="images/6.png" onClick={() => handleSetting("settextAlign",6)}/>
                </div>
                
                <ColorPicker title={'رنگ متن'} setVal = {handleSetting} func="settextColor" />
                
                <div className="flex flex-row justify-between py-[7px]  ">
                    <div className="text-[12px] my-1 ">سایز فونت</div>
                    <input className="left-sidebar-input text-center " style={{width:"20%"}} onChange={(e) => handleSetting("setfontsize",e.target.value)} defaultValue="16"></input>
                </div>
                <div className="flex flex-row justify-between py-[7px] my-0">
                    <div className="text-[12px] my-1">ارتفاع خط</div>
                    <input className="left-sidebar-input text-center " style={{width:"20%"}} onChange={(e) => handleSetting("setlineHeight",e.target.value)} defaultValue="24"></input>

                </div>
                <div className="flex flex-row justify-between py-[7px]  ">
                    <div className="text-[12px] my-1 ">حاشیه</div>
                    <input className="left-sidebar-input text-center " style={{width:"20%"}} onChange={(e) => handleSetting("setpadding",e.target.value)} defaultValue="16"></input>
                </div>
                <div className="flex flex-row justify-between py-[7px] my-0">
                    <div className="text-[12px] my-1">فاصله</div>
                    <input className="left-sidebar-input text-center " style={{width:"20%"}} onChange={(e) => handleSetting("setgap",e.target.value)} defaultValue="24"></input>

                </div>
                <div className="flex flex-col justify-between py-[7px]">
                    <div className="text-[12px] mb-3">لینک متن </div>
                    <input className="left-sidebar-input  " style={{width:"100%"}} onChange={(e) => handleSetting("setlink",e)} placeholder="لینک مورد نظر خود را وارد کنید"></input>

                </div>
            </div>
        </>
    );
}

export default Text;
