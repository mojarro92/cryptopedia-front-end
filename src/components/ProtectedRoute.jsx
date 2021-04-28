import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function ProtectedRoute({ token, Component, ...rest }) {
    return (
        <Route {...rest} render={props => (
            token ? <Component {...props} />
                : <Redirect to={"/login"} />
        )} />
    )
}

export default ProtectedRoute