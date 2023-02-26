import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../components/account/Login';
import Register from '../components/account/Register';
import { LOGIN_STATE, TOKEN_ACTIVE } from '../components/config/constanst'

const Authen = () => {

  const navigate = useNavigate();
const [isLoginForm, setLoginForm] = useState(true)

  useEffect(()=>{
    const check_user = () =>{
      if (window.localStorage.getItem(LOGIN_STATE) && window.localStorage.getItem(TOKEN_ACTIVE)){
        navigate("/account")
      }else{
        navigate("/authen")
      }
    }

    check_user()
  },[])

  return (
    isLoginForm ? 
    <Login />
    :
    <Register />
  )
}

export default Authen 