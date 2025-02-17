import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Outlet />
    </div>
  )
}

export default App
