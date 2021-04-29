import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

const Createacc = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    })

    function handleChange(e) {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        });
    }

    function submit(e) {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_DB_URL}/reg-log/create-account`, userInfo)
            .then(res => console.log(res, 'New user was created'))
            .catch(err => console.log(err, 'User failed to create'))
    }

    return (
        <>

            <Form className='container w-50 mb-4 d-flex flex-column justify-content-center'>
                <h2>Create Account</h2>
                <Form.Row className='justify-content-between m-0'>
                    <Form.Group controlId="formGridEmail">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control onChange={handleChange} type="text" name='firstName' placeholder="Enter first name" />
                    </Form.Group>

                    <Form.Group controlId="formGridPassword">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control onChange={handleChange} type="text" name='lastName' placeholder="Enter last name" />
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control onChange={handleChange} type='email' name='email' placeholder='Enter email' />
                </Form.Group>
                <Form.Group controlId='formBasicPassword'>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control onChange={handleChange} type='password' name='password' placeholder='Password' />
                    <Form.Text>Passwords must be 6+ digits.</Form.Text>
                </Form.Group>
                <Button onClick={submit} variant='primary' type='submit'>Submit</Button>
            </Form>
        </>
    );
};

export default Createacc;