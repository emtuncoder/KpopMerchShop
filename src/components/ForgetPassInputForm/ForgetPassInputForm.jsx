import React, { useState } from 'react'
import { Input }  from 'antd'

const ForgetPassInputForm = ({props}) => {
    const {valueInput,setValueInput} = useState('')
    // const {placeholder} ="Enter" = props
  return (
    <div>
      <div>
      <Input style={{borderRadius:'0px',outlineColor:'#107C10',height:'50px'}} placeholder={"Enter Email"} valueInput={valueInput}></Input> 
      </div>     
    </div>
  )
}

export default ForgetPassInputForm
