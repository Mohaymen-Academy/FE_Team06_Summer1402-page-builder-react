import React, { useState, useEffect, useContext } from 'react';
import ColorPicker from '../../utility/ColorPicker';
import { ElementsContext } from '../Layout';
import DropDown from '../DropDown';
import FileUploader from '../../utility/FileUploader';
import { getValue } from '../../utility/Functions';
import Align from '../../utility/Align';

export default function Icon() {
  const [icon, setIcon] = useState('images/icons8-cat-50.png');
  const layoutContext = useContext(ElementsContext);
  const setter = layoutContext.current.setters
  console.log("HERE ", layoutContext.current.setters)


  function handleSetting(func, value) {
    layoutContext.current.setters[func](value);
  }

  return (
    <>
        <div className="my-3">آیکون</div>
        <Align type="item" handleSetting={handleSetting} Default={getValue(layoutContext,"align")} />

        <div className="flex flex-row justify-between py-[7px]">
          <div className="text-[12px]  my-3">اندازه آیکون</div>
          <DropDown Default={100} width="35%"
            title_items={{
              100: "کوچک",
              120: "متوسط",
              240: "بزرگ",
            }}
            setVal={handleSetting} func="setwidth" />
          {/* <DropDown Default="متوسط" items={["کوچک","متوسط","بزرگ"]} width="35%" setVal = {handleSetting} func="setsize" /> */}
        </div>
        <div className="flex flex-row justify-between py-[7px]  ">
          <div className="text-[12px] my-1 ">حاشیه</div>
          <input className="left-sidebar-input text-center " style={{ width: "20%" }} onChange={(e) => handleSetting("setpadding", e.target.value)} defaultValue={getValue(layoutContext, "padding")}></input>
        </div>
        <div className="flex flex-row justify-between py-[7px] my-0">
          <div className="text-[12px] my-1">فاصله</div>
          <input className="left-sidebar-input text-center " style={{ width: "20%" }} onChange={(e) => handleSetting("setgap", e.target.value)} defaultValue={getValue(layoutContext, "gap")}></input>

        </div>
        <ColorPicker title={'رنگ آیکون'} setVal={handleSetting} func="setcolor" defaultValue={getValue(layoutContext, "color")} />
        <div className="flex flex-row justify-between py-[7px] my-2">
          <div className="text-[12px]  my-3">جایزگزینی آیکون</div>
          <img src={icon} className='w-[40px] h-[40px] bg-slate-100 rounded-lg' alt="" />
        </div>
        <div
          className='h-[150px] overflow-y-scroll flex flex-wrap gap-[12px] justify-center'>
          {Array(100).fill(null).map((icn, index) =>
            <button key={index}>
              <img src={'images/icons8-cat-50.png'} className='w-[40px] h-[40px] bg-slate-100 rounded-lg' alt="" onClick={(e) => handleSetting("seticon", e.target.value)} />
            </button>
          )
          }

        </div>
</>
  )
}
