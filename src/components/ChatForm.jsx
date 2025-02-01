import React, { act } from 'react'
import ChatTitle from './ChatTitle'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

const ChatForm = (props) => {
  const activeChat = props.chats.find((chat) => chat.active)

   async function sendMessage (messageText) {
    let response = await fetch((props.user.apiURL+'/waInstance'+props.user.idInstance+'/sendMessage/'+props.user.apiTokenInstance), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chatId: activeChat.userID,
        message: messageText
      })
    })
    const json = await response.json();
    if(response.ok) {
      props.setChats(props.chats.map((chat) => {
        if(chat.active) {
          return {...chat, messages: [...chat.messages, {text:messageText, sender:'You'}]};
        }
        return chat;
      }))
    }
  }

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
        <MessageList messages={activeChat.messages}/>
        <MessageForm sendMessage={sendMessage}/>
    </div>
  )
}

export default ChatForm