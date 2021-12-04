import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import DashboardFavourite from "./DashboardFavourite";

const Dashboard = ({isAuth, setAuth}) => {

    const [username, setUsername] = useState('');
    const [role, setRole] = useState('')

    async function getName() { 
        try {
            const response = await fetch(
                '/dashboard', {
                    method: 'GET',
                    headers: {token: localStorage.token}
                }
            ) 

            const parseRes = await response.json();

            setUsername(parseRes.username)
            setRole(parseRes.role)
        } catch (err) {
            console.error(err);
        }
    }

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        setAuth(false);
    }

    useEffect(() => {
        getName();
    }, [])

    return (
        <div className='profile-container'>
            {/* <h1>Dashboard {username}</h1>
            <button className='btn btn-primary' onClick={e => logout(e)}>Logout</button> */}
            <div className='sidebar-container'>
                <div className='sidebar-content'>
                <p className='sidebar-text'>
                    ДОБРО ПОЖАЛОВАТЬ, <br /> {username}
                </p>
                {
                    role === 'admin' ?
                    <p>{role}</p> :
                    null
                }
                <Link to='/' className='profile-btn'>На главную</Link>
                <Link to='/catalog' className='profile-btn'>Каталог</Link>
                <button className='logout-btn' onClick={e => logout(e)}>Выйти</button>
                </div>
            </div>
            <div className='fav-container'>
                <h1 className='fav-title'>Избранное</h1>
                <DashboardFavourite isAuth={isAuth}/>
            </div>
        </div>
    )
}

export default Dashboard;