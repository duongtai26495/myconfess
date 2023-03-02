import React from 'react'

const JoinWithSocialButton = ({icon,title, onClick = () => {}, style, isLoading}) => {
  return (
    <div onClick={()=>onClick()} className={`w-full hover:bg-opacity-70 transition-all cursor-pointer p-2 rounded shadow font-bold ${style}`}>
        <img src={icon} className="w-6 m-auto" />
    </div>
  )
}

export default JoinWithSocialButton