import React from 'react'
import { useAppSelector } from '../../redux/hooks'
import MainBody from './body'

const Main :React.FC = () => {
    const select=useAppSelector(state=>state.posts)
    console.log(select)
  return (
    <div>
      <MainBody/>
    </div>
  )
}

export default Main