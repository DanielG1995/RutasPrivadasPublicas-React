import React from 'react'
import { Redirect, Route } from 'react-router'

export const PrivateRoute = ({
    isAuth,
    component:Component,
    ...rest
}) => {

    localStorage.setItem("lastNavigate",rest.location.pathname)

    return (
        <Route 
        {...rest}
        component={(props)=>(isAuth)?
            (<Component {...props} />):
            (<Redirect to='./login' />)}
        />
            
    )
}
