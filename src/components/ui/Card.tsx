import React from 'react'

interface IProps{
children:React.ReactElement
width:number
height:number
borderRadius:number
}
const Card : React.FC<IProps> = ({children:c,width:w,height:h,borderRadius:br}) => {
  return (
    <div style={{width:w+"rem",height:h+"rem",borderRadius:br,boxShadow:"rgb(0 0 0 / 4%) 0px 4px 16px 0px"}}>{c}</div>
  )
}

export default Card