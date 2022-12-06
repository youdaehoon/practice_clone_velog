import React from 'react'

interface IProps{
children:React.ReactElement
width:number
height:number
borderRadius:number
}
const Card : React.FC<IProps> = ({children:c,width:w,height:h,borderRadius:br}) => {
  return (
    <div style={{backgroundColor:'gray',width:w,height:h,borderRadius:br}}>{c}</div>
  )
}

export default Card