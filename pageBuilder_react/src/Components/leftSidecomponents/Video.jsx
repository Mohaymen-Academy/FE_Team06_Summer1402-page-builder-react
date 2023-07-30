import React, { useRef, useState } from 'react'
import "../../assets/Styles/Page1.css"

export default function Video() {
  const inputref = useRef(null);
  const [dragActive, setDragActive] = useState(false);
  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputref.current.click();
  }; return (

    <div className="fixed flex flex-col px-4 py-3 left-0 h-screen  w-[300px] border border-t-0  bg-white smmobile:hidden vsmmobile:hidden ">
      <div className="my-3">ویدئو
      </div>
      <div className="flex flex-row items-center justify-between mobile:mx-0  my-5   bg-white">
        <img className="max-w-[25px] max-h-[30px] " src="images/1.png" />
        <img className="max-w-[25px] max-h-[30px] " src="images/2.png" />
        <img className="max-w-[25px] max-h-[30px] " src="images/3.png" />
        <img className="max-w-[25px] max-h-[30px] " src="images/4.png" />
        <img className="max-w-[25px] max-h-[30px] " src="images/5.png" />
        <img className="max-w-[25px] max-h-[30px] " src="images/6.png" />
      </div>

      <div>
        <form className={'w-[100%] flex justify-center h-fit p-[15px] border-[1px] border-opacity-40 border-dashed border-blue-600'} onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
          <input ref={inputref} type="file" className={'hidden'} multiple={true} onChange={handleChange} />
          <div
            className={'flex flex-col justify-center items-center'}>
            <img className={'w-[30px] h-[30px]'} src="../images/plus.png" alt="" />
            <p className={'text-[#1874FF] text-lg font-bold'}>افزودن ویدئو</p>
          </div>
        </form>
        <div className="flex flex-row justify-between py-[7px]  ">
          <div className="text-[12px] my-1 ">پخش خودکار</div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <div className="flex flex-row justify-between py-[7px]">
          <div className="text-[12px]  my-3">عرض ویدیو</div>
          <button className="text-[#6C6E78]  gap-2 font-medium border rounded-lg text-[11px] px-2 py-1  justify-between inline-flex items-center " type="button">تمامی صفحه ها
            <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
        </div>
        <div className="flex flex-row justify-between py-[7px]">
          <div className="text-[12px]  my-3">حاشیه</div>
          <button className="text-[#6C6E78]  gap-2 font-medium border rounded-lg text-[11px] px-2 py-1  justify-between inline-flex items-center " type="button">12
          </button>
        </div>
        <div className="flex flex-row justify-between py-[7px]">
          <div className="text-[12px]  my-3">فاصله گذاری</div>
          <button className="text-[#6C6E78]  gap-2 font-medium border rounded-lg text-[11px] px-2 py-1  justify-between inline-flex items-center " type="button">16
          </button>
        </div>
      </div>
    </div>

  )
}
