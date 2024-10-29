import React from 'react'
import { Col } from 'antd';
import { WrapperHeader, Wrapperlogoheader } from './style';
import {
  UserOutlined,
  GlobalOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';


const boxStyle = {
  width: '100%',
  height: 120,
  borderRadius: 6,
  border: '1px solid #40a9ff',
};
const logostyle = {
  width: '100%',
  height: 'auto'
}

// Updated HeaderComponent  
const HeaderComponent = () => {

  return (
    <div>
      <WrapperHeader gutter={150}>
        <Col span={6}>
          <Wrapperlogoheader>
            <img src="https://kpopmerch.com/cdn/shop/files/GNB_2_600x.png?v=1669881628"
              alt="logo" logostyle ></img>
          </Wrapperlogoheader>
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