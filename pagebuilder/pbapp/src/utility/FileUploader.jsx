import React, { useState,useRef, useEffect,useContext } from 'react';

export default function FileUploader({ setVal, func , Title }) {
    const inputref = useRef(null);
    const onButtonClick = () => {
        inputref.current.click();
    }
    const handleChange = function (e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files);
            setVal(func, e.target.files);
        }
    };
    const handleDrag = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };
    return (
        <div>
            <form onClick={onButtonClick} className=" flex flex-col justify-center items-center border-dashed border-2 border-[#0066FF] rounded-lg mobile:h-[100px] h-[150px] p-2  mb-3 " onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
                <input ref={inputref} type="file" className={'hidden'} multiple={true} onChange={handleChange} />
                <div className="flex flex-col justify-center items-center w-[50px] h-[50px] rounded-lg bg-[#dce5f1]">
                    <img className="w-[25px] h-[25px]" src="images/plus.png" />
                </div>
                <div className="text-[#0066FF] m-4 mb-1 mobile:text-xs">
                    {
                        Title ? Title : "افزودن عکس"
                    }
                    </div>
                <div className="text-xs mobile:hidden">حجم عکس تا 5 مگابایت و با فرمت PNG, JPG</div>
            </form>
        </div>
    )
}
