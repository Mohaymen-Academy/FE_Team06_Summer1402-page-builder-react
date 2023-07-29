import { Link } from 'react-router-dom';
import '../assets/Styles/App.css'
// import Layout from '../Components/Layout';

function App() {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-[#D7D8DD]">
        <div className="flex flex-col justify-evenly w-[50%] h-[30%]">
          <Link
            to={'/login'}>
            <button className="bg-white p-3 text-blue-400 border hover:border-[#584ee0]  focus:outline-none focus:border-[#584ee0]">Login</button>
          </Link> 
          <Link
            to={'/page1'}>
            <button className="bg-white p-3 border text-blue-400 hover:border-[#584ee0]  focus:outline-none focus:border-[#584ee0]">Page 1</button>
          </Link>
          <Link
            to={'/page2'}>
            <button className="bg-white p-3 border text-blue-400 hover:border-[#584ee0]  focus:outline-none focus:border-[#584ee0]">Page 2</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default App
