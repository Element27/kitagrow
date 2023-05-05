
import React from 'react'
import appStyles from './app.module.scss'
import Sidebar from './components/layout/Sidebar'
import ProductListPage from './pages/ProductList/ProductListPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {

  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path='/' element={<ProductListPage />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}

export default App
