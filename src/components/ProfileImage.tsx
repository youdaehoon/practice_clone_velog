import React from 'react'
import MyImage from './ui/MyImage'

interface Iprops{
    width:number
    height:number
    url:string
}
const ProfileImage:React.FC<Iprops>= ({width:w,height:h,url:u,}) => {
    const style={
        borderRadius:"50%",
        objectFit:"cover"
    }
  return (
    <MyImage url={u} width={w} height={h} style={style}></MyImage>
  )
}

export default ProfileImage