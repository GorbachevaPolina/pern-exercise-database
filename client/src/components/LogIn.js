import React, {Fragment, useState} from "react";
import {Link} from 'react-router-dom';
import '../styles.css'

const Login = ({setAuth}) => {

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })

    const {email, password} = inputs;

    const onChange = (e) => {
        setInputs({...inputs, [e.target.name] : e.target.value})
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = {email, password}
            const response = await fetch(
                '/auth/login', 
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
            <h1 className='text-center my-5 color-text'>Вход</h1>
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
                <button 
                    className='btn color-btn btn-block'
                >Войти</button>
            </form>
            <Link to='/reg' className='text-muted w-100'>Регистрация</Link>
            <br />
            <Link to='/' className='text-muted w-100'>На главную</Link>
            </div>
        </Fragment>
    )
}

export default Login;