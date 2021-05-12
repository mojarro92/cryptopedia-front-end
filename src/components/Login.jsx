import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Login({ setToken }) {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })

    function handleChange(e) {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        });
    }

    function logIn(e) {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_DB_URL}/reg-log/login`, userInfo)
            .then(res => {
                if (res.status === 200) {
                    setToken(res.data)
                    return window.location.href = '/dashboard'
                } else {
                    console.log('Failed to log in');
                }
            })
            .catch(err => console.log(err, 'Failed to log in'))
    }

    return (
        <>
            <Form className='container w-50 mb-4 d-flex flex-column justify-content-center'>
                <h2>Login</h2>

                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Email account:</Form.Label>
                    <Form.Control onChange={handleChange} type='email' name='email' placeholder='Username' />
                </Form.Group>
                <Form.Group controlId='formBasicPassword'>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control onChange={handleChange} type='password' name='password' placeholder='Password' />
                </Form.Group>
                <Button onClick={logIn} variant='primary' type='submit'>Log In</Button>
            </Form>
        </>
    );
};

export default Login