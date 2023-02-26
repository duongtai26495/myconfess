import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../components/account/Login';
import Register from '../components/account/Register';
import { LOGIN_STATE, TOKEN_ACTIVE } from '../components/config/constanst'

const Authen = () => {

  const navigate = useNavigate();
  const [isLoginForm, setLoginForm] = useState(true)

  useEffect(() => {
    const check_user = () => {
      if (window.localStorage.getItem(LOGIN_STATE) && window.localStorage.getItem(TOKEN_ACTIVE)) {
        navigate("/account")
      } else {
        navigate("/authen")
      }
    }

    check_user()
  }, [])

  return (
    <div className='w-full mt-10 overflow-hidden rounded flex flex-row border-none lg:border m-auto shadow-none md:shadow-md h-auto md:h-1/2'>
      <div className='hidden md:block w-1/2 lg:w-3/5'>
        <img src='https://random.imagecdn.app/v1/image?width=700&height=500' className='w-full object-cover h-full' />
      </div>

      <div className='w-full md:w-1/2 lg:w-2/5 p-2 bg-primary'>
        <div className='w-2/3 mt-10 m-auto'>
        <p className='text-3xl font-bold text-white text-center w-full my-10'>LOGO</p>
        <p className='my-5 text-xl font-bold text-white'>{isLoginForm ? "Welcome Back" : "Register"}</p>
          {
            isLoginForm ?
              <Login />
              :
              <Register />
          }
        </div>
      </div>

    </div>
  )
}

export default Authen 