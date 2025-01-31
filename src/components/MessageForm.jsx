import React from 'react'

const MessageForm = () => {
    const sendMsg = (e) => {
        e.preventDefault();
        document.querySelector('.messageInput').value = ''
    }

    return (
    <form style={{
        display: "flex",
        width:"100%",
        height:'30px',
        position:'relative',
        bottom:'0px'
    }}>
        <input type="text" className="messageInput"/>
        <button className="sendButton" onClick={sendMsg}>Send</button>
    </form>
  )
}

export default MessageForm