import React, {useEffect, useState} from 'react';
import axios from 'axios';
import validator from 'validator';
import './Login.css';
const Login = ({ history }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(undefined);
    useEffect(()=>{
        if(localStorage.getItem('authToken')){
            history.push("/");
        }
    },[history]);
    const loginHandler = async (e) => {
        e.preventDefault();
        if(!validator.isEmail(email)){
            setTimeout(()=>setError(undefined), 5000);
            setEmail("");
            setPassword("");
            return setError('Invalid E-mail Provided!');
        }
        const config = {
            headers:{"Content-Type":"application/json"}
        };
        try {
            const {data} = await axios.post('/api/auth/login', {email, password}, config);
            localStorage.setItem('authToken', data.token);
            history.push("/");
        } catch (error) {
            console.log(error.code);
            setError(error.response.data.error);
            setTimeout(()=>setError(undefined), 5000);
        }
    }
    return (
        <div className="login">
            <div className="login-container">
                <h2>User Login</h2> 
                <form onSubmit={ loginHandler } className="loginForm" autoComplete="off">
                    {error && <span className="error">{error}</span>}
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <a href="/forgotpassword">Forgot password?</a>
                    <input type="submit" value="Login" />
                </form>
            </div>
        </div>
    )
}

export default Login
