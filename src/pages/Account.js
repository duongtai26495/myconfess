import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ACCESS_TOKEN, LOGIN_STATE, TOKEN_ACTIVE } from '../components/config/constanst'

const Account = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    const check_user = () =>{
      if (window.localStorage.getItem(LOGIN_STATE) == 'true' && window.localStorage.getItem(ACCESS_TOKEN)){
        navigate("/account")
      }else{
        navigate("/authen")
      }
    }

    check_user()
  },[])

  return (
    <div>Account</div>
  )
}

export default Account 