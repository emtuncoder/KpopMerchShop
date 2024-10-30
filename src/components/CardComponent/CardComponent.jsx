import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;
import{WrapperStyleTextSale} from './style.js'

import { WrapperReportText,WrapperPriceText,StyleNameProduct } from './style.js'
import { StarFilled } from '@ant-design/icons'
const CardComponent = () => {
    return (
        <Card
            hoverable
            style={{
                width: 240,
            }}
            bodyStyle={{ padding: '10px' }}
            headStyle={{width:'200px',height:'200px'}}
            cover={<img alt="example" src="https://kpopmerch.com/cdn/shop/files/le-sserafim-album-le-sserafim-3rd-mini-album-easy-36851683393717_800x.jpg?v=1707289863" />}
        >

            <StyleNameProduct>Lesserafim Easy</StyleNameProduct>
            <WrapperReportText>
                <span style={{marginRight:'4px'}}><span>5.0<StarFilled style={{ fontSize: '12px', color: 'yellow' }} /></span></span>
                <WrapperStyleTextSale>  |  Sales 240k</WrapperStyleTextSale>
            </WrapperReportText>
            <WrapperPriceText>285.000 VND</WrapperPriceText>
        </Card>
    )
}

export default CardComponent
