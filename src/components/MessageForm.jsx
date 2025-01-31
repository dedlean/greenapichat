import React from 'react'

const MessageForm = () => {
  
    
    return (
    <div style={{
        display: "flex",
        width:"100%",
        height:'30px',
        position:'relative',
        bottom:'0px'
    }}>
        <input type="text" className="messageInput"/>
        <button className="sendButton">Send</button>
    </div>
  )
}

export default MessageForm