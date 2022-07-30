import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Homepage from './Pages/Homepage'
import UserNotes from './Pages/UserNotes'
import About from './Pages/About'
import Login from './Pages/Login'

function App() {

return(
<>
  <Header/>
  <Router>
  <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/user-notes' element={<UserNotes/>}/>
    <Route path='/login' element={<Login/>}/>
  </Routes>
  
  </Router>
  <ToastContainer />
  
  </>
)
  
}

export default App;
