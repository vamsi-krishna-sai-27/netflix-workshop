import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/common/header'
import './index.css'
import MainContent from "./components/common/mainContent"
import { BrowserRouter } from 'react-router-dom'
import { Link,Routes,Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
        {/* <Header>

        </Header>
        <MainContent child={<Header/>}></MainContent> */}
        <nav>
          <Link to='/'>Home </Link>
          <Link to='/about'>about</Link>
          <Link to='/contant'>contant</Link>
        </nav>
          <Routes>
            <Route path="/" element={<MainContent/>}></Route>
            <Route path="/about" element={<h1>About</h1>}></Route>
            <Route path="/contact" element={<h1>contact</h1>}></Route>
          </Routes>
    </BrowserRouter>

)
