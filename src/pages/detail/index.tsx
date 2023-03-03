import React from 'react'

import "../../styles/common.css"

import AsideIcons from './aside/detailicons'
import AsideNavbar from './aside/navbar'
import Layout from '../../components/ui/Layout'
import TitleSection from './body/titlesection'
import DetailHeader from './header/DetailHeader'

const Detail:React.FC = () => {
  return (

    <div>
        <DetailHeader/>
        <TitleSection/>
              <AsideIcons/>
              <div className='flex justify-center'>body</div>
              <AsideNavbar/>
    </div>
  
  )
}

export default Detail