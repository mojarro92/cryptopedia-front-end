import React from 'react'
import { Redirect } from 'react-router-dom'

function AuthRoute(props) {

    const { token, comp: Comp, ...routeProps } = props

    return (
        <>
            {token ? <Redirect to='/' /> : <Comp{...routeProps} />}
        </>
    )


}

export default AuthRoute
