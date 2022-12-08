import React from 'react'

import "../../styles/common.css"

interface IProps{
children:React.ReactElement
padding?:string|"0rem 1rem 0rem 1rem"
classNameArrCommon?:Array<string>

}

const Layout :React.FC<IProps> = ({children:c, padding:p,classNameArrCommon:ca}) => {
    let className=""
    if(ca){
        className=ca.join(" ")
    }

    p=p||"0rem 1rem 0rem 1rem";
    
    const style={
        padding:p,
        width:"100%"
    } 
  return (
    <div className={className+" border-box"} style={style}>{c}</div>
  )
}

export default Layout