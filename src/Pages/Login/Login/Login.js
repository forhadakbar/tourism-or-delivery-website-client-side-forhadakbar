import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useAPI } from '../../../Context/apiContext';

const Login = () => {
    const { signInUsingGoogle, signUsingEmail, handleEmailChange, handlePasswordChange, email, password } = useAPI();
    const [error, setError] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })

    }

    const handleEmailSignIn = e => {
        signUsingEmail()
            .then(result => {
                history.push(redirect_uri);
            })
            .catch((error) => {
                setError(error.message);
            });

        e.preventDefault();

    }
    return (

        <div className="container-fluid bg-light p-3">
            <div className="d-flex justify-content-center">
                <div className="card login-form ">
                    <div className="card-body">
                        <h3 className="card-title text-center">Log in to WeTourTravel</h3>
                        <div className="card-text">

                            {
                                !error ? '' : <div className="alert alert-danger alert-dismissible fade show" role="alert">{error}</div>
                            }
                            <form onSubmit={handleEmailSignIn}>

                                <div className="form-group mt-3">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input onBlur={handleEmailChange} type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                </div>
                                <div className="form-group mt-3">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input onBlur={handlePasswordChange} type="password" className="form-control form-control-sm mb-2" id="exampleInputPassword1" required />
                                    <a href="/" >Forgot password?</a>
                                </div>

                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary my-3">Sign in</button>
                                </div>

                                <div className="sign-up">
                                    Don't have an account? <Link to="/register">Create One</Link>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center mt-3">
                <button onClick={handleGoogleLogin} className="btn btn-warning"><i class="fab fa-google text-success me-3"></i>
                    Sign in with Google</button>

            </div>



        </div>
    );
};

export default Login;