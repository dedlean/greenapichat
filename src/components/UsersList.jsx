import React from 'react'
import CreationForm from './CreationForm'

const UsersList = (props) => {
  const changeChat = (e) => {
    props.changeChat(e.target.getAttribute('data-userid'));
  }

  if(!props.users || props.users.length===0) {
    return <div style={{
      width:'20vw',
      display:'flex',
      flexDirection:'column'
  }}>
      Пользователи не найдены
      <CreationForm addUser={props.addUser}/>
    </div>
  }

  return (
    <div style={{
        width:'20vw',
        display:'flex',
        flexDirection:'column'
    }}>
        {props.users.map((user,index) => {
                return <button key={user.userID} onClick={changeChat} className='chatButton' data-userid={user.userID}>
                    <h4>{user.username}</h4>
                </button>
        })}
    <CreationForm addUser={props.addUser}/>
    </div>
  )
}

export default UsersList