import React, { act } from 'react'
import ChatTitle from './ChatTitle'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

const ChatForm = (props) => {
  const activeChat = props.chats.find((chat) => chat.active)

  if(!activeChat) {
    return <div>
      No chat
    </div>
  }

  return (
    <div style={{
        display:"flex",
        flexDirection:"column",
        height:'100%',
        width:'100%'
    }}>
        <ChatTitle title={activeChat.username}/>
        <MessageList messages={activeChat.messages} sender={activeChat.username}/>
        <MessageForm/>
    </div>
  )
}

export default ChatForm