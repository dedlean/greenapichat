import React from 'react'
import ChatTitle from './ChatTitle'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

const ChatForm = () => {
  return (
    <div style={{
        display:"flex",
        flexDirection:"column",
        height:'100%',
        width:'100%'
    }}>
        <ChatTitle title="Adam"/>
        <MessageList/>
        <MessageForm/>
    </div>
  )
}

export default ChatForm