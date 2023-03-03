import React from 'react'

import "./myicon.css"
import "../../../../styles/common.css"

import Heart from "../../../../assets/img/heart.png"
import Share from "../../../../assets/img/share.png"


interface IProps{
    icon:"heart"|"share"
}

const MyIcon :React.FC<IProps> = ({icon}) => {
let src="";
    if(icon==="heart")src=Heart
    
    if(icon==="share")src=Share
    const style={
        filter: "invert(59%) sepia(8%) saturate(389%) hue-rotate(169deg) brightness(93%) contrast(86%)"
    }
  return (
    <div className='wrap-icon flex justify-center align-center'>
        <img style={style} src={src}  width={22} height={22}></img>
    </div>
  )
}

export default MyIcon