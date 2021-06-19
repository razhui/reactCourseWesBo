import React from 'react'
import PropTypes from 'prop-types';

const Login = (props) => {
    return (
        <nav className="login">
            <h2>Login</h2>
            <p>Sign in to manage</p>
            <button 
                className="facebook" 
                onClick={() => props.authenticate('Facebook')}>
                Login with Facebook
            </button>
        </nav>
    )
}

Login.propTypes = {
    authenticate: PropTypes.func.isRequired
}

export default Login;