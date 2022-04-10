import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div>
            <h2>Please Register Now.</h2>
            <form action="">
                <input type="text" placeholder='your name' />
                <br />
                <input type="email" placeholder='Email' />
                <br />
                <input type="password" placeholder='password' />
                <br />
                <button>Register</button>
            </form>
        </div>
    );
};

export default Register;