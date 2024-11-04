import React from 'react'
import {WrapperLoginFormLeft} from './style'
import InputForm from '../../components/InputLoginForm/InputLoginForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import {Divider, Image} from 'antd';



const LoginPage = () => {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',paddingTop:'90px'}}>
      <div style={{width:'460px',height:'360',borderRadius:'6px'}}>
      <WrapperLoginFormLeft>
        <h1 style={{display:'flex',flexWrap:'wrap',justifyContent:'center',paddingTop:'20px',
          fontSize:'50px',fontWeight:'900',color:'#006638'}}>안녕하세요!</h1>
        <p style={{display:'flex',flexWrap:'wrap',justifyContent:'center',
          fontSize:'15px',fontWeight:'900',color:'#006638'
        }}>Please Login</p>
        <InputForm style={{width:'50px',height:'100px'}}></InputForm>
        
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'right'}}>
        <a href='/ForgetPass' style={{ color:'#006638',fontSize:'12px'}}>
          Forget password?
        </a>
        </div>

        <div style={{paddingTop:'20px'}}>    
        <ButtonComponent 
        textButton="Login"
        styleButton={{backgroundColor:'#f5f5f5',borderRadius:'0px',
            width:'100%' ,height:'30px'
           }}></ButtonComponent>
        </div>

        <div>
        <span style={{display:'flex',flexWrap:'wrap',justifyContent:'center',paddingTop:'20px',fontSize:'12px'}}>
          New Customer?
          <a href='/Signin' class="link" style={{paddingLeft:'10px',color:'#006638'}}> Create an account</a>
        </span>
        </div>
        <div >
        <Divider style={{  borderColor: '#006638' }}>Or</Divider>
        </div>


        <div style={{display:'flex',width:'100%',height:'100%',flexWrap:'wrap',justifyContent:'center'}}>
          <div style={{borderColor:'#338413',borderStyle:'solid',borderWidth:'1px',borderRadius:'0',margin:'0 10px'}}>
          <Image src='https://img.icons8.com/?size=48&id=118497&format=png'style={{width:'50px',height:'50px'}} preview={false}></Image>
          </div>
          <div style={{borderColor:'#338413',borderStyle:'solid',borderWidth:'1px',borderRadius:'0',margin:'0 10px'}}>
          <Image src='https://img.icons8.com/?size=64&id=119026&format=png' style={{width:'50px',height:'50px'}} preview={false}></Image>
          </div>
          <div style={{borderColor:'#338413',borderStyle:'solid',borderWidth:'1px',borderRadius:'0',margin:'0 10px'}}>
          <Image src='https://img.icons8.com/?size=48&id=V5cGWnc9R4xj&format=png'style={{width:'50px',height:'50px'}} preview={false}></Image>
          </div>
          <div style={{borderColor:'#338413',borderStyle:'solid',borderWidth:'1px',borderRadius:'0',margin:'0 10px'}}>
          <Image src='https://img.icons8.com/?size=50&id=phOKFKYpe00C&format=png'style={{width:'50px',height:'50px'}} preview={false}></Image>
          </div>
            
        </div>


      </WrapperLoginFormLeft>
      </div>
      
    </div>
  )
}

export default LoginPage
