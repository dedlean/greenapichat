import React from 'react'

const Message = (props) => {
  return (
    <div className='msg-wrapper' style={{
        marginTop:'30px'
    }}>
        <div className="msg-text" style={{
            backgroundColor:'#087830',
            borderRadius:'10px 10px 10px 0',
            width: 'fit-content',
            padding: '10px'
        }}>{props.text}</div>
        <h6 className="msg-sender" style={{
            marginTop: 0
        }}>{props.sender}</h6>
    </div>
  )
}

export default Message