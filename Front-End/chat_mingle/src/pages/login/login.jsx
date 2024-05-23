import './login.css';
import Lottie from "lottie-react";
import loginAnimation from '../../assets/login.json';

function Login() {
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
                            Please, Insert your user credentials properly for login to ChatMingle. Let's have a good time with ChatMingle.
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter email"
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

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign in
                            </button>
                        </div>

                        <div className="signUpLink text-sm flex">
                            <p className="font-light text-blue-600">
                                Still Not Registered ?
                            </p>
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Register Now
                            </a>
                        </div>

                        {/*<div className="flex items-center justify-center">
                            <span className="text-sm text-gray-600">Or continue with</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <a href="#" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                    <span className="sr-only">Sign in with Google</span>
                                    <svg className="w-5 h-5" aria-hidden="true" viewBox="0 0 48 48">
                                        <path d="M24 9.5c3.15 0 5.26 1.37 6.47 2.52L35.12 6C31.8 3.08 28.2 1 24 1 16.48 1 10.27 5.84 7.5 12.5l7.53 5.85C16.18 14.49 19.9 9.5 24 9.5z" fill="#EA4335" />
                                        <path d="M46.5 24c0-1.96-.16-3.75-.45-5.53H24v11h12.94c-.56 3.03-2.15 5.58-4.4 7.32l7.04 5.52C43.54 38.02 46.5 31.54 46.5 24z" fill="#4285F4" />
                                        <path d="M17 27.95l-2.53-1.95-7.57 5.87c3.28 6.36 9.74 10.68 17.1 10.68 4.5 0 8.52-1.5 11.37-4.08l-7.05-5.51c-1.81 1.18-3.98 1.83-6.32 1.83-4.98 0-9.2-3.34-10.7-8.06z" fill="#FBBC05" />
                                        <path d="M7.5 12.5c-1.32 2.59-2.1 5.55-2.1 8.5s.78 5.91 2.1 8.5l7.55-5.85C14.67 23.01 14 21.53 14 20s.67-3.01 1.95-4.65L7.5 12.5z" fill="#34A853" />
                                    </svg>
                                </a>
                            </div>

                            <div>
                                <a href="#" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                    <span className="sr-only">Sign in with GitHub</span>
                                    <svg className="w-5 h-5" aria-hidden="true" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 .5C5.79.5.5 5.79.5 12S5.79 23.5 12 23.5 23.5 18.21 23.5 12 18.21.5 12 .5zm6.8 19.7c-.5.1-.7-.2-.7-.5v-1.7c0-.4-.1-.7-.4-.9 2.6-.3 5.3-1.2 5.3-5.7 0-1.3-.5-2.4-1.2-3.3.1-.3.5-1.5-.1-3.1 0 0-1-.3-3.3 1.2-.9-.2-1.8-.3-2.7-.3s-1.8.1-2.7.3c-2.3-1.5-3.3-1.2-3.3-1.2-.6 1.6-.2 2.8-.1 3.1-.8.9-1.2 2-1.2 3.3 0 4.5 2.7 5.4 5.3 5.7-.3.3-.4.6-.4.9v1.7c0 .3-.2.6-.7.5A8.5 8.5 0 0112 3.5 8.5 8.5 0 0118.8 20.2z" fill="#181616" />
                                    </svg>
                                </a>
                            </div>
                        </div>*/}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
