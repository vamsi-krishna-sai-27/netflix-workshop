import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/common/header'
import './index.css'
import MainContent from "./components/common/mainContent"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainContent child={Header}>

    </MainContent>
  </StrictMode>
)
