import { Card } from 'antd';
import styled from 'styled-components';


export const StyleNameProduct = styled.div
    `
    font-size:18px;
    height: 2.3em;
    color: #000000d1;
    font-weight: 600;
`
export const WrapperReportText = styled.div`
font-size:11px;
color:#000000d1;
display:flex;
align-items:center;
`
export const WrapperPriceText = styled.div`
color:#000000d1;
font-size:16px;
font-weight: 600;
margin:8px 0px;
`
export const WrapperCardStyle = styled(Card)`
width:200px;
&img{
height:200px;
weight:200px;
}
position:relative;
`
