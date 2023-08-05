import React,{useRef,useState} from 'react'

export default function ColorPicker({title,defualcolor , setVal , func}) {
    const colorref = useRef(null);
    const [color, setcolor] = useState(defualcolor);

    function handleCHnage(e) {
        setcolor(colorref.current.value)
        setVal(func ,colorref.current.value)
    }
    function handleClick(e) {
      colorref.current.click();
    }
    return (
        <div className="flex flex-row justify-between py-[7px] items-center">
            <div className="text-[12px]  my-3">{title}</div>
            <div>
                <input ref={colorref} type="color" className='border hidden' name="favcolor" value={color} onChange={handleCHnage} />
                <div
                    onClick={handleClick}
                    className={`w-[20px] h-[20px] rounded-md`}
                    style={{ backgroundColor: color }}>
                </div>
            </div>
        </div>
    )
}
