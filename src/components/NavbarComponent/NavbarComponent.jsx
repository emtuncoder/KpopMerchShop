import React from 'react'
import {WrapperLabelText,WrapperTextValue,WrapperContent} from './style'
const NavbarComponent = () => {

  const renderContent =(type,options)=>{
    switch(type){
      case 'text':
        return options.map((option)=>{
          return (<WrapperTextValue>{option}</WrapperTextValue>)
        })
      default:
        return{}
    }
  }
  return (
    <div>
      <WrapperLabelText>Artists</WrapperLabelText>
      <br></br>
      <WrapperContent>
      {renderContent('text',['Le Sserafim','Newjeans','(G)-idle','ILLIT','Aespa','Baby Monster','Ive','ITZY','Blackpink','NMIXX',])}
      </WrapperContent>     
    </div>
  )
}

export default NavbarComponent
