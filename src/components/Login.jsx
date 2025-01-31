import React from 'react'
import InputForm from './InputForm'

const Login = (props) => {
    let idInstance = '';
    let apiTokenInstance = '';
    const setII = (val) => {idInstance = val;}
    const setATI = (val) => {apiTokenInstance = val;}

    const setUserData = (e) => {
        e.preventDefault();
        props.setUser({idInstance: idInstance, apiTokenInstance: apiTokenInstance});
        props.loggedState();
    }

  return (
    <form className='login-form-block'>
        <InputForm text="Enter your idInstance" variable={setII}/>
        <InputForm text="Enter your apiTokenInstance" variable={setATI}/>
        <button onClick={setUserData}>Log in</button>
    </form>
  )
}

export default Login