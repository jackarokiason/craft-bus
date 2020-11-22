import React,{useState} from 'react';
import './Login.css'
import {Link,useHistory} from "react-router-dom";
import {auth} from "./firebase";
function Login() {
    const history =useHistory();
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const signIn = e =>{
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }
    const register = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth);
            if(auth){
                history.push('/');
            }
                })
                .catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <Link to='/'>
            <img className="login_logo" src="" alt=""/>
            <p  className='login_logo'>Craft-Bus</p>
            <p className='login_logo'>Login Page</p>
            </Link>
            <div className='login_container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type="submit" onClick={signIn} className="login_signin_button">Sign In</button>
                </form>
                <p>By continuing, you agree to Craft-Bus 
                Conditions of Use and Privacy Notice.</p>
                <button onClick={register} 
                className="login_registerbutton">Create Your Craft-Bus Account</button>
            </div>
        </div>
    )
}

export default Login

//logi