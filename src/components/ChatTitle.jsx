import React from 'react'

const ChatTitle = (props) => {
  return (
    <div style={{
        textAlign:'center',
        backgroundColor:'#014421'
    }}>
        <h2>{props.title}</h2>
    </div>
  )
}

export default ChatTitle