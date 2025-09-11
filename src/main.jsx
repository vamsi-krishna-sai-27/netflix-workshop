import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/common/header'
import './index.css'
import MainContent from "./components/common/mainContent"
import { BrowserRouter } from 'react-router-dom'
import { Link,Routes,Route } from 'react-router-dom'
import SignIn from './components/common/signIn'
import Register from './components/common/Register'
import AdminDash from './components/adminUi/adminDash'
import AddMovie from './components/adminUi/AddMovie'
import AddGenre from './components/adminUi/AddGenre'


createRoot(document.getElementById('root')).render(

    <BrowserRouter>
     <Header></Header>
      <Routes>
        <Route path='/' element={<MainContent/>}></Route>
        <Route path='/dashboard' element={<AdminDash/>}></Route>
        <Route path='/signin' element={<Register/>}></Route>
        <Route path='/add-movie' element={<AddMovie/>}></Route>
        <Route path='/add-genre' element={<AddGenre/>}></Route>
      </Routes>
    </BrowserRouter>

)
