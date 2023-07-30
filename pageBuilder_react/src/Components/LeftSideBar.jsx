import React, { useState, useEffect } from 'react';
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
// import Button from './LeftSideBar/Button';
// import DefaultSideBar from './LeftSideBar/Default';
// import Button from './LeftSideBar/Button';
function LeftSideBar({ pagename, open }) {
    return (
        <div >

            {
                pagename == 1 ? <DefaultSideBar /> :
                    pagename == 2 ? <CardSideBar /> :
                        pagename == 3 ? <Button /> :
                            pagename == 4 ? <Text /> :
                                pagename == 5 ? <ImageSideBar /> :
                                    pagename == 6 ? <Video /> :
                                        pagename == 7 ? <Slider /> : <Icon />

            }
        </div>
    );
}

export default LeftSideBar;
