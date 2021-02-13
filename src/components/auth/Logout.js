import React, { useEffect } from 'react'

const Logout = ({ history }) => {
    useEffect(() => {
        localStorage.removeItem('authToken');
        history.push('/login');
    }, [history])
    return (
        <div>
            
        </div>
    )
}

export default Logout
