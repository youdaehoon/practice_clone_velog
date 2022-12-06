import React from 'react'
import { useAppSelector } from '../../redux/hooks'

const Main :React.FC = () => {
    const select=useAppSelector(state=>state.posts)
    console.log(select)
  return (
    <div>Main</div>
  )
}

export default Main