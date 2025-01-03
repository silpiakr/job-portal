import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import jobIcon from '../../assets/icons/mini-logo.png'

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
        .then(() => {
            console.log('sign out seccessfully!')
        })
        .catch(error => {
            console.log('failed to sign out')
        })
    }


    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allJobs'>All jobs</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <img src={jobIcon} className='w-12' alt="" />
                    <a className="btn btn-ghost text-3xl">Job Portal</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end ">
                    {
                        user ? <>
                            <button onClick={handleSignOut} className='btn'>Sign Out</button>
                        </>
                            :
                            <>
                                <Link to='register'><button className='btn font-semibold'>Register</button></Link>
                                <Link to='signin'><button className='btn font-semibold ml-2'>Sign In</button></Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;