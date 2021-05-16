import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { ContextAuth } from '../../auth/ContextAuth';

export const Navbar = () => {
  
    const {user,dispatch} =useContext(ContextAuth);
    
    const history = useHistory();
    
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <span className="nav-item nav-link">
                    {user.name}
                </span>

                <ul className="navbar-nav ml-auto">
                  
                    <button
                        activeClassName="active"
                        className="nav-item nav-link"
                        onClick={()=>{
                           history.replace('/login');
                            dispatch({
                                type:'logout',
                            });

                        }}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}