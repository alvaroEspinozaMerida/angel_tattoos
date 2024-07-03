import './App.css'
import Navbar from "./components/Navbar/index.jsx";
import Home from "./components/Home/index.jsx"
import { Routes, Route } from 'react-router-dom';
import ContactPage from "./components/ContactPage/index.jsx";
import {ToastContainer} from 'react-toastify';



function App() {
  return (
    <>
      <Navbar/>
        <Routes>
            <Route path = "/" element={<Home/>}/>

            <Route path = "/contact" element = {<ContactPage/>} />
        </Routes>

    </>
  )
}

export default App
