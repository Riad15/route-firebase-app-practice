import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { user, signInWithGoogle } = useFirebase();
    return (
        <div>
            <h2>LogIn Please!!</h2>
            <form action="">
                <input type="email" placeholder='Email' />
                <br />
                <input type="password" placeholder='password' />
                <br />
                <button>Login</button>
                <button onClick={signInWithGoogle}>sign-in google</button>
            </form>

        </div>
    );
};

export default Login;