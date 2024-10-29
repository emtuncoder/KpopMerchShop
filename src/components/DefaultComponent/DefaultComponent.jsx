import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'

const DefaultComponent = ({children}) => {
  return (
    <header>
      <HeaderComponent />   
      {children} 
    </header>
  )
}
export default DefaultComponent
