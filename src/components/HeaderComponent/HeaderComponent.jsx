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
    <div>
      <WrapperHeader gutter={120}>
        <Col span={6}>
          <div  >
            <img src="https://kpopmerch.com/cdn/shop/files/GNB_2_600x.png?v=1669881628"
              alt="logo"  ></img>
          </div>
        </Col>

        <Col span={12}>
          <ButtonInputSearch         
          size="medium"
          textButton="Search"          
          placeholder="input search text"/>        
        </Col>
        

        <Col span={6} style={{ color:'#fff',display: 'flex', gap: '50px'}}>
          <UserOutlined style={{ fontSize: '30px' }} />
          <GlobalOutlined style={{ fontSize: '30px' }} />
          <ShoppingCartOutlined style={{ fontSize: '30px' }} />
          <HeartOutlined style={{ fontSize: '30px' }} />
        </Col>
      </WrapperHeader>
      
    </div>
    
  )
}
export default HeaderComponent