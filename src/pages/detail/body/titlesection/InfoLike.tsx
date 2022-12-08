import React from 'react'

import heart from "../../../../assets/img/heart.png"

import "./infolike.css"
import "../../../../styles/common.css"

interface IProps{
    numLike:number
}

const InfoLike :React.FC<IProps> = ({numLike:n}) => {
  return (
    <button className='disapearable flex flex-row align-center justify-center border-box'>
        <img className='heart' src={heart} width={12} height={12}></img>
        <span className='like-num' >{n}</span>
    </button>
  )
}

export default InfoLike