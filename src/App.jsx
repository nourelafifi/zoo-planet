import Header from './components/Header/Header'
import ConsultationIcon from './components/ConsultationIcon/ConsultationIcon'
import Footer from './components/Footer/Footer'
import ConsultationBox from './components/ConsultationBox/ConsultationBox'
import Homepage from './pages/Homepage'
import Booking from './pages/Booking'
import AboutUsPage from './pages/AboutUsPage'
import { useEffect, useState } from 'react'
import {Routes , Route, HashRouter} from 'react-router-dom'
import ScrollToTop from "./ScrollToTop"
import NotFound from './pages/NotFound'
import Aside from './components/aside/Aside'
function App() {
  const [aside , setAside]= useState(false)
  const [consult , setConsult] = useState(false)
  useEffect(() => {
    if (aside) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "visible";
    }
    return () => {
      document.documentElement.style.overflowY = "visible";
    };
  }, [aside]);
  return (
    <>
      <HashRouter basename="/zoo-planet">
        <ScrollToTop />
        <Header setAside={setAside}/>
        <Aside aside={aside} setAside={setAside}/>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/bookappointment' element={<Booking />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/AboutUs' element={<AboutUsPage />} />
        </Routes>
        <Footer />
        <ConsultationIcon setConsult={()=> setConsult(true)}/>
        <ConsultationBox consult={consult} setConsult={()=> setConsult(false)}/>
      </HashRouter>
    </>
  )
}

export default App
