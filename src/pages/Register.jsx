import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../components/hooks/useAuth';
import './styes/register.css'

const Register = () => {

  const {handleSubmit, register, reset} = useForm();

  const submit = data => {
   useAuth('/users', data);
    reset({
      email:'',
      firstName:'',
      lastName:'', 
      password:'',
      phone:'',
    });
  } 

  return (
    <div className='register'>
      <form className='register__form' onSubmit={handleSubmit(submit)}>
        <h2>Sing Up</h2>
        <div className='register__input'>
          <label htmlFor="firstName">First Name</label>
          <input {...register('firstName')} id='firstName' type="text" />
        </div>
        <div className='register__input'>
          <label htmlFor="lastName">Last Name</label>
          <input {...register('lastName')} id='lastName' type="text" />
        </div>
        <div className='register__input'>
          <label htmlFor="email">Email</label>
          <input {...register('email')} id='email' type="email" />
        </div>
        <div className='register__input'>
          <label htmlFor="password">Password</label>
          <input {...register('password')} id='password' type="password" />
        </div>
        <div className='register__input'>
          <label htmlFor="phone">Phone</label>
          <input {...register('phone')} id='phone' type="number" />
        </div>
        <button className='register__btn'>Submit</button>
      </form>
    </div>
  )
}

export default Register;