import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Context } from './component/Context'
import Home from './pages/Home'
import Header from './component/Header'
import Trunk from './pages/Trunk'
import Footer from './component/Footer'
import Cala from './pages/Cala'
import Meady from './pages/Meady'
import Entalula from './pages/ Entalula'
import Voutoumi from './pages/Voutoumi'
import Turquoise from './pages/Turquoise'
import Pink from './pages/ Pink'
import Anse from './pages/ Anse'
import Green from './pages/Green'
import Horse from './pages/Horse'
function App() {


  return (
    <>
      <Context>
        <div className="min-h-screen bg-[#cad4dd] dark:bg-gray-900  text-black dark:text-white">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trunk" element={<Trunk />} />
            <Route path="/cala" element={<Cala />} />
            <Route path="/meady" element={<Meady />} />
            <Route path="/entalula" element={<Entalula />} />
            <Route path="/voutomi" element={<Voutoumi />} />
            <Route path="/turquoise" element={<Turquoise />} />
            <Route path="/pink" element={<Pink />} />
            <Route path="/anse" element={<Anse />} />
            <Route path="/green" element={<Green />} />
            <Route path="/horse" element={<Horse />} />
          </Routes>
          <Footer />
        </div>
      </Context>
    </>
  );
}

export default App
