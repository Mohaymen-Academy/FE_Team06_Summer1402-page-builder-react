import React , {useState,useRef} from 'react';
import '../assets/Styles/App.css'
import Layout from '../Components/Layout';
import Page from '../Pages/Page.jsx';
import LeftSideBar from '../Components/LeftSideBar';
function App() {
  const [page, setPage] = useState(0);
  return (
    <>
      <Layout>
        <Page/>
      </Layout>
      <LeftSideBar pagename={page} />
    </>
  )
}

export default App
