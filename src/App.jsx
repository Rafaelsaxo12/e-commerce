
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import CartPage from './pages/CartPage'
import Register from './pages/Register'
import ProdInfo from './pages/ProdInfo'
import Purchases from './pages/Purchases'
import NavBar from './components/shared/NavBar'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Footer from './pages/Footer'

function App() {

  return (
   <div className='body'>
    <NavBar/>
     <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/product/:id' element={<ProdInfo />} />
      <Route element={<ProtectedRoutes />}>  
        <Route path='/cart' element={<CartPage />} />
        <Route path='/purchases' element={<Purchases />} />
      </Route>
      <Route path='*' element= {<h2>This route does not exist</h2>}/>
     </Routes>
      <Footer/>
   </div>
  )
}

export default App
