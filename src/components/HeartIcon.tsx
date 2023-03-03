import React from 'react'

import heart from"../assets/img/heart.png"

interface IProps{
    width:number
    height:number
}

const HeartIcon :React.FC<IProps> = ({width:w,height:h}) => {
    const style={
        filter: "invert(59%) sepia(8%) saturate(389%) hue-rotate(169deg) brightness(93%) contrast(86%)"
    }
  return (
    <img style={style} src={heart} width={w} height={h}></img>
    )
}

export default HeartIcon