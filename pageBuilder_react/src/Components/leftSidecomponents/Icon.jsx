import React, { useState, useEffect, useContext } from 'react';
import ColorPicker from '../../utility/ColorPicker';
import { ElementsContext } from '../Layout';
import DropDown from '../DropDown';
import FileUploader from '../../utility/FileUploader';
import { getValue } from '../../utility/Functions';
import Align from '../../utility/Align';
import { Icons } from '../../utility/Icons';
export default function Icon() {
  const layoutContext = useContext(ElementsContext);
  // console.log(Icons[layoutContext.current.values.icon])
  const [ChoosenIcon, setChoosenIcon] = useState(layoutContext.current.values.icon);
  let CompIcon = Icons[ChoosenIcon]

  function handleSetting(func, value) {
    layoutContext.current.setters[func](value);
  }
  function changeIcon(type) {
    setChoosenIcon(type)
    handleSetting('seticon', type)
  }

  return (
    <>
      <div className="my-3">آیکون</div>
      <Align type="item" handleSetting={handleSetting} Default={getValue(layoutContext, "align")} />

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
      <ColorPicker title={'رنگ آیکون'} defualcolor={getValue(layoutContext, 'color')} setVal={handleSetting} func="setcolor" defaultValue={getValue(layoutContext, "color")} />
      <div className="flex flex-row justify-between py-[7px] my-2">
        <div className="text-[12px]  my-3">جایزگزینی آیکون</div>
        {<CompIcon size={40} />}
      </div>
      <div className='h-[150px] overflow-y-scroll flex flex-wrap gap-[12px] justify-center'>
        {Object.entries(Icons).map((icn, index) => {
          return (
            <button key={index}
              onClick={
                // changeIcon(icn[0])
                (e) => {
                  // console.log(icn)
                  changeIcon(icn[0])
                }
              }>
              {
                React.createElement(icn[1], {
                  size: '40px'
                })
              }
            </button>)
        }
        )
        }

      </div>
    </>
  )
}
