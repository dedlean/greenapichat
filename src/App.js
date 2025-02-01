import React, {useState, useEffect} from "react";
import Login from "./components/Login";
import ChatForm from "./components/ChatForm";
import UsersList from './components/UsersList';
import './styles/App.css';

function App() {
  const [user, setUser] = useState({idInstance: '', apiTokenInstance: '', apiURL: ''});
  const [logged, setLogged] = useState(false);
  const changeLogged = () => {setLogged(!logged);}
  const [chats, setChats] = useState([]);

  const addUser = (number, username) => {
    setChats([...chats, {username: username, messages: [], userID: (number+"@c.us"), active:false}]);
  }

  async function changeChat (userID) {
    await setChats(chats.map((chat) => {
      if(chat.userID === userID) {
        return {...chat, active: true};
      } else {
        return {...chat, active: false};
      }
    }))
  }

  const getMessage = async () => {
    let receiptId = 1;
    try {
      await fetch(user.apiURL + '/waInstance' + user.idInstance + '/receiveNotification/' + user.apiTokenInstance).then((response) => response.json())
      .then((data) => {
        receiptId = data.receiptId;

        if (data !== null && data.body.messageData.typeMessage === 'textMessage') {
          const messageText = data.body.messageData.textMessageData.textMessage;
          const sender = data.body.senderData.sender;
          const senderName = data.body.senderData.senderName;

          setChats((prevChats) =>
            prevChats.map((chat) => {
              if (chat.userID === sender) {
                return { ...chat, messages: [...chat.messages, { text: messageText, sender: senderName }] };
              }
              return chat;
            })
          );
        }

        fetch(user.apiURL + '/waInstance' + user.idInstance + '/deleteNotification/' + user.apiTokenInstance + '/' + data.receiptId, {method: 'DELETE'});
      })
    } catch (error) {
      console.error('Error fetching or processing message:', error);
    }
    console.log(receiptId);
  }

  useEffect(() => {
    if (logged && user.apiURL && user.idInstance && user.apiTokenInstance) {
      const intervalId = setInterval(getMessage, 5000);
      return () => clearInterval(intervalId);
    }
  }, [logged, user.apiURL, user.idInstance, user.apiTokenInstance]);


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
