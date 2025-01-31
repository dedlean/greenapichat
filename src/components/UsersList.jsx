import React from 'react'
import CreationForm from './CreationForm'

const UsersList = (props) => {
  return (
    <div style={{
        width:'20vw',
        display:'flex',
        flexDirection:'column'
    }}>
        {props.users.map((user) => {
                <button style={{
                    padding:'30px'
                }}>
                    <h4>{user.username}</h4>
                </button>
        })}
    <CreationForm addUser={props.addUser}/>
    </div>
  )
}

export default UsersList