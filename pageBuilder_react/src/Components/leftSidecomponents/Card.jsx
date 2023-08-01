import React, { useState, useRef, useEffect, useContext } from 'react';
import "../../assets/Styles/Page1.css"
import ColorPicker from '../../utility/ColorPicker';
import { ElementsContext } from '../Layout';
import DropDown from '../DropDown';
import FileUploader from '../../utility/FileUploader';
import { getValue } from '../../utility/Functions';
import CardPicker from '../../utility/CardPicker';

function CardSideBar({ setters, values }) {
    const layoutContext = useContext(ElementsContext);
    const setter = layoutContext.current.setters
    function handleSetting(func, value) {
        layoutContext.current.setters[func](value);
    }

    console.log(layoutContext.current.setters);
    return (
        <>
            <div className="fixed flex flex-col px-4 py-3 left-0 h-[94%] overflow-y-scroll  w-[300px] border border-t-0  bg-white smmobile:hidden vsmmobile:hidden ">
                <div className="my-3">کارت</div>
                <div className="flex flex-row items-center justify-between mx-[8%] mobile:mx-0  my-5 w-[80%] h-[30px]  bg-white">
                    <img className="max-w-[25px] max-h-[23px] " src="images/2.png" onClick={() => handleSetting("setalign", 1)} />
                    <img className="max-w-[25px] max-h-[23px] " src="images/1.png" onClick={() => handleSetting("setalign", 2)} />
                    <img className="max-w-[25px] max-h-[23px] " src="images/3.png" onClick={() => handleSetting("setalign", 3)} />
                    <img className="max-w-[25px] max-h-[23px] " src="images/4.png" onClick={() => handleSetting("setalign", 4)} />
                    <img className="max-w-[25px] max-h-[23px] " src="images/5.png" onClick={() => handleSetting("setalign", 5)} />
                    <img className="max-w-[25px] max-h-[23px] " src="images/6.png" onClick={() => handleSetting("setalign", 6)} />
                </div>
                <div className="flex flex-row justify-between py-[7px]">
                    <CardPicker setCard={layoutContext.current.setters['settype']} />
                </div>

                <div className="flex flex-row justify-between py-[7px]">
                    <div className="text-[12px]  my-3">اندازه کارت</div>
                    <DropDown Default={getValue(layoutContext, 'size')} title_items={{
                        1: 'کوچک',
                        2: 'متوسط',
                        3: 'بزرگ',
                        4: 'خیل بزرگ',
                    }} width="35%" setVal={handleSetting} func="setsize" />
                </div>
                <div className="flex flex-row justify-between py-[7px]">
                    <div className="text-[12px]  my-3">عرض کارت</div>
                    <DropDown Default={getValue(layoutContext, 'width')} width="35%"
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
                    <input className="left-sidebar-input text-center " style={{ width: "20%" }} onChange={(e) => handleSetting("setpadding", e.target.value)} defaultValue={getValue(layoutContext, 'padding')}></input>
                </div>
                <div className="flex flex-row justify-between py-[7px] my-0">
                    <div className="text-[12px] my-1">فاصله</div>
                    <input className="left-sidebar-input text-center " style={{ width: "20%" }} onChange={(e) => handleSetting("setgap", e.target.value)} defaultValue={getValue(layoutContext, 'gap')}></input>
                </div>
                <div className="flex flex-row justify-between py-[7px]">
                    <div className="text-[12px]  my-3">گوشه ها</div>
                    <input className="left-sidebar-input text-center " style={{ width: "20%" }} onChange={(e) => handleSetting("setradius", e.target.value)} defaultValue={getValue(layoutContext, 'radius')}></input>
                    {/* <DropDown Default="4" items={[1, 2, 3, 4]} width="35%" setVal={handleSetting} func="setradius" /> */}
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


                <FileUploader setVal={handleSetting} func="setimage" />
                <ColorPicker defualcolor={getValue(layoutContext, 'bgColor')} title={'رنگ پس زمینه'} setVal={handleSetting} func="setbgColor" />
                <ColorPicker defualcolor={getValue(layoutContext, 'textColor')} title={'رنگ متن'} setVal={handleSetting} func="settextColor" />

                <div className="flex flex-row justify-between py-[7px]  ">
                    <div className="text-[12px] my-1 ">آیکون دار</div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value={getValue(layoutContext, 'hasIcon')} className="sr-only peer" onChange={(e) => handleSetting("sethasIcon", !layoutContext.current.values.hasIcon)} />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </div>
                <div className="flex flex-col justify-between py-[7px]">
                    <div className="text-[12px] mb-3">لینک دکمه </div>
                    <input className="left-sidebar-input " value={getValue(layoutContext, 'link')} style={{ width: "100%" }} onChange={(e) => handleSetting("setlink", e)} placeholder="لینک مورد نظر خود را وارد کنید"></input>
                </div>
            </div>
        </>
    );
}

export default CardSideBar;
