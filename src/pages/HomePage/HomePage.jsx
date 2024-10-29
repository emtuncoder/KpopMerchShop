import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'

const HomePage = () => {
  const arr = ['Goods', 'Card', 'Album']
  return (
    <>
      <div style={{ padding: '0 120px' }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return (<TypeProduct name={item} key={item} />)
          })}
        </WrapperTypeProduct>
      </div>
      <div id="container" style={{ backgroundColor: '#efefef', height: '1000px' }}>
        <SliderComponent></SliderComponent>
        <div style={{ marginTop: '30px', display: 'flex', alignItems: 'center', gap: '50px', padding: '0 120px'}}>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
         
        </div>
        
        <div style={{padding:'0 120px'}}>
        <NavbarComponent/>
          </div>
      </div>
    </>

  )
}

export default HomePage
