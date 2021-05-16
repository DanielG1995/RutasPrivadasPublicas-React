import React, { useEffect, useReducer } from 'react'
import { authReducer } from './auth/authReducer'
import { ContextAuth } from './auth/ContextAuth'
import { AppRouter } from './router/AppRouter'

export const HeroesApp = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('user')) || { logged: false };
    }
    const [user, dispatch] = useReducer(authReducer, {}, init)

    useEffect(() => {
        localStorage.setItem('user',JSON.stringify(user));
        
    }, [user])


    return (
        <ContextAuth.Provider value={{ user, dispatch }}>
            <AppRouter />
        </ ContextAuth.Provider >

    )
}
