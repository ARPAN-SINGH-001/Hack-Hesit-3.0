
import FloatingMoney from "./components/FloatingMoney";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CountDown from './components/CountDown'
import About from "./components/About";
import Tracks from "./components/Tracks";
import Prizes from "./components/Prizes";
import Timeline from "./components/Timeline";
import Register from "./components/Register";
import Footer from "./components/Footer";
import PastHeists from "./components/PastHeist";
import Organizers from "./components/Organizers";
import FAQs from "./components/FAQs";

function App() {
  return (
    <>

      <FloatingMoney />

      
      <Navbar />
      <Hero/>
      <CountDown/>
      <About/>
      <Tracks/>
      <Prizes/>
      <Timeline/>
      <PastHeists />
      <Organizers />
      <FAQs />
      <Register/>
      <Footer/>
        
    </>
  )
}

export default App
