import React, { useState, useEffect } from 'react';
import "../assets/Styles/Page1.css"
import Header from '../Components/Header.jsx';
import LeftSideBar from '../Components/LeftSideBar.jsx';
import RightSideBar from '../Components/RightSideBar.jsx';
import WhitePage from '../Components/WhitePage.jsx';
import MainButton from '../Components/MainButton.jsx';
import Layout from '../Components/Layout';

function Page(props) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pageCounter, setPageCounter] = useState([1]);
    const [currentPage, setCurrentPage] = useState(0);

    const ScrollPage = (direction) => {
        console.log("prev");
        console.log(currentPage);
        if (direction == "next") {
            if (currentPage < pageCounter.length) {
                document.getElementById(currentPage + 1).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                setCurrentPage(currentPage + 1);
            }
        } else {
            if (currentPage > 0) {
                document.getElementById(currentPage - 1).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                setCurrentPage(currentPage - 1);
            }
        }
        console.log("current");
        console.log(currentPage);
    }
    // useEffect(() => {
    // }, [currentPage]);

    return (
            <div className="bg-[#D7D8DD] pt-10 justify-center flex flex-row overflow-y-scroll h-screen fixed left-[300px] right-[200px] smmobile:left-0 smmobile:right-0 smmobile:relative vsmmobile:left-0 vsmmobile:right-0 vsmmobile:relative">
                <div className={`flex flex-col items-center pl-2 `} style={{height:`${pageCounter.length*50}rem`}}>
                    <div className='h-max'>
                        {
                            pageCounter.map((item, index) => {
                                return <WhitePage key={index} id={index} pagename="page1" />
                            })
                        }
                        <div onClick={() => setPageCounter([...pageCounter, 1])} className="flex flex-row w-[350px] h-[50px] vsmmobile:w-[70%] text-[#0066FF]  border-white border-[2px] bg-[#EDEEF0] rounded-lg justify-center text-center items-center">
                            + افزودن صفحه
                        </div>
                    </div>
                </div>
                <div className="flex flex-col relative ">
                    <MainButton src="images/pen.png" text="ویرایش" isSetting={false} />
                    <div onClick={() => ScrollPage("prev")}><MainButton src="images/up.png" text="صفحه قبل" isSetting={false} /> </div>
                    <div onClick={() => ScrollPage("next")}><MainButton src="images/down.png" text="صفحه بعد" isSetting={false} /></div>
                    <MainButton src="images/lock.png" text="قفل صفحه" isSetting={false} />
                    <MainButton src="images/trash.png" text="حذف" isSetting={false} />
                    <div onClick={() => setIsModalOpen(true)} ><MainButton src="images/icons8-setting-24.png" text="تنظیمات" isSetting={true} /></div>
                </div>
            </div>
    );
}

export default Page;
