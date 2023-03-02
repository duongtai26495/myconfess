import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ACCESS_TOKEN, LOGIN_STATE } from '../config/constanst'
import { signout, user } from '../config/accountAPI';
import CustomButton from '../components/account/CustomButton'

const Account = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    user() ? navigate("/account") : navigate("/authen")
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