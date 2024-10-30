import styled from "styled-components";
import { Image } from "antd";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
export const WrapperStyleImageSmall = styled(Image)`
height:120px;
width:120px;
`
export const WrapperStyleNameProduct =styled.h1
`
padding-left:20px;
color:#000000;
font-size:24px;
font-weight:300;
line-height:32px
word-break:break-word;
`
export const WrapperStyleTextSale =styled.span`
padding-left:20px;
font-size:15px;
line-height:24px;
color:#00000;`

export const WrapperPriceProduct =styled.div`
background:#f5f5f5;
border-radius:4px;
`
export const WrapperPriceTextProduct =styled.div`
padding-left:20px;
font-size:32px;
line-height:40px;
margin-right:8px;
font-weight:500;
padding:10px;
margin-top:10px;
`
export const ProductMoreDetail =styled.div`
padding-left:20px;
    padding-top:20px;
    display: grid;
    grid-template-columns: 130px auto;
    grid-gap: 15px;
    margin-bottom: 24px;`

export const Underline =styled.div`
padding-top:20px;
border-bottom:1px solid green;`

export const ProductVersionChoose =styled.div`
padding-left:20px;
display: grid;
    grid-template-columns: 130px auto;
    grid-gap: 15px;
    margin-bottom: 24px;
    align-items:center;
`
export const ProductQuantityChoose = styled.div`
padding-left:20px;
display: grid;
    grid-template-columns: 130px auto;
    grid-gap: 15px;
    margin-bottom: 24px;
    align-items:center;
`
export const WrapperButtonBuyProduct = styled(ButtonComponent)`

`
export const WrapperButtonFavProduct = styled(ButtonComponent)`

`