import React from 'react'
import ForgetPassInputForm from '../../components/ForgetPassInputForm/ForgetPassInputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import {Divider, Image} from 'antd';



const ForgetPasswordPage = () => {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',paddingTop:'90px'}}>
      <div style={{width:'460px',height:'360',borderRadius:'6px'}}>
      <div>
        <h1 style={{display:'flex',flexWrap:'wrap',justifyContent:'center',paddingTop:'20px',
          fontSize:'25px',fontWeight:'900',color:'#006638'}}>Oh you forgot your password? :(</h1>
        <p style={{display:'flex',flexWrap:'wrap',justifyContent:'center',
          fontSize:'15px',fontWeight:'900',color:'#006638'
        }}>Please enter your email</p>

        <div style={{paddingTop:'20px'}}>
        <ForgetPassInputForm ></ForgetPassInputForm>
        </div>
        


        <div style={{paddingTop:'30px'}}>    
        <ButtonComponent 
        textButton="Recover"
        styleButton={{backgroundColor:'#f5f5f5',borderRadius:'0px',
            width:'100%' ,height:'30px'
           }}></ButtonComponent>
        </div>


      </div>
      </div>
      
    </div>
  )
}

export default ForgetPasswordPage
