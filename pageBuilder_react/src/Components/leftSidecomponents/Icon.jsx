import React, { useState, useEffect,useContext } from 'react';
import ColorPicker from '../../utility/ColorPicker';
import { ElementsContext } from '../Layout';
export default function Icon() {
  const [icon, setIcon] = useState('images/icons8-cat-50.png');
  const layoutContext = useContext(ElementsContext);
  const setter = layoutContext.current.setters
  console.log("HERE ", layoutContext.current.setters)

  return (
    <div className="fixed flex flex-col px-4 py-3 left-0 h-[94%] overflow-y-auto  w-[300px] border border-t-0  bg-white smmobile:hidden vsmmobile:hidden ">
      <div className="my-3">آیکون
      </div>
      <div className="flex flex-row items-center justify-between mobile:mx-0 my-5 bg-white">
        <img className="max-w-[25px] max-h-[30px] " src="images/1.png" />
        <img className="max-w-[25px] max-h-[30px] " src="images/2.png" />
        <img className="max-w-[25px] max-h-[30px] " src="images/3.png" />
        <img className="max-w-[25px] max-h-[30px] " src="images/4.png" />
        <img className="max-w-[25px] max-h-[30px] " src="images/5.png" />
        <img className="max-w-[25px] max-h-[30px] " src="images/6.png" />
      </div>
      <div
        className='flex flex-col gap-3'>
        <div className="flex flex-row justify-between py-[7px]">
          <div className="text-[12px]  my-3">حاشیه</div>
          <button className="text-[#6C6E78]  gap-2 font-medium border rounded-lg text-[11px] px-2 py-1  justify-between inline-flex items-center " type="button">12
          </button>
        </div>

        <div className="flex flex-row justify-between py-[7px]">
          <div className="text-[12px]  my-3">فاصله گذاری</div>
          <button className="text-[#6C6E78]  gap-2 font-medium border rounded-lg text-[11px] px-2 py-1  justify-between inline-flex items-center " type="button">12
          </button>
        </div>

        <div className="flex flex-row justify-between py-[7px]">
          <div className="text-[12px]  my-3">فاصله گذاری</div>
          <img src={icon} className='w-[40px] h-[40px] bg-slate-100 rounded-lg' alt="" />
        </div>
        <ColorPicker title={'رنگ آیکون'} />
        <div
          className='h-[150px] overflow-y-scroll flex flex-wrap gap-[12px]'>
          {Array(100).fill(null).map((icn, index) =>
            <button key={index}>
              <img src={'images/icons8-cat-50.png'} className='w-[40px] h-[40px] bg-slate-100 rounded-lg' alt="" />
            </button>
          )
          }

        </div>
      </div>
    </div >
  )
}
