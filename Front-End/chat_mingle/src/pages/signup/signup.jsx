import './signup.css';
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';
import signupAnimation from '../../assets/signup.json';
import { useState } from "react";
import axios from "axios";

function SignUp() {
    const [user, setUser] = useState({
        userName: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
        mobileNumber: ''
    });

    const handleSignUp = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/user/register', user)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="flex min-h-screen">
            <div className="hidden lg:flex lg:w-2/5 justify-center items-center p-8">
                <div className="w-full max-w-md">
                    <Lottie animationData={signupAnimation} />
                </div>
            </div>

            <div className="signupForm flex w-full lg:w-3/5 justify-center items-center p-8 pl-2">
                <div className="lg:w-full max-w-md space-y-12">
                    <div className="signupFormTopic">
                        <h1 className="lg:mt-8 text-center font-extrabold text-gray-900 text-2xl lg:text-10xl leading-tight mb-4">
                            Welcome to ChatMingle
                        </h1>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="username" className="sr-only">Username</label>
                                <input
                                    id="userName"
                                    name="userName"
                                    type="text"
                                    autoComplete="userName"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter username"
                                    onChange={handleSignUp}
                                />
                            </div>
                            <div>
                                <label htmlFor="first-name" className="sr-only">First Name</label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    autoComplete="firstName"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter first name"
                                    onChange={handleSignUp}
                                />
                            </div>
                            <div>
                                <label htmlFor="last-name" className="sr-only">Last Name</label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    autoComplete="lastName"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter last name"
                                    onChange={handleSignUp}
                                />
                            </div>
                            <div>
                                <label htmlFor="mobile-number" className="sr-only">Mobile Number</label>
                                <input
                                    id="mobileNumber"
                                    name="mobileNumber"
                                    type="tel"
                                    autoComplete="mobileNumber"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter mobile number"
                                    onChange={handleSignUp}
                                />
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter email"
                                    onChange={handleSignUp}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter password"
                                    onChange={handleSignUp}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign Up
                            </button>
                        </div>

                        <div className="signUpLink text-sm flex justify-center">
                            <p className="font-light text-blue-600 mr-1">
                                Already have an account?
                            </p>
                            <Link to='/' className="font-medium text-indigo-600 hover:text-indigo-500">
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
