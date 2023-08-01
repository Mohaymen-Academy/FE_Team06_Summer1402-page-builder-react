import React , {useState} from 'react'

export default function Align({type , handleSetting, Default}) {
    const [choice , setChoice] = useState(Default)
    function handleClick(func,item)
    {
        handleSetting(func, item);
        setChoice(item);
    }
  return (
    <div>
        {
            type == "item" ?
                <div className="flex flex-row items-center justify-between mx-[8%] mobile:mx-0  my-5 w-[80%] h-[30px]  bg-white">
                    <img className="max-w-[25px] max-h-[23px] " style={{border :choice==1 ? "1px blue solid ":''}} src="images/2.png" onClick={()=>handleClick("setalign",1) } />
                    <img className="max-w-[25px] max-h-[23px] " style={{border :choice==2 ? "1px blue solid ":''}} src="images/1.png" onClick={()=>handleClick("setalign",2) } />
                    <img className="max-w-[25px] max-h-[23px] " style={{border :choice==3 ? "1px blue solid ":''}} src="images/3.png" onClick={()=>handleClick("setalign",3) } />
                    <img className="max-w-[25px] max-h-[23px] " style={{border :choice==4 ? "1px blue solid ":''}} src="images/4.png" onClick={()=>handleClick("setalign",4) } />
                    <img className="max-w-[25px] max-h-[23px] " style={{border :choice==5 ? "1px blue solid ":''}} src="images/5.png" onClick={()=>handleClick("setalign",5) } />
                    <img className="max-w-[25px] max-h-[23px] " style={{border :choice==6 ? "1px blue solid ":''}} src="images/6.png" onClick={()=>handleClick("setalign",6) } />
                </div>
            :
                <div className="flex flex-row items-center justify-between mx-[8%] mobile:mx-0  my-5 w-[80%] h-[30px]  bg-white">
                    <img className="max-w-[25px] max-h-[23px] " style={{border :choice==1 ? "1px blue solid ":''}} src="icons/textalign-right.svg" onClick={()=>handleClick("settextAlign",1) } />
                    <img className="max-w-[25px] max-h-[23px] " style={{border :choice==2 ? "1px blue solid ":''}} src="icons/textalign-left.svg" onClick={()=>handleClick("settextAlign",2) } />
                    <img className="max-w-[25px] max-h-[23px] " style={{border :choice==3 ? "1px blue solid ":''}} src="icons/textalign-justifycenter.svg" onClick={()=>handleClick("settextAlign",3) } />
                    <img className="max-w-[25px] max-h-[23px] " style={{border :choice==4 ? "1px blue solid ":''}} src="icons/textalign-center.svg" onClick={()=>handleClick("settextAlign",4) } />
                    <img className="max-w-[25px] max-h-[23px] " style={{border :choice==5 ? "1px blue solid ":''}} src="icons/text-underline.svg" onClick={()=>handleClick("settextAlign",5) } />
                    <img className="max-w-[25px] max-h-[23px] " style={{border :choice==6 ? "1px blue solid ":''}} src="icons/text-bold.svg" onClick={()=>handleClick("settextAlign",6) } />
                </div>

        }
    </div>
  )
}
