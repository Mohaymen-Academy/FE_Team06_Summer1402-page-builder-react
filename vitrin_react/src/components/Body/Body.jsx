import React from 'react'
import { Icons, data } from '../../utility/Data';
import CatIcons from './CatIcons';
import Slider from './Slider';
export default function Body() {
    const source = '../assets/images/bigcarousel4.jpg';
    return (
        <div className=" thebody items-center flex justify-center my-2 pt-[155px]">
            <div id="mainbody" className="flex flex-col bg-white justify-center items-center rounded-lg desktop:w-[800px] tablet:w-[780px] mobile:w-[580px] smmobile:w-[530px] vsmmobile:w-[470px]">
                <div id="bigslider" className=" ltr big-slider w-[100%] h-[300px] flex mb-[65px] vsmmobile:mb-0 vsmmobile:h-[40%]">
                    <div className="overflow-hidden relative h-[100%] my-[20px]">
                        <div id="items" className="items w-[300%] h-[100%] relative top-0 flex gap-3 vsmmobile:gap-[2rem] vsmmobile:h-[85%]">
                            <div className="bigslide cursor-pointer float-left justify-center transition-all duration-1000 relative">
                                <img
                                    className="bigcardimages  bg-skeleton"
                                    src={source}
                                    alt=""
                                />
                            </div>
                            <div className="bigslide  cursor-pointer float-left  justify-center transition-all duration-1000 relative">
                                <img
                                    className="bigcardimages  bg-skeleton"
                                    src={source}
                                    alt=""
                                />
                            </div>
                            <div className="bigslide cursor-pointer float-left justify-center transition-all duration-1000 relative">
                                <img
                                    className="bigcardimages  bg-skeleton"
                                    src={'../assets/images/'}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="bartarin" data-link="" data-title="برترین ها">
                    {
                        <Slider data={data['bartarin']} title={'برترین ها'} />
                    }
                </div>
                <div id="CatsContainer" className="flex flex-wrap mb-6 justify-center gap-[1.5rem] tablet:gap-[2.5rem] smmobile:gap-[10px] mobile:gap-[10px] vsmmobile:gap-[10px]">
                    {
                        Icons.map((icon, index) => {
                            return <CatIcons key={index} title={icon.title} imagesrc={icon.src} link={'#'} />
                        })
                    }
                </div>
                <div>
                    <a className="flex justify-center" href="">
                        <img
                            src="./assets/images/amade.png"
                            className="cardimg width660 "
                            alt=""
                        />
                    </a>
                </div>
                <div id="porfrosh" className='sliderDiv' data-link="category/12503" data-title="پرفروش هفته">
                    {
                        <Slider data={data['porfrosh']} title={'پرفروش هفته'} />
                    }
                </div>
                <div>
                    <a className="flex justify-center" href="">
                        <img
                            src="assets/images/darkh.png"
                            className="cardimg width660 "
                            alt=""
                        />
                    </a>
                </div>
                <div id="labkhandane" data-link="landing=262" data-title="لبخندانه">
                    {
                        <Slider data={data['labkhandane']} title={'لبخندانه'} />
                    }
                </div>
                <div>
                    <a className="flex justify-center" href="">
                        <img className="cardimg width660" src="assets/images/chesman.png" alt="" />
                    </a>
                </div>
                <div id="sabkzendegi" data-link="landing=246" data-title="سبک زندگی">
                    {
                        <Slider data={data['sabkzendegi']} title={'سبک زندگی'} />
                    }
                </div>
                <div>
                    <a className="flex justify-center" href="">
                        <img
                            src="assets/images/sobhane.png"
                            className="cardimg width660 "
                            alt=""
                        />
                    </a>
                </div>
                <div id="akhbar" data-link="landing=151" data-title="اخبار">
                    {
                        <Slider data={data['akhbar']} title={'اخبار'} />
                    }
                </div>
                <div>
                    <a className="flex justify-center" href="">
                        <img
                            src="assets/images/moramel.png"
                            className="cardimg width660 "
                            alt=""
                        />
                    </a>
                </div>
                <div id="mazhabi" data-link="landing=670" data-title="مذهبی">
                    {
                        <Slider data={data['mazhabi']} title={'مذهبی'} />
                    }

                </div>
                <div>
                    <a className="flex justify-center" href="">
                        <img
                            src="assets/images/khadamat.png"
                            className="cardimg width660 "
                            alt=""
                        />
                    </a>
                </div>
                <div id="tabliq" data-link="category/12615" data-title="تبلیغ گسترده">
                    {
                        <Slider data={data['tabliq']} title={'تبلیغ گسترده'} />
                    }
                </div>
                <div>
                    <a className="flex justify-center" href="">
                        <img
                            src="assets/images/sidena.png"
                            className="cardimg width660 "
                            alt=""
                        />
                    </a>
                </div>
                <div id="soroush" data-link="" data-title="سروش پلاس">
                {
                        <Slider data={data['soroush']} title={'سروش پلاس'} />
                    }

                </div>
            </div>
        </div>
    )
}
