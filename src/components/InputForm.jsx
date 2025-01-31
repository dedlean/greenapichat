import React from 'react'

const InputForm = (props) => {
    const setVar = (e) => props.variable(e.target.value);

  return (
    <div className='inputForm'>
        <h3>{props.text}</h3>
        <input type="text" onChange={setVar}/>
    </div>
  )
}

export default InputForm