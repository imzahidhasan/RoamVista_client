import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <div className='min-h-96'>
          <Outlet />
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
