import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Login.css';
const ResetPassword = ({ history, match }) => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(undefined);
    const [success, setSuccess] = useState(undefined);
    useEffect(()=>{
        if(localStorage.getItem('authToken')){
            history.push("/");
        }
    },[history]);
    const resetPasswordHandler = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            setTimeout(()=>setError(undefined), 5000);
            setConfirmPassword("");
            setPassword("");
            return setError('Password does not match!');
        }
        const config = {
            headers:{"Content-Type":"application/json"}
        };
        try {
            const { data } = await axios.put(`/api/auth/resetpassword/${match.params.resetToken}`, {password}, config);
            if(data.success){
                setSuccess(data.data);
                setTimeout(()=>history.push("/"), 5000);
            }
        } catch (error) {
            setError(error.response.data.error);
            setTimeout(()=>setError(undefined), 5000);
        }
    }
    return (
        <div className="login">
            <div className="login-container">
                <h2>Reset Password</h2> 
                <form onSubmit={ resetPasswordHandler } className="loginForm" autoComplete="off">
                    {error && <span className="error">{error}</span>}
                    {success && <span className="success-message">{success}</span>}
                    <label htmlFor="password">Password</label>
                    <input type="text" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" placeholder="Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
                    <input type="submit" value="Reset Password" />
                </form>
            </div>
        </div>
    )
}

export default ResetPassword
