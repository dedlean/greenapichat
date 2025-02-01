import React, {useState} from "react";
import Login from "./components/Login";
import ChatForm from "./components/ChatForm";
import UsersList from './components/UsersList';
import './styles/App.css';

function App() {
  const [user, setUser] = useState({idInstance: '', apiTokenInstance: ''});
  const [logged, setLogged] = useState(false);
  const changeLogged = () => {setLogged(!logged);}
  const [chats, setChats] = useState([{username: 'Adam', messages: [{text: 'prekl', sender: 'Adam'}, {text: 'prekl', sender: 'Adam'}, {text: 'prekl', sender: 'Adam'}, {text: 'prekl', sender: 'Adam'}, {text: 'prekl', sender: 'Adam'}, {text: 'prekl', sender: 'Adam'}], active:true, userID:'790309540@c.us'}]);

  const addUser = (number, username) => {
    setChats([...chats, {username: username, messages: [], userID: (number+"@c.us"), active:false}]);
  }

  const changeChat = (userID) => {
    setChats(chats.map((chat) => {
      if(chat.userID === userID) {
        return {...chat, active: true};
      } else {
        return {...chat, active: false};
      }
    }))
  }

  return (
    logged ? 
      <div style={{
        display:'flex',
        height:'100%'
      }}>
        <UsersList changeChat={changeChat} users={chats} addUser={addUser}/>
        <ChatForm user={user} setChats={setChats} chats={chats} style={{
          height:'100%'
        }}/>
      </div>
      :
      <Login loggedState={changeLogged} setUser={setUser}/>
  );
}

export default App;
