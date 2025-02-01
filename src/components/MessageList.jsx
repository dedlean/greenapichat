import React from 'react'
import Message from './Message'

const MessageList = (props) => {
  return (
    <div style={{
        height:'100%',
        paddingLeft:'50px',
        overflowY:'auto'
    }}>
        {props.messages.map((message) => {
          if(message!=null||message!==undefined){
          return <Message text={message.text} sender={message.sender}/>}
        })}
    </div>
  )
}

export default MessageList