import React from 'react'
import {Col,Image,Row} from 'antd'
import {WrapperStyleImageSmall,
    WrapperStyleNameProduct,
    WrapperStyleTextSale,
    WrapperPriceProduct,
    WrapperPriceTextProduct,
    ProductMoreDetail,
    Underline,
    ProductVersionChoose,
    WrapperButtonBuyProduct,
    ProductQuantityChoose,
    WrapperButtonFavProduct} from './style'
import { StarFilled ,HeartOutlined } from '@ant-design/icons'
import DropdownComponent from '../../components/DropdownComponent/DropdownComponent'
import InputNumberComponent from '../InputNumberComponent/InputNumberComponent'


const ProductDetailComponent = () => {
  return (
    <Row style={{padding:'16px',background:'#fff '}}>
        <Col span={10}>
        <Image alt="image product"
        src="https://kpopmerch.com/cdn/shop/files/le-sserafim-album-le-sserafim-3rd-mini-album-easy-36851683393717_800x.jpg?v=1707289863"/>
        <Row style={{paddingTop:'10px'}}>
            <Col span={5}>
            <WrapperStyleImageSmall src="https://kpopmerch.com/cdn/shop/files/le-sserafim-album-le-sserafim-3rd-mini-album-easy-36851683393717_800x.jpg?v=1707289863"
            alt="image small"  />
            </Col>

            <Col span={5}>
            <WrapperStyleImageSmall src="https://kpopmerch.com/cdn/shop/files/le-sserafim-album-vol-1-le-sserafim-3rd-mini-album-easy-36851712491701_800x.jpg?v=1708251963" 
            alt="image small"  />
            </Col>

            <Col span={5}>            
            <WrapperStyleImageSmall src="https://kpopmerch.com/cdn/shop/files/le-sserafim-album-vol-2-le-sserafim-3rd-mini-album-easy-36851713015989_800x.jpg?v=1708251967" 
            alt="image small"  />
            </Col>

            <Col span={5}>
            <WrapperStyleImageSmall src="https://kpopmerch.com/cdn/shop/files/le-sserafim-album-vol-3-le-sserafim-3rd-mini-album-easy-36851714556085_800x.jpg?v=1708251970" 
            alt="image small"  />
            </Col>
        </Row>
        </Col>
        <Col span={14}>
        <WrapperStyleNameProduct>LE SSERAFIM - 3rd Mini Album EASY</WrapperStyleNameProduct>
        <WrapperStyleTextSale>
        <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />        
        <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />        
        <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />        
        <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />        
        <StarFilled style={{ fontSize: '12px', color: 'yellow' }} /> 
        <WrapperStyleTextSale>  |  Sales 240k</WrapperStyleTextSale>       
        </WrapperStyleTextSale>

        <WrapperPriceProduct>
            <WrapperPriceTextProduct>
                285.000 VND
            </WrapperPriceTextProduct>
        </WrapperPriceProduct>

        <Underline></Underline>

        <ProductMoreDetail>
            <div>Label</div>
            <div> Source Music</div>
            <div>Artist</div>
            <div>Le Sserafim</div>
            <div>Release date</div>
            <div>Feb 19th, 2024</div>
        </ProductMoreDetail>

        <ProductVersionChoose>
            Version:
            <div><DropdownComponent/></div>
        </ProductVersionChoose>

        <ProductQuantityChoose>
            Quantity:
            <div><InputNumberComponent/></div>
        </ProductQuantityChoose>
        

        <WrapperButtonBuyProduct textButton="BUY NOW"
        styleButton={{backgroundColor:'#f5f5f5',boder:'false',
            width:'100%' ,height:'45px'
           }}
         ></WrapperButtonBuyProduct>

        <div style={{paddingTop:'20px'}}>
        <WrapperButtonFavProduct icon={<HeartOutlined/>} textButton="ADD TO FAVORITE"
        styleButton={{backgroundColor:'#ffffff',
            width:'auto' ,height:'40px'
           }}></WrapperButtonFavProduct> 
        </div>

         
        </Col>
    </Row>
  )
}

export default ProductDetailComponent
