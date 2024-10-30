import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperTypeProduct,WrapperButtonViewMore,WrapperProducts } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import CardComponent from '../../components/CardComponent/CardComponent'

const HomePage = () => {
  const arr = ['MD/Goods', 'Card', 'Album','Best','Photobook','DVD/Blu-ray']
  return (
    <>
      <div style={{ padding: '0 120px' ,marginTop:'12px'}}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return (<TypeProduct name={item} key={item} />)
          })}
        </WrapperTypeProduct>
      </div>
      <div id="container" style={{ backgroundColor: '#efefef', height: '100%',width:'100%' }}>

        
        <SliderComponent></SliderComponent>
        
        <WrapperProducts>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />     
          <CardComponent />     
          <CardComponent />     
          <CardComponent />     
        </WrapperProducts>


        <div style={{marginTop:'18px  ',padding:'0 120px',justifyContent:'center',width:'100%',display:'flex'}}>
        <WrapperButtonViewMore textButton="VIEW MORE" type="outlined"
         styleButton={{backgroundColor:'#EEFF27',boder:'false',
          width:'110px' ,height:'45px'
         }}
         styleTextButton={{fontWeight:400,fontSize:'14px'}} ></WrapperButtonViewMore>    
          </div>
      </div>
    </>

  )
}

export default HomePage
