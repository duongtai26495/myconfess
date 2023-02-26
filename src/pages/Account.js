import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ACCESS_TOKEN, LOGIN_STATE, TOKEN_ACTIVE } from '../components/config/constanst'
import { signout } from '../components/config/functions';
import CustomButton from '../components/account/CustomButton'
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

  const accountSignOut = () => {
    signout()
    navigate("/authen")
  }

  return (
    <div>
      <CustomButton 
      title="Logout"
      style={"w-full p-2 bg-primary text-white"}
      onClick={()=>accountSignOut()}/>
    </div>
  )
}

export default Account 