import React from 'react'
import InputSigninForm from '../../components/InputSigninForm/InputSigninForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import {Divider, Image} from 'antd';



const SigninPage = () => {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',paddingTop:'90px'}}>
      <div style={{width:'460px',height:'360',borderRadius:'6px'}}>
      <div>
        <h1 style={{display:'flex',flexWrap:'wrap',justifyContent:'center',paddingTop:'20px',
          fontSize:'50px',fontWeight:'900',color:'#006638'}}>안녕하세요!</h1>
        <p style={{display:'flex',flexWrap:'wrap',justifyContent:'center',
          fontSize:'15px',fontWeight:'900',color:'#006638'
        }}>Create your own account here:</p>
        <InputSigninForm ></InputSigninForm>


        <div style={{paddingTop:'20px'}}>    
        <ButtonComponent 
        textButton="Create"
        styleButton={{backgroundColor:'#f5f5f5',borderRadius:'0px',
            width:'100%' ,height:'30px'
           }}></ButtonComponent>
        </div>

        <div>
        <span style={{display:'flex',flexWrap:'wrap',justifyContent:'center',paddingTop:'20px',fontSize:'12px'}}>
          Already have an account?
          <a href='/Login' class="link" style={{paddingLeft:'10px',color:'#006638'}}> Login</a>
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


      </div>
      </div>
      
    </div>
  )
}

export default SigninPage
