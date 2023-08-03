import React, { useState, useEffect, useContext, useReducer } from 'react';
import "../assets/Styles/Page1.css"
import WhitePage from '../Components/WhitePage.jsx';
import MainButton from '../Components/MainButton.jsx';
import LeftSideBar from '../Components/LeftSideBar';
import { ElementsContext } from '../Components/Layout';
import { NUM_PAGE } from '../utility/Constants';
import { v4 as uuid, v4 } from 'uuid';
function reducer(state, action) {
    console.log("here in redu", state)
    switch (action.type) {
        case 'add':
            console.log('add here', action);
            break;
        case 'delete':
            console.log('remove here', action);
            break;
    }
}
function Page(props) {
    const [pagecounter, setpagecounter] = useState(1);
    const values = useContext(ElementsContext);
    const [components, setcomponents] = useState(Object.keys(values.current.components));

    const ScrollPage = (direction) => {
        if (direction == "next") {
            if (currentPage < pagecounter.length) {
                document.getElementById(currentPage + 1).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                setCurrentPage(currentPage + 1);
            }
        } else {
            if (currentPage > 0) {
                document.getElementById(currentPage - 1).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                setCurrentPage(currentPage - 1);
            }
        }
    }
    function handleAddPage(e) {
        values.current.components[v4()] = [];
        setpagecounter(pagecounter + 1);
        setcomponents(Object.keys(values.current.components))

    }
    function handleclick(e) {
        props.setPage({ type: NUM_PAGE })
    }
    return (
        <>
            <div onClick={handleclick} className="bg-[#D7D8DD] pt-10 justify-center flex flex-row overflow-y-scroll h-screen fixed left-[300px] right-[200px] smmobile:left-0 smmobile:right-0 smmobile:relative vsmmobile:left-0 vsmmobile:right-0 vsmmobile:relative">
                <div onClick={(e) => e.stopPropagation()} className={`flex flex-col items-center pl-2 `} style={{ height: `${pagecounter * 50}rem` }}>

                    <div className='h-max'>
                        {
                            components.map((item, index) => {
                                return <WhitePage key={index} id={item} pagename={item} leftsidepager={props.setPage} />
                            })
                        }
                        <div onClick={handleAddPage} className="flex flex-row w-[350px] h-[50px] vsmmobile:w-[70%] text-[#0066FF]  border-white border-[2px] bg-[#EDEEF0] rounded-lg justify-center text-center items-center">
                            + افزودن صفحه
                        </div>
                    </div>
                </div>
                <div onClick={(e) => e.stopPropagation()} className="flex flex-col relative ">
                    <MainButton src="images/pen.png" text="ویرایش" isSetting={false} />
                    <div ><MainButton src="images/up.png" text="صفحه قبل" isSetting={false} /> </div>
                    <div ><MainButton src="images/down.png" text="صفحه بعد" isSetting={false} /></div>
                    <MainButton src="images/lock.png" text="قفل صفحه" isSetting={false} />
                    <MainButton src="images/trash.png" text="حذف" isSetting={false} />
                    <div onClick={() => props.setIsModalOpen(true)} ><MainButton src="images/icons8-setting-24.png" text="تنظیمات" isSetting={true} /></div>
                </div>
            </div>

        </>
    );
}

export default Page;
