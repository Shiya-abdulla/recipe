
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Yourpage from './pages/Yourpage'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {


  return (
    <>
  <Header/>
<Routes>
  <Route path='/' element={<Landing/>}/>
  <Route path='/your' element={<Yourpage/>}/>
</Routes>
<Footer/>
    </>
  )
}

export default App
