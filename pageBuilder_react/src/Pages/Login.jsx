import React from 'react';
import "../assets/Styles/Login.css"
import logo from "../../public/images/logo.png"
import { useNavigate } from 'react-router-dom';


function LoginPage() {
    const navigate = useNavigate();
    function handleButtonClick(){
        localStorage.setItem('login' , true);
        window.location.href = "/App";
    }
	return (
		< >
            <div dir='rtl'  className=" bg-gray font-vazir">
                <div className="main-div">
                    <div className="logo-div">
                        <img className="w-[60px]" src={logo}/>
                        <div>صفحه‌ساز سروش پلاس</div>
                    </div>
                    <div className="detail-div">
                        <div className="m-5">
                            اطلاعات طراحی صفحه
                        </div>
                        <div className="form-div">
                            <form >
                                <div className="mb-4">
                                <label className="input-text text-[12px]" for="username">
                                    عنوان صفحه خود را وارد کنید
                                </label>
                                <input className="input-div" id="title" type="text" placeholder="عنوان صفحه"/>
                                <p className="input-detail">عنوان صفحه ، تگ عنوان HTML است.</p>
                                </div>
                                <div className="flex flex-row gap-2 mb-2 ">
                                    <div className="w-[50%]">
                                        <label className="input-text text-[11px]" for="password">
                                            نام صفحه خود را وارد کنید (انگلیسی)
                                        </label>
                                        <input className="input-div" id="english-name" type="text" placeholder="Page name"/>
                                    </div>
                                    <div className="w-[50%]">
                                        <label className="input-text text-[11px]" for="password">
                                            نام صفحه خود را وارد کنید  (فارسی)
                                        </label>
                                        <input className="input-div" id="persian-name" type="text" placeholder="نام صفحه"/>
                                    </div>
                                </div>
                                <div className="flex items-center mb-5 mr-1">
                                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label for="default-checkbox" className="mr-2 text-[10px] font-medium text-gray-900 dark:text-gray-300">در طراحی نمایش داده شود</label>
                                </div>
                                <div className="flex items-center justify-between  w-full">
                                <button className=" button" type="button" onClick={()=>handleButtonClick()}>
                                    ذخیره و شروع طراحی 
                                </button>
                                </div>
                            </form>
                        </div>
                        
                    </div>

                </div>

            </div>
        </>
	);
}

export default LoginPage;
