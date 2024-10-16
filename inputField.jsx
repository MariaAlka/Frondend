import React from 'react'

const inputField = ({id , label,type , value , onChange}) => {
  return (
    <div>
      <label htmlFor={id}> {label}  </label>
      <input id={id} type={type} value={value} onChange={onChange}/>
    </div>
  )
}

export default inputField
