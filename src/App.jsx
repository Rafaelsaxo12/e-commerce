
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
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

function App() {

  return (
   <div>
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
     <footer className='footer'>
      <div className='footer__container'>
        <h4 className='footer__title'>© Academlo 2024</h4>
        <section className='footer__links'>
          <div>
            <Link to='/'><InstagramIcon/></Link>
          </div>
          <div>
            <Link to='/'><LinkedInIcon/></Link>
          </div>
          <div>
            <Link to='/'><YouTubeIcon/></Link>
          </div>
        </section>
      </div>
     </footer>
   </div>
  )
}

export default App
