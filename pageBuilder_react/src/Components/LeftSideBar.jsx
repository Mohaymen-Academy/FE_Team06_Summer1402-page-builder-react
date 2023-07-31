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

function LeftSideBar({ pagename, open }) {
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
    return (
        <div >
            {
                Pages[pagename]
            }
        </div>
    );
}

export default LeftSideBar;
