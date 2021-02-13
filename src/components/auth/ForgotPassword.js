import React, { useState} from 'react'
import axios from 'axios';
import './Login.css';
const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(undefined);
    const [error, setError] = useState(undefined);

    const forgotPasswordHandler = async (e) => {
        e.preventDefault();
        const config = {
            header:{"Content-Type":"applcation/json"}
        };
        setLoading(true);
        try {
            const { data } = await axios.post('/api/auth/forgotpassword', { email }, config);
            setSuccess(data.success);
            setLoading(data.data);
            setTimeout(()=>setLoading(undefined), 5000);
        } catch (error) {
            setError(error.response.data.error);
            setTimeout(()=>setError(undefined), 5000);
        }
    }
    return (
        <div className="login">
            <div className="login-container">
                <h2>Forgot Password</h2> 
                <form onSubmit={forgotPasswordHandler} className="loginForm" autoComplete="off">
                    {loading && 'Sending email...'}
                    <label htmlFor="email">Please enter the email used to create your account in order to get password reset link.</label>
                    <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    {error && <span className="error">{ error }</span>}
                    {success && <p>E-mail has been sent to {email} with the password reset link. Please check your spam folder if you cant find it in your inbox</p>}
                    <input type="submit" value="Get Password Reset Link" />
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword;
