import React, {Fragment, useEffect, useState} from "react";

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
        <Fragment>
            <h1>Dashboard {username}</h1>
            <button className='btn btn-primary' onClick={e => logout(e)}>Logout</button>
        </Fragment>
    )
}

export default Dashboard;