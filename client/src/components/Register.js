import React, {Fragment, useState} from "react";
import {Link} from 'react-router-dom';
import '../styles.css'

const Register = ({setAuth}) => {

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        username: ''
    })

    const {email, password, username} = inputs;

    const onChange = (e) => {
        setInputs({...inputs, [e.target.name] : e.target.value})
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = {email, password, username}
            const response = await fetch(
                '/auth/register',
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                }
            ) 

            const parseRes = await response.json();

            if(parseRes.token) {
                localStorage.setItem('token', parseRes.token);

                setAuth(true);
            } else {
                setAuth(false)
            }
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <Fragment>
            <div className='container'>
            <h1 className='text-center my-5 color-text'>Регистрация</h1>
            <form onSubmit={onSubmitForm}>
                <input 
                    type='email' 
                    maxlength='100'
                    name='email' 
                    placeholder='email' 
                    className='form-control my-3'
                    value={email}
                    onChange={e => onChange(e)}
                />
                <input 
                    type='password' 
                    name='password' 
                    placeholder='password' 
                    className='form-control my-3'
                    value={password}
                    onChange={e => onChange(e)}
                />
                <input 
                    type='text' 
                    maxlength='50'
                    name='username' 
                    placeholder='name' 
                    className='form-control my-3'
                    value={username}
                    onChange={e => onChange(e)}
                />
                <button className='btn color-btn btn-block'>Зарегистрироваться</button>
            </form>
            <Link to='/log' className='text-muted w-100'>Войти</Link>
            <br />
            <Link to='/' className='text-muted w-100'>На главную</Link>
            </div>
        </Fragment>
    )
}

export default Register;