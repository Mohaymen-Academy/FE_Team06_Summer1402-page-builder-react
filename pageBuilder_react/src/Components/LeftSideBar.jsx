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
import {
    NUM_PAGE,
    NUM_CARD,
    NUM_BUTTON,
    NUM_TEXT,
    NUM_IMAGE,
    NUM_VIDEO,
    NUM_SLIDER,
} from '../utility/Constants';

// import Button from './LeftSideBar/Button';
// import DefaultSideBar from './LeftSideBar/Default';
// import Button from './LeftSideBar/Button';
function LeftSideBar({ pagename, open }) {
    return (
        <div >

            {
                pagename == NUM_PAGE? <DefaultSideBar /> :
                    pagename == NUM_CARD? <CardSideBar /> :
                        pagename == NUM_BUTTON ? <Button /> :
                            pagename == NUM_TEXT ? <Text /> :
                                pagename == NUM_IMAGE ? <ImageSideBar /> :
                                    pagename == NUM_VIDEO ? <Video /> :
                                        pagename == NUM_SLIDER ? <Slider /> : <Icon />

            }
        </div>
    );
}

export default LeftSideBar;
