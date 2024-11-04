import React, { useState } from 'react'
import { Input }  from 'antd'

const InputForm = ({props}) => {
    const {valueInput,setValueInput} = useState('')
    // const {placeholder} ="Enter" = props
  return (
    <div>
      <div>
      <Input style={{borderRadius:'0px',outlineColor:'#107C10'}} placeholder={"Enter Username"} valueInput={valueInput}></Input> 
      </div>
      <div style={{paddingTop:'10px'}}>
      <Input.Password style={{borderRadius:'0px',outlineColor:'#107C10'}} placeholder={"Enter Password"} valueInput={valueInput}></Input.Password>
      </div>
      
    </div>
  )
}

export default InputForm
