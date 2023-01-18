import { Routes, Route } from 'react-router-dom';
import './App.css'
import Fusion from './components/Fusion';
import Home from './components/Home';
import Lore from './components/Lore';
import Mint from './components/Mint';
import Navbar from './components/Navbar';
import Whitepaper from './components/Whitepaper';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/lore' element={<Lore />} />
        <Route path='/whitepaper' element={<Whitepaper />} />
        <Route path='/mint' element={<Mint />} />
        <Route path='/fusion' element={<Fusion />} />
      </Routes>
    </div>
  )
}

export default App
