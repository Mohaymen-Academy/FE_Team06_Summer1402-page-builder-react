import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Body from "./components/Body/Body"
function App() {
  return (
    <div
    // style={{height:'100000px'}}
    // onScroll={()=>console.log('zarp')}
    // onScrollCapture={()=>console.log('wer')}
    className="rtl bg-[#e5ebef] flex flex-col overflow-x-hidden"
    >
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  )
}

export default App
