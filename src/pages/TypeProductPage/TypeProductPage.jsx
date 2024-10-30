import { Row, Pagination, Col } from 'antd'
import React from 'react'
import { WrapperNavbar, WrapperProducts } from './style'
import CardComponent from '../../components/CardComponent/CardComponent'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'

const TypeProductPage = () => {
  const onChange = () => { }
  return (
    <div style={{ padding: '0 120px', background: '#EFEFEF', }}>
      <Row style={{ flexWrap: 'nowrap', paddingTop: '10px' }}>
        <WrapperNavbar span={4}>
          <NavbarComponent />
        </WrapperNavbar>
        <Col span={20}>
          <WrapperProducts>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>
          <Pagination defaultCurrent={2} total={100} onChange={onChange} style={{ textAlign: 'center', marginTop: '20px' ,justifyContent:'center'}} />
        </Col>
      </Row>
    </div>
  )
}

export default TypeProductPage
