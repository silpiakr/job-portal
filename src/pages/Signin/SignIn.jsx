import React, { useContext, useState } from 'react';
import SignInLottie from '../../assets/lottie/login.json'
import Lottie from 'lottie-react';
import AuthContext from '../../context/AuthContext/AuthContext';

const SignIn = () => {
    const {signInUser} = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
        .then(result => {
            console.log('sign in', result.user)
        })
        .catch(error => {
            setErrorMessage(error.errorMessage)
        })

    }

    return (
        <div>
             <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className=" md:ml-8 mx-auto w-96">
                        <Lottie animationData={SignInLottie}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                    <h1 className="ml-8 mt-4 text-3xl font-bold">Sign In now!</h1>
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sing In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;