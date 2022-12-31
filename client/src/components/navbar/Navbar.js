import './Navbar.css'
import React, { useState, useEffect } from 'react';
import {useNavigate, useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom';
import decode from 'jwt-decode';
import { useDispatch } from 'react-redux';

import * as actionType from "../../constants/actionTypes"

const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useNavigate();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        history('/');
        setUser(null);
        };

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
        
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
        }, [location]);

    return(
        <>
        <header>
        <h1>LOGO</h1>
        <nav>
            <ul>
            <li className="nav__links"><a href="./">Home</a></li>
            <li className="nav__links"><a href="./About">About</a></li>
            <li className="nav__links"><a href="/FindService">Find a Worker</a></li>
            <li className="nav__links"><a href="/BecomeProvider">Become a Worker</a></li>            
            {/* <li className="nav__links"><a href="/ServiceWorkers">ServiceWorkers</a></li>             */}
            <li className="nav__links"><a href="/ContactUs">Contact Us</a></li>
            </ul>
        </nav>
        <div>
            {user?.result ? (
                    <div>
                    {/* <img alt={user?.result.name} ></img>
                    <p>{user?.result.name.charAt(0)}</p> */}
                    <h4>{user?.result.name}</h4>
                    <button onClick={logout}>Logout</button>
                    </div>
                ) : (
                   <Link to="/auth"><button >Sign In</button></Link>
                    
                )}
         </div>

    </header>
        </>
    );
}

export default Navbar;