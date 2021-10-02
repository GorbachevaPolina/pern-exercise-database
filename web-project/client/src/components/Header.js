import React from "react"; 
import { Link } from "react-router-dom";

const Header = ({isAuth, setAuth}) => {
    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        setAuth(false);
    }

    return (
            <header>
             <div className='header-container'>
                <ul className='links'>
                    <li className='link'>
                        <a href='/'>BRAND NAME</a>
                    </li>
                    <li className='link'>
                        {isAuth ? 
                            <button className='log-btn'>Log Out</button> :
                            <Link to='/login' className='log-btn'>Log In</Link>
                        }
                    </li>
                </ul>
                </div>
            </header>
    )
}

export default Header;