import { Route, Redirect } from 'react-router-dom'

function ProtectedRoute(props) {

    const { path, exact, comp: Component, token, userInfo } = props

    const compToRender = token
        ? <Component userInfo={userInfo} />
        : <Redirect to={'/login'} />

    return (
        <Route path={path} exact={exact}>
            {compToRender}
        </Route>
    )
}

export default ProtectedRoute