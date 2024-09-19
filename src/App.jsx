import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Header from './components/Header';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Electric from './pages/Electric';
import Hydrant from './pages/Hydrant';
import Machinery from './pages/Machinery';
import Conveyor from './components/Conveyor';
import Cargo from './components/Cargo';
import Press from './components/Press';
import Mixer from './components/Mixer';
import Scrubber from './components/Scrubber';
import Rack from './components/Rack';
import Construction from './pages/Construction';
import ConstructionEquip from './components/ConstructionEquip';
import ElectricEquip from './components/ElectricEquip';
import MachineEquip from './components/MachineEquip';


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/construction' element={<Construction />} />
        <Route path='/machinery' element={<Machinery />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/construction-equip' element={<ConstructionEquip />} />
        <Route path='/electric-equip' element={<ElectricEquip />} />
        <Route path='/machine-equip' element={<MachineEquip />} />
        <Route path='/electric' element={<Electric />} />
        <Route path='/hydrant' element={<Hydrant />} />
        <Route path='/conveyor' element={<Conveyor />} />
        <Route path='/cargo' element={<Cargo />} />
        <Route path='/press' element={<Press />} />
        <Route path='/mixer' element={<Mixer />} />
        <Route path='/scrubber' element={<Scrubber />} />
        <Route path='/rack' element={<Rack />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

