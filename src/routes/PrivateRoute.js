import {Redirect, Route} from 'react-router-dom'
import Navbar from '../components/Navbar'

const privateRoute = ({component: Component, rest}) => {
    return (
        <Route {...rest} 
            render = {
                (props)=> localStorage.getItem('authToken')?(
                    <>
                        <Navbar />
                        <Component {...props} />
                    </>
                    
                ):(
                    <Redirect to="/login" />
                )
            }
        
        />
    )
}

export default privateRoute