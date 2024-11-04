import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import { Container } from 'react-bootstrap'

const DefaultComponent = ({ children }) => {
  return (

    <header>
      <HeaderComponent />
      {children}
    </header>

  )
}
export default DefaultComponent
