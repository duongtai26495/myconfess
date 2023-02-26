import React from 'react'

const CustomButton = ({title, style, isLoading, onClick = () => {}}) => {
  return (
    <div onClick={onClick} className={style + ` cursor-pointer w-full p-1 ` + isLoading ?? `disabled` }>
    {isLoading ? "Please wait..." : title }
    </div>
  )
}

export default CustomButton