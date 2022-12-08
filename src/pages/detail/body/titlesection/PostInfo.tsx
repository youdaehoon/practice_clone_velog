import React from 'react'
import InfoLike from './InfoLike'

import"../../../../styles/common.css"
import"./postinfo.css"

interface IProps{
    nick:string
    date:string
    numLike:number
}

const PostInfo :React.FC<IProps> = ({nick:n,date:d,numLike}) => {
  return (
    <div className='flex space-between'>
       <div className='flex information'>
            <span className='nick'>{n}</span>
            <span>·</span>
            <span className='date'>{d}</span>
        </div> 
        
        <InfoLike numLike={numLike}/>
        
    </div>
  )
}

export default PostInfo