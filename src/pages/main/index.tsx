import React from 'react'
import { useAppSelector } from '../../redux/hooks'
import MainBody from './body'
import MainHeader from './header'
import MainTap from './tap/Index'

const Main :React.FC = () => {
    const select=useAppSelector(state=>state.posts)
    console.log(select)
  return (
    <div>
      <MainHeader/>
      <MainTap/>
      <MainBody/>
    </div>
  )
}

export default Main