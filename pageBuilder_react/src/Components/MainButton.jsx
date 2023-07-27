import React, { useState,  useEffect } from 'react';
import "../assets/Styles/Page1.css"

function MainButton({src,text,isSetting}) {
    
	return (
		<>
        {
            isSetting ?
            <div id="setting" className="group main-div-icon desktop:hidden laptop:hidden tablet:hidden mobile:hidden ">
                <img width="25" height="25" src={src} alt="settings" />
                <span className="spantext">{text}</span>
            </div> :
            <div className="group main-div-icon">
                <img className="main-div-icon-size" src={src} />
                <span className="spantext">{text}</span>
            </div>
        }

        </>
    );
}

export default MainButton;