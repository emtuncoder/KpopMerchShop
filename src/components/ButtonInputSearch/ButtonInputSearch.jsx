import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import InputComponent from '../InputComponent/InputComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ButtonInputSearch = (props) => {
    const { size, placeholder, textButton, 
        bordered, 
        backgroundColorBut='#107c10',colorBut='#fff',
        backgroundColorinput ='#fff' } = props
    return (
        <div style={{ display: 'flex' }}>

            <InputComponent
                size={size}
                bordered={bordered}
                placeholder={placeholder}
                style={{ backgroundColor: backgroundColorinput }}/>
           


            <ButtonComponent
                size={size}
                bordered={bordered}
                icon={<SearchOutlined color={colorBut} style={{color:colorBut}}/>}
                style={{ background: backgroundColorBut ,border:!bordered && 'none'}}
                textButton ={textButton}
            >
            </ButtonComponent>

        </div>
    )
}

export default ButtonInputSearch
