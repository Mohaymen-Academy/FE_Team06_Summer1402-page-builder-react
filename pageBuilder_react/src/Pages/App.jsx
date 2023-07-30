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
    {/* layout and page should be used with memo */}
      <Layout>  
        <Page setIsModalOpen={setIsModalOpen}/>
      </Layout>
      <LeftSideBar pagename={4} open={isModalOpen}/>
    </>
  )
}

export default App
