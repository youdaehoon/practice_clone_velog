import React from 'react'
import logo from "../../../assets/img/velogLogo.png"

import "../../../styles/common.css"
import "./detaillogo.css"

const DetailLogo:React.FC= () => {
const data={
    nick:"ninto_2"
}
  return (
    <div className='wrap-logo flex align-center '>
        <img className='pointer' src={logo} width={28} height={28}></img>
        <span>{data.nick}</span>
    </div>
  )
}

export default DetailLogo