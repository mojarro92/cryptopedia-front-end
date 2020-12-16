import React, { useState } from 'react';
import axios from 'axios';

const Createacc = () => {
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

    function submit(event) {
        event.preventDefault()
        axios.post("http://localhost:5000/auth/signup", userInfo)
            .then(res => console.log(res, 'New user was created'))
            .catch(err => console.log(err, 'User failed to create'))
    }

    return (
        <div>
            <form className="form-horizontal">
                <div className="form-group">
                    <label className="control-label col-sm-2" for="email">Email:</label>
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
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10 pl-5">
                        <button className="btn btn-primary" onClick={submit} type="submit" >Create</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Createacc;