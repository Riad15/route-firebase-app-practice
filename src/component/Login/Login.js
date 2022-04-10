import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';


const auth = getAuth(app);

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    return (
        <div>
            <h2>LogIn Please!!</h2>
            <form action="">
                <input type="email" placeholder='Email' />
                <br />
                <input type="password" placeholder='password' />
                <br />


            </form>
            <button>Login</button>
            <button onClick={() => signInWithGoogle()}>sign-in google</button>

        </div>
    );
};

export default Login;