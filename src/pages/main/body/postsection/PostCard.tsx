import React from 'react'
import ProfileImage from '../../../../components/ProfileImage'
import Card from '../../../../components/ui/Card'
import MyImage from '../../../../components/ui/MyImage'

import heart from"../../../../assets/img/heart.png"

import "./postcard.css"
import "../../../../styles/common.css"

interface Iprops{
data:{
    url:string,
    title:string,
    content:string,
    date:string,
    numReply:number,
    user:{
        profile:string,
        nick:string
},
numLike:number
}
}
const PostCard:React.FC<Iprops> = ({data:data}) => {
       
  return (
    <div className=''>
        <Card width={20} height={23.5} borderRadius={4}>
        <div className='flex flex-column space-between'>
        <MyImage url={data.url} height={167.012}></MyImage>
        
        <div className='wrap-post-body flex flex-column space-between'>
            <a>
                <h4 className='title'>{data.title}</h4>
                <p className='desc'>{data.content}</p>
            </a>
        <div className='post-info gray'> <span>{data.date}</span> <span>{data.numReply}</span>개의 댓글</div>
        </div>
        <div className='footer flex  space-between align-center'>
           <div className='flex align-center gap'>
             <ProfileImage url={data.user.profile} width={24} height={24}/>
             <span className='gray'>by</span>
             <span>{data.user.nick}</span>  
            </div>
            <div className='flex align-center gap'>
            <img src={heart} width={24} height={24} ></img>
            <span>  {data.numLike}</span>
            </div>
          
        </div> 
        </div>
            
        
    </Card>
    </div>
   
  )
}

export default PostCard