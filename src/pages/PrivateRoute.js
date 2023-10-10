import React from 'react'
import { Navigate } from 'react-router-dom'
import { useGlobal } from '../context/context'

const PrivateRoute = ({ children }) => {
    const { user } = useGlobal()
    if (!user.id) {
        return <Navigate to='/login' />
    }
    return children
}

export default PrivateRoute