import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import registerLottieData from '../../assets/lottie/register.json'
import AuthContext from '../../context/AuthContext/AuthContext';

const Register = () => {

    const {createUser} = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

        if(!passwordRegex.test(password)){
            setErrorMessage('Make sure Password at least one uppercase, lowercase & at least one number');
        }
        setErrorMessage('');

        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => setErrorMessage(error.errorMessage)
        )


    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className=" md:ml-8 mx-auto w-96">
                        <Lottie animationData={registerLottieData}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                    <h1 className="ml-8 mt-4 text-3xl font-bold">Register now!</h1>
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                            </div>
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
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;