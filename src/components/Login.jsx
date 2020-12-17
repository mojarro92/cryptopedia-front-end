import React, { useState } from 'react';
import axios from 'axios';
// useHistory
const Login = (props) => {
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: ""
    })

    function handleChange(e) {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        });
    }

    function logIn(event) {
        event.preventDefault()
        axios.post(`${process.env.REACT_APP_DB_URL}/auth/login`, userInfo)
            .then(res => {
                if (res.status === 200) {
                    props.history.push('/dashboard')
                } else {
                    console.log('Failed to log in');
                }
            })
            .catch(err => console.log(err, 'Failed to log in'))
    }

    return (
        <div>
            <form className="form-horizontal">
                <div className="form-group pt-3">
                    <label className='control-label col-sm-2' for="email">Username:</label>
                    <div className="col-sm-10">
                        <input onChange={handleChange} type="email" className="form-control" name="username" placeholder="Enter email" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" for="pwd">Password:</label>
                    <div className="col-sm-10">
                        <input onChange={handleChange} type="password" className="form-control" name="password" placeholder="Enter password" />
                    </div>
                </div>
                <div className="form-group p-auto">
                    <div className="col-sm-offset-2 col-sm-10 pl-5">
                        <button onClick={logIn} type="submit" className="btn btn-primary">Login</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;