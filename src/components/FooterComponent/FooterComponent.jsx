import React from 'react';
import { Row, Col } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';
import { WrapperFooter, WrapperText } from './style'; // Import styles

const FooterComponent = () => {
  return (
    <WrapperFooter>
      <Row>
        <Col span={8}>
          <WrapperText>About Us</WrapperText>
          <WrapperText>Careers</WrapperText>
          <WrapperText>Privacy Policy</WrapperText>
          <WrapperText>Terms of Service</WrapperText>
        </Col>
        <Col span={8}>
          <WrapperText>Contact Us</WrapperText>
          <WrapperText>Help Center</WrapperText>
          <WrapperText>FAQs</WrapperText>
        </Col>
        <Col span={8}>
          <WrapperText>Follow Us</WrapperText>
          <div>
            <FacebookOutlined style={{ margin: '0 10px' }} />
            <TwitterOutlined style={{ margin: '0 10px' }} />
            <InstagramOutlined style={{ margin: '0 10px' }} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <WrapperText>© 2023 Your Company Name. All rights reserved.</WrapperText>
        </Col>
      </Row>
    </WrapperFooter>
  );
};

export default FooterComponent;