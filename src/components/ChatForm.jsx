import React from 'react'
import ChatTitle from './ChatTitle'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

const ChatForm = () => {
  return (
    <div style={{
        display:"flex",
        flexDirection:"column"
    }}>
        <ChatTitle title="Adam"/>
        <MessageList/>
        <MessageForm/>
    </div>
  )
}

export default ChatForm