import React from 'react'

interface IProps{
    url:string
    width?:number
    height:number
    style?:object
}
const MyImage:React.FC<IProps> = ({url:u,width:w,height:h,style:s}) => {
    
  return (
    <img src={u} width={w||"100%"} height={h} style={s} />
  )
}

export default MyImage