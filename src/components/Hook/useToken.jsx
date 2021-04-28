import { useState } from 'react'

export default function useToken() {

    function getToken() {
        const tokenString = sessionStorage.getItem('token')
        return JSON.parse(tokenString)
    }

    const [token, setToken] = useState(getToken())

    function saveToken(token) {
        sessionStorage.setItem('token', JSON.stringify(token))
        setToken(token)
    }

    return {
        setToken: saveToken,
        token
    }
}