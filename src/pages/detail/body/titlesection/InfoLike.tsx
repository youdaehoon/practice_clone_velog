import React from 'react'

import "./infolike.css"
import "../../../../styles/common.css"

import HeartIcon from '../../../../components/HeartIcon'

interface IProps{
    numLike:number
}

const InfoLike :React.FC<IProps> = ({numLike:n}) => {
  return (
    <button className='disapearable flex flex-row align-center justify-center border-box'>
        <div className='heart'>
            <HeartIcon width={12} height={12}/>
        </div>
        <span className='like-num' >{n}</span>
    </button>
  )
}

export default InfoLike