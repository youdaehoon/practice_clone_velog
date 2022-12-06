import React from 'react'
import { useAppSelector } from '../../redux/hooks'
import Body from './body'

const Main :React.FC = () => {
    const select=useAppSelector(state=>state.posts)
    console.log(select)
  return (
    <div>
      <Body/>
    </div>
  )
}

export default Main