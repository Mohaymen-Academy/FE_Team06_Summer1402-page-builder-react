import React, { useState, useRef } from 'react';
import '../assets/Styles/App.css'
import Layout from '../Components/Layout';
import Page from '../Pages/Page.jsx';
import LeftSideBar from '../Components/LeftSideBar';
function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  return (
    <>
      <Layout leftsidePager={setPage}>
        <Page setIsModalOpen={setIsModalOpen} setPage={setPage} />
        <LeftSideBar pagename={page} open={isModalOpen} />
      </Layout>
    </>
  )
}

export default App
