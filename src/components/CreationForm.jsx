import React from 'react'

const CreationForm = (props) => {
    const addChat = (e) => {
        e.preventDefault();
        const number = document.querySelector('.phoneNumber').value;
        const username = document.querySelector('.userName').value;
        props.addUser(number, username);
        document.querySelector('.phoneNumber').value = '';
        document.querySelector('.userName').value = '';
    }

    const inputStyle = {
        backgroundColor:'#666',
        color:'#fff',
        border:'none',
        padding:'5px',
        paddingLeft: '10px'
    }
  return (
    <form style={{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        gap:'5px',
        margin: 'auto 0 0 0'
    }}>
        <input type="text" className='phoneNumber' placeholder='Номер телефона' style={inputStyle}/>
        <input type="text" className='userName' placeholder='Название контакта'style={inputStyle}/>
        <button className='creationButton' onClick={addChat}>Создать</button>
        <h6 style={{padding: '0 10px'}}>Введите номер телефона в международном формате без плюса, пробелов и дефисов</h6>
    </form>
  )
}

export default CreationForm