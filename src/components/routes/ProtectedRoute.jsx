import { Route, Redirect } from 'react-router-dom'

function ProtectedRoute(props) {

    const compToRender = props.token
        ? <props.component {...props} />
        : <Redirect to={'/login'} />

    return (
        <Route {...props}>
            {compToRender}
        </Route>
    )
}

export default ProtectedRoute