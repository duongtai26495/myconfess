import React from 'react'

const JoinWithSocialButton = ({title, onClick = () => {}, style, isLoading}) => {
  return (
    <div onClick={()=>onClick()} className={`w-full hover:bg-opacity-70 transition-all cursor-pointer p-2 rounded shadow font-bold ${style}`}>
        {title}
    </div>
  )
}

export default JoinWithSocialButton