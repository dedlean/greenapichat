import React from 'react'
import InputForm from './InputForm'

const Login = (props) => {
    let idInstance = '';
    let apiTokenInstance = '';
    let apiURL = '';
    const setII = (val) => {idInstance = val;}
    const setATI = (val) => {apiTokenInstance = val;}
    const setURL = (val) => {apiURL = val;}

    const setUserData = (e) => {
        e.preventDefault();
        props.setUser({idInstance: idInstance, apiTokenInstance: apiTokenInstance, apiURL: apiURL});
        props.loggedState();
    }

  return (
    <form className='login-form-block'>
        <InputForm text="Enter your idInstance" variable={setII}/>
        <InputForm text="Enter your apiTokenInstance" variable={setATI}/>
        <InputForm text="Enter your apiURL" variable={setURL}/>
        <button onClick={setUserData}>Log in</button>
    </form>
  )
}

export default Login