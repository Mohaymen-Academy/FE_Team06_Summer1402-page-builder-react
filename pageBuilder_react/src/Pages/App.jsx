import { useState } from 'react'

import '../assets/Styles/App.css'
import Layout from '../Components/Layout';

function App() {
  
  function handleClick(page)
  {
    window.location.href = "/" + page;
  }
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-[#D7D8DD]">
        <div className="flex flex-col justify-evenly w-[50%] h-[30%]">
          <button className="bg-white p-3 border hover:border-[#584ee0]  focus:outline-none focus:border-[#584ee0]" onClick={() => handleClick("login")}>Login</button>
          <button className="bg-white p-3 border hover:border-[#584ee0]  focus:outline-none focus:border-[#584ee0]" onClick={() =>handleClick("page1")}>Page 1</button>
          <button className="bg-white p-3 border hover:border-[#584ee0]  focus:outline-none focus:border-[#584ee0]" onClick={() => handleClick("page2")}>Page 2</button>
        </div>
      </div>
    </>
  )
}

export default App
