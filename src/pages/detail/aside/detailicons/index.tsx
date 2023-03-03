import React from 'react'
import HeartIcon from '../../../../components/HeartIcon'
import MyIcon from './MyIcon'

import "./index.css"
import "../../../../styles/common.css"


const AsideIcons :React.FC = () => {
  const data={
    numLike:113
  }
  return (
    <aside className="wrap-icons flex flex-column align-center justify-center border-box">
      <div><MyIcon icon='heart'/></div>
      <span>{data.numLike}</span>
      <div><MyIcon icon='share'/></div>
    </aside>
  )
}

export default AsideIcons


