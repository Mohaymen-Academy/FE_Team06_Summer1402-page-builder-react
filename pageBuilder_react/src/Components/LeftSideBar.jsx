import React, { useState, useEffect, useContext } from 'react';
import "../assets/Styles/Page1.css"
import {
    Button,
    CardSideBar,
    DefaultSideBar,
    Slider,
    Text,
    Video,
    Icon,
    ImageSideBar
} from './leftSidecomponents';
import {
    NUM_PAGE,
    NUM_CARD,
    NUM_BUTTON,
    NUM_TEXT,
    NUM_IMAGE,
    NUM_VIDEO,
    NUM_SLIDER,
    NUM_ICON
} from '../utility/Constants';
import { ElementsContext } from './Layout';

function LeftSideBar({ pagename, isModalOpen, setIsModalOpen }) {
    const Pages = {
        [NUM_PAGE]: <DefaultSideBar />,
        [NUM_CARD]: <CardSideBar />,
        [NUM_BUTTON]: <Button />,
        [NUM_TEXT]: <Text />,
        [NUM_IMAGE]: <ImageSideBar />,
        [NUM_VIDEO]: <Video />,
        [NUM_SLIDER]: <Slider />,
        [NUM_ICON]: <Icon />,
    };
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 904);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    console.log(pagename,'left')
    return (
        <>
            {
                isMobile ?
                    isModalOpen &&
                    <div className=" fixed inset-0 m-[5%] flex items-center justify-center desktop:hidden laptop:hidden tablet:hidden" id="modalOverlay">
                        <div className="modal bg-white rounded-lg shadow-md p-4 w-[100%] h-[100%] relative" role="dialog">
                            <div className="modal-header flex justify-between items-center border-b border-gray-300 pb-2 mb-4">
                                <h3 className="text-lg font-semibold">تنظیمات</h3>
                                <button onClick={() => setIsModalOpen(false)} className="modal-close text-gray-600 text-2xl" id="modalCloseBtn">&times;</button>
                            </div>
                            <div className="relative flex flex-col px-4 py-3 left-0 h-[94%]  w-[100%]  bg-white">
                                {
                                    Pages[pagename.type]
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <div className="fixed flex flex-col px-4 py-3 left-0 h-[94%]  w-[300px] border border-t-0 overflow-auto bg-white smmobile:hidden vsmmobile:hidden">
                        {
                            Pages[pagename.type]
                        }
                    </div>
            }

        </>
    );
}

export default LeftSideBar;
