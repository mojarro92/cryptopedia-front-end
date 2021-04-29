import React, { useState } from 'react';
import axios from 'axios';

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
        axios.post(`http://localhost:3000/reg-log/login`, userInfo)
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
        <div>
            <form className="form-horizontal">
                <div className="form-group pt-5 mt-5">
                    <label className='control-label col-sm-2'>Email:</label>
                    <div className="col-sm-10">
                        <input onChange={handleChange} type="email" className="form-control"
                            name="email" placeholder="Enter email" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2">Password:</label>
                    <div className="col-sm-10">
                        <input onChange={handleChange} type="password" className="form-control"
                            name="password" placeholder="Enter password" />
                    </div>
                </div>
                <div className="form-group p-auto">
                    <div className="col-sm-offset-2 col-sm-10 pl-5 pb-5 mb-5">
                        <button onClick={logIn} type="submit" className="btn btn-primary">Login</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;