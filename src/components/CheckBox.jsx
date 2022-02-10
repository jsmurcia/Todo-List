import React from 'react'
import './CheckBox.css'

const CheckBox = (props) => {
    const {
        onChange,
        data:{id,description,done}
    }=props
  return (
    <>
    <label className='Checkbok-item'>
        <input
            className='Checkbok-item-checkBox'
            name={id}
            type="CheckBox"
            defaultChecked={done}
            onChange={onChange}
        />
        <div className='Checkbok-item-divText'>{description}</div>

    </label>    
    </>
  )
}

export default CheckBox