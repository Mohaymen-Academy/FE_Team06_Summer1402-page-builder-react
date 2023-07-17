import './assets/styles/App.css'
import { Header,Footer,Category,HomeSlider } from './components'
function App() {

  return (
    <>
    <Header/>
    <HomeSlider/>
    <Category Title = "Recent Games"/>
    <Category Title = "Most Played Games"/>
    <Category Title = "Populare Games"/>

    <Footer/>
    </>
  )
}

export default App
