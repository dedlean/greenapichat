import React, {useState} from "react";
import Login from "./components/Login";
import ChatForm from "./components/ChatForm";
import UsersList from './components/UsersList';
import './styles/App.css';

function App() {
  const [user, setUser] = useState({idInstance: '', apiTokenInstance: ''});
  const [logged, setLogged] = useState(false);
  const changeLogged = () => {setLogged(!logged);}
  const [chats, setChats] = useState([{username: 'Adam', messages: ['prekl', 'prekl', 'prekl', 'prekl', 'prekl', 'prekl']}]);

  const addUser = (number, username) => {
    setChats([...chats, {username: username, messages: [], userID: (number+"@c.us")}]);
  }

  return (
    logged ? 
      <div style={{
        display:'flex',
        height:'100%'
      }}>
        <UsersList users={chats} addUser={addUser}/>
        <ChatForm style={{
          height:'100%'
        }}/>
      </div>
      :
      <Login loggedState={changeLogged} setUser={setUser}/>
  );
}

export default App;
