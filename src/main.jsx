import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/common/header'
import './index.css'
import MainContent from "./components/common/mainContent"
import { BrowserRouter } from 'react-router-dom'
import { Link,Routes,Route } from 'react-router-dom'
import SignIn from './components/common/signIn'
import Register from './components/common/Register'

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
     <Header></Header>
      <Routes>
        <Route path='/' element={<MainContent/>}></Route>
        <Route path='/dashboard' element={<h1>dash</h1>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>

)
