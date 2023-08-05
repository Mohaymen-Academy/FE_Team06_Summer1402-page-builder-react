import React, { useState } from 'react';
import '../assets/Styles/App.css'
import Layout from '../Components/Layout';
import Page from '../Pages/Page.jsx';
import LeftSideBar from '../Components/LeftSideBar';
import { NUM_PAGE } from '../utility/Constants';
function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(NUM_PAGE);
  return (
    <>
      <Layout leftsidePager={setPage}>
        <Page setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} setPage={setPage} />
        <LeftSideBar setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} pagename={page} open={isModalOpen} />
      </Layout>
    </>
  )
}

export default App
