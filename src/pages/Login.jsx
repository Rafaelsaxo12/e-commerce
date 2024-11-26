import React from 'react';

const Login = () => {

  const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
  return (
    <div>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input id='email' type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id='password' type="text" />
        </div>
      </form>
    </div>
  )
}

export default Login;