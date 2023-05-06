
import Sidebar from './components/layout/Sidebar'
import AddNewPage from './pages/AddNewPage/AddNewPage'
import ProductListPage from './pages/ProductList/ProductListPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {

  return (
    <BrowserRouter>
      <Sidebar>
      <Routes>
        <Route path='/' element={<ProductListPage />} />
        <Route path='/addproduct' element={<AddNewPage />} />
      </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}

export default App
