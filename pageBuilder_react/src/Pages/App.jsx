import React , {useState,useRef} from 'react';
import '../assets/Styles/App.css'
import Layout from '../Components/Layout';
import Page from '../Pages/Page.jsx';
import LeftSideBar from '../Components/LeftSideBar';
function App() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage ] = useState(0);
  return (
    <>
      <Layout>  
        <Page setIsModalOpen={setIsModalOpen}/>
      </Layout>
      <LeftSideBar pagename={2} open={isModalOpen}/>
    </>
  )
}

export default App
