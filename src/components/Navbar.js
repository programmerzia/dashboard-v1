import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import * as FaIcon from 'react-icons/fa';
import * as AiIcon from 'react-icons/ai';
import { NavbarData } from './NavbarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
const Navbar = ({history}) => {
    const [sidebar, setSidebar] = useState(false);
    const sideBar = ()=> setSidebar(!sidebar);
    useEffect(()=>{
        console.log('called through privateRoute');
        if(!localStorage.getItem('authToken')){
            history.push("/login");
        }
    },[history]);
    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FaIcon.FaBars onClick={sideBar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={sideBar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcon.AiOutlineClose />
                            </Link>
                        </li>
                        {NavbarData.map((item, index)=>{
                            return <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;