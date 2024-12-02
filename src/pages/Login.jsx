import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../components/hooks/useAuth';
import './styes/login.css'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {

  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [])

  const {handleSubmit, register, reset} = useForm();

  const submit = async data => {
   await useAuth('/users/login', data); 
    reset({
      email: '',
      password: '',
    })
    setToken(localStorage.getItem('token'));
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setToken();
  }

  return (
    <>
      {
        token ?
        <div className='login__logoutcontainer'>
          <button className='login__logout' onClick={handleLogout}>Logout </button>
        </div>
          :
          <div className='login__container'>
            <div className='login'>
              <form className='login__form' onSubmit={handleSubmit(submit)}>
                <h2><span>Welcome! Enter your email and password to continue
                </span></h2>
                <ul className='login__testdata'>
                  <strong>Test data</strong>
                  <li><EmailIcon/> john@gmail.com</li>
                  <li><LockIcon/> john1234</li>
                </ul>
                <div className='login__input'>
                  <label htmlFor="email">Email</label>
                  <input {...register('email')} id='email' type="email" />
                </div>
                <div className='login__input'> 
                  <label htmlFor="password">Password</label>
                  <input {...register('password')} id='password' type="password" />
                </div>
                <button className='login__btn'>Login</button>
              <p>If you are not register yet, <Link to='/register'>register here</Link></p>
              </form>
            </div> 
          </div>
      }
    </>
  )
}

export default Login;