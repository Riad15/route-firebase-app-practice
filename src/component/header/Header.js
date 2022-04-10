import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import './Header.css'

const auth = getAuth();

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='header'>
            <nav >
                <Link to="/">Home</Link>
                <Link to="/orders">Orders</Link>
                <Link to='/register'>Register</Link>
                {
                    user?.uid
                        ?
                        <button onClick={() => signOut(auth)}>sign out</button>
                        :
                        <Link to="/login">Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;