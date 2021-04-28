import React from 'react'
import { Redirect, Route } from 'react-router-dom'

function AuthRoute(props) {

    const compToRender = props.token
        ? <Redirect to='/' />
        : <props.component {...props} />

    return (
        <Route {...props}>
            {compToRender}
        </Route>
    )


}

export default AuthRoute
