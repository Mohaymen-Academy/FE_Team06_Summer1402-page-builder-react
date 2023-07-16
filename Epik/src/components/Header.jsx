import React from 'react';
import epicgames from '../assets/images/epicgames.jpeg';
import header from '../assets/styles/header.css'
const Header = () => {
    return (
        <div
            className={'header'}>
            <div
                className='LeftHeader'>
                <a href="#">
                    <img className={'logo'} src={epicgames} alt="" />
                </a>
                <div
                    style={{
                        display: 'flex'
                        , paddingLeft: '10px', paddingRight: '10px'}}>
                    <a href="#" >
                        <p
                            className={'headerText'}>
                            Store
                        </p>
                    </a>
                    <a href="">

                        <p
                            className={'headerText'}>
                            Distributation
                        </p>
                    </a>
                    <a href="">
                        <p
                            className={'headerText'}>
                            Support
                        </p>
                    </a>
                </div>
                <div
                style={{display:'flex'}}>
                        <div
                        className='vl'>
                        </div>
                        <div
                        style={{paddingLeft:"10px"}}>
                            <a href="">
                            <p>
                                Unreal Engine
                            </p>
                            </a>
                        </div>
                </div>
            </div>
            <div
                className={'RightHeader'}>
                {/* TODO */}
                {/* <img src="" alt="" /> */}
                <button>Sign In</button>
                <button>Download</button>
            </div>
        </div>
    );
}

export default Header;
