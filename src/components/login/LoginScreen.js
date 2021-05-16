import React, { useContext } from 'react'
import { ContextAuth } from '../../auth/ContextAuth'

export const LoginScreen = ({ history }) => {
    const { dispatch } = useContext(ContextAuth);

    const lastPage=localStorage.getItem('lastNavigate',history.path)||'/';
    
    const handleLogin = () => {
        dispatch({
            type: 'login',
            payload: {
                name: 'Daniel'
            }
        })
        history.replace(lastPage);
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >Iniciar Sesiòn</button>
        </div>
    )
}
