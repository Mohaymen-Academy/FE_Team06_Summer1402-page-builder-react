import './assets/styles/App.css'
import { Header,Footer,Category,HomeSlider ,Describe,Testimonials} from './components'
function App() {

  return (
    <>
    <Header/>
    <HomeSlider/>
    <Category Title = "Recent Games"/>
    <Describe/>
    <Category Title = "Most Played Games"/>
    <Testimonials/>
    <Category Title = "Populare Games"/>
    <Footer/>
    </>
  )
}

export default App
