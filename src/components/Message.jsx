import React from 'react'

const Message = (props) => {
  return (
    <div className='msg-wrapper' style={{
        marginBottom:'30px'
    }}>
        <div className="msg-text">{props.text}</div>
        <h6 className="msg-sender">{props.sender}</h6>
    </div>
  )
}

export default Message