import React, { useState,useRef, useEffect,useContext } from 'react';
import "../../assets/Styles/Page1.css"
import { ElementsContext } from '../Layout';
import DropDown from '../DropDown';
import FileUploader from '../../utility/FileUploader';
import { getValue } from '../../utility/Functions';

export default function Video() {
  const layoutContext = useContext(ElementsContext);
  const setter = layoutContext.current.setters
//   console.log("HERE ", layoutContext.current.setters)
  const inputref = useRef(null);
  const [dragActive, setDragActive] = useState(false);
  // handle drag events
  function handleSetting(func , value)
  {
      layoutContext.current.setters[func](value);
  }
return (
  <>
      <div className="my-3">ویدئو
      </div>
      <div className="flex flex-row items-center justify-between mx-[8%] mobile:mx-0  my-5 w-[80%] h-[30px]  bg-white">
          <img className="max-w-[25px] max-h-[23px] " src="images/2.png" onClick={()=>handleSetting("setalign",1) } />
          <img className="max-w-[25px] max-h-[23px] " src="images/1.png" onClick={()=>handleSetting("setalign",2) } />
          <img className="max-w-[25px] max-h-[23px] " src="images/3.png" onClick={()=>handleSetting("setalign",3) } />
          <img className="max-w-[25px] max-h-[23px] " src="images/4.png" onClick={()=>handleSetting("setalign",4) } />
          <img className="max-w-[25px] max-h-[23px] " src="images/5.png" onClick={()=>handleSetting("setalign",5) } />
          <img className="max-w-[25px] max-h-[23px] " src="images/6.png" onClick={()=>handleSetting("setalign",6) } />
      </div>

      <div>
        <FileUploader setVal = {handleSetting} func="setimage" Title = "افزودن ویدیو"/>
        <div className="flex flex-row justify-between py-[7px]  ">
                    <div className="text-[12px] my-1 ">پخش خودکار </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={getValue(layoutContext,'autoplay')} className="sr-only peer" onChange={(e) => handleSetting("setautoplay",!layoutContext.current.values.autoplay)} />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </div>
                <div className="flex flex-row justify-between py-[7px]">
                    <div className="text-[12px]  my-3">عرض ویدئو</div>
                    <DropDown Default={getValue(layoutContext, 'width')} width="35%"
                        title_items={{
                            100: '100 درصد',
                            75: '75 درصد',
                            50: '50 درصد',
                            25: '25 درصد',

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
    </div>
</>
  )
}
