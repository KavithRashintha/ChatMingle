import './login.css';
import Lottie from "lottie-react";
import { Link, useNavigate } from 'react-router-dom';
import loginAnimation from '../../assets/login.json';
import { useState } from "react";
import axios from "axios";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/user/login', { email, password });
            console.log(response);

            localStorage.setItem('token', response.data.token);
            navigate('/chat');
        } catch (error) {
            setErrorMessage('Login failed. Please check your credentials.');
            console.error('Login Failed', error);
        }
    };

    return (
        <div className="flex min-h-screen">
            <div className="hidden lg:flex lg:w-2/5 justify-center items-center p-8">
                <div className="w-full max-w-md">
                    <Lottie animationData={loginAnimation} />
                </div>
            </div>

            <div className="loginForm flex w-full lg:w-3/5 justify-center items-center p-8 pl-2">
                <div className="lg:w-full max-w-md space-y-14">
                    <div className="loginFormTopic">
                        <h1 className="lg:mt-8 text-center font-extrabold text-gray-900 text-2xl lg:text-10xl leading-tight mb-4">
                            Welcome to ChatMingle
                        </h1>
                        <p className="mt-2 text-center text-sm text-gray-600 mb-4">
                            Please, insert your user credentials properly to login to ChatMingle. Let us have a good time with ChatMingle.
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={email}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    value={password}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>
                        </div>

                        {errorMessage && (
                            <div className="text-red-500 text-sm text-center">
                                {errorMessage}
                            </div>
                        )}

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign in
                            </button>
                        </div>

                        <div className="signUpLink text-sm flex justify-center">
                            <p className="font-light text-blue-600 mr-2">
                                Still Not Registered?
                            </p>
                            <Link to='/signup' className="font-medium text-indigo-600 hover:text-indigo-500">
                                Register Now
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
