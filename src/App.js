import React, {useState} from "react";
import Login from "./components/Login";
import ChatForm from "./components/ChatForm"

import './styles/App.css'

function App() {
  const [user, setUser] = useState({idInstance: '', apiTokenInstance: ''});
  const [logged, setLogged] = useState(false);
  const changeLogged = () => {setLogged(!logged);}

  return (
    logged ? 
      <ChatForm/>
      :
      <Login loggedState={changeLogged} setUser={setUser}/>
  );
}

export default App;
