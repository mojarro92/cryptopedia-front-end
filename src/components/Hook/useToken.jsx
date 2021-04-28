import { useState } from 'react'

export default function useToken() {

    function getToken() {
        const tokenString = sessionStorage.getItem('token')
        const userToken = JSON.parse(tokenString)
        // console.log(userToken)
        return userToken?.data
    }

    const [token, setToken] = useState(getToken())

    function saveToken(token) {
        sessionStorage.setItem('token', JSON.stringify(token))
        setToken(token.token)
    }

    return {
        setToken: saveToken,
        token
    }
}

