import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div
`
display: flex;
align-items:center;
gap:24px;
justify-content:flex-start;
border-bottom:1px solid red;

`
export const WrapperButtonViewMore = styled(ButtonComponent)
`
&:hover{
color:#FBFCE2;
background:#EEFF27;
span{
color:#fff;
}
}
`
export const WrapperProducts = styled.div`
display:flex;
justify-content:center;
gap:50px;
flex-Wrap:wrap;
margin-top:30px;
`
