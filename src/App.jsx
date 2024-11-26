
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import CartPage from './pages/CartPage'
import Register from './pages/Register'
import ProdInfo from './pages/ProdInfo'
import Purchases from './pages/Purchases'
import NavBar from './components/shared/NavBar'

function App() {

  return (
   <div>
    <NavBar/>
     <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/product/:id' element={<ProdInfo />} />
      <Route path='/purchases' element={<Purchases />} />
     </Routes>
   </div>
  )
}

export default App
