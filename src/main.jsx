import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/common/header'
import './index.css'
import MainContent from "./components/common/mainContent"
import { BrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
        {/* <Header>

        </Header>
        <MainContent child={<Header/>}></MainContent> */}
        <nav>
          <Link></Link>
          <Link></Link>
          <Link></Link>
        </nav>
    </BrowserRouter>

)
