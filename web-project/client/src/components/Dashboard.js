import React, {Fragment, useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import DashboardFavourite from "./DashboardFavourite";

const Dashboard = ({setAuth}) => {

    const [username, setUsername] = useState('');

    async function getName() {
        try {
            const response = await fetch(
                'http://localhost:5000/dashboard', {
                    method: 'GET',
                    headers: {token: localStorage.token}
                }
            )

            const parseRes = await response.json();

            setUsername(parseRes.username)
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
                    WELCOME, <br /> {username}
                </p>
                <Link to='/' className='profile-btn'>Main Page</Link>
                <Link to='/catalog' className='profile-btn'>Catalog</Link>
                <button className='logout-btn' onClick={e => logout(e)}>Log Out</button>
                </div>
            </div>
            <div className='fav-container'>
                <h1 className='fav-title'>Избранное</h1>
                <DashboardFavourite />
            </div>
        </div>
    )
}

export default Dashboard;