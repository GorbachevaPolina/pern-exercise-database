import React from "react"; 
import { Link } from "react-router-dom";
import logo from '../fitness_center_white_24dp.svg'

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
                        <a href='/'><img src={logo}></img></a>
                    </li>
                    <span className='btns-container'>
                    <li className='link'>
                        {isAuth ? 
                            <Link to='/dashboard' className='profile-btn-header'>Profile</Link> :
                            null
                        }

                    </li>
                    <li className='link'>
                        {isAuth ? 
                            <button className='log-btn' onClick={e => logout(e)}>Log Out</button> :
                            <Link to='/login' className='log-btn'>Log In</Link>
                        }
                    </li>
                    </span>
                </ul>
                </div>
            </header>
    )
}

export default Header;