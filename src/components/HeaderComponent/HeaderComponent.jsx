import React from 'react'
import { Col } from 'antd';
import { WrapperHeader } from './style';
import {
  UserOutlined,
  GlobalOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';


// Updated HeaderComponent  
const HeaderComponent = () => {

  return (
    <div style={{marginLeft:'60px',marginRight:'60px'}}>
      <WrapperHeader gutter={120}>
        <Col span={6}>
          <a href="/"  >  
            <img src="https://kpopmerch.com/cdn/shop/files/GNB_2_600x.png?v=1669881628"
              alt="logo"  ></img>
          </a>
        </Col>

        <Col span={12}>
          <ButtonInputSearch                   
          size="medium"
          textButton="Search"          
          placeholder="input search text"
          style={{borderRadius:'0px'}}
          />        
        </Col>
        

        <Col span={6} style={{ color:'#fff',display: 'flex', gap: '50px'}}>
          <a style={{color:'#fff'}} href='/Login'><UserOutlined  style={{ fontSize: '30px' }} /></a>
          <GlobalOutlined style={{ fontSize: '30px' }} />
          <ShoppingCartOutlined style={{ fontSize: '30px' }} />
          <HeartOutlined style={{ fontSize: '30px' }} />
        </Col>
      </WrapperHeader>
      
    </div>
    
  )
}
export default HeaderComponent