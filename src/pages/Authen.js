import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomButton from '../components/account/CustomButton';
import Login from '../components/account/Login';
import Register from '../components/account/Register';
import { user } from '../config/accountAPI';
import { LOGIN_STATE, TOKEN_ACTIVE } from '../config/constanst'

const Authen = () => {

  const navigate = useNavigate();
  const [isLoginForm, setLoginForm] = useState(true)

  useEffect(() => {
    user() ? navigate("/account") : navigate("/authen")
  }, [])

  return (
    <div className='w-full mt-10 rounded-sm overflow-hidden flex flex-row border-none lg:border m-auto shadow-none md:shadow-md h-auto md:h-1/2'>
      <div className='hidden md:block w-1/2 lg:w-3/5'>
        <img src='https://random.imagecdn.app/v1/image' className='w-full object-cover h-full' />
      </div>

      <div className='w-full md:w-1/2 lg:w-2/5 p-2 bg-primary pb-10'>
        <div className='w-full lg:w-2/3  m-auto'>
          <p className='text-3xl font-bold text-white text-center w-full mt-3 mb-10'>LOGO</p>
          <p className='my-5 text-xl font-bold text-white'>{isLoginForm ? "Welcome Back" : "Join with us"}</p>
          {
            isLoginForm ?
              <Login />
              :
              <Register />
          }
          <CustomButton
            title={isLoginForm ? "Do not have an account? Sign up now" : "Have an account? Sign in now"}
            style={'w-full bg-black p-2 text-white text-center hover:bg-white hover:text-black transition-all rounded mt-3'}
            onClick={() => setLoginForm(!isLoginForm)}
          />
        </div>
      </div>

    </div>
  )
}

export default Authen 