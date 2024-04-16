import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const { logIn, error, setError, googleLogIn, githubLogin } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogIn = (e) => {
        e.preventDefault();
        setError(null)
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length < 6) {
            setError('Password length must be at least 6 character');
            return;
        }
        if (!/^(?=.*[A-Z])/.test(password)) {
            setError('Password must have an one Uppercase letter')
            return;
        }
        if (!/^(?=.*[a-z])/.test(password)) {
            setError('Password must have an one Lowercase letter')
            return;
        }
        logIn(email, password)
            .then(() => {
                toast('Successfully logged in 😍')
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                toast.warning(`${error.message}
                Please register first`)
                navigate('/register');
            })
    }
    const handleGoogleLonIn = () => {
        setError(null);
        googleLogIn()
            .then(() => {
                toast('Successfully logged in by Google 😍');
                navigate(location?.state ? location.state : '/');
            })
            .catch(() => {
                toast.warning('Something went wrong try letter')
            })
    }
    const handleGithubLogIn = () => {
        setError(null);
        githubLogin()
            .then(() => {
                toast('Successfully logged in by Github 😍');
                navigate(location?.state ? location.state : '/');
            })
            .catch(() => {
                toast.warning('Something went wrong try letter')
            })
    }

    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl border-2 border-dotted bg-white   font-sans mx-auto my-5 lg:my-14">
            <Helmet>
                <title>Log in Page</title>
            </Helmet>
            <h1 className="text-3xl font-bold text-center text-[#4CCD99]">Login</h1>
            {/* Input fields and the form started */}
            <form onSubmit={handleLogIn} className="space-y-6">
                <div className="space-y-2 text-sm">
                    <label htmlFor="username" className="block ">
                        Your Email <span className="text-red-400 text-xs">&#9733;</span>
                    </label>
                    <input type="email" required name="email" placeholder="Your email" className="w-full px-4 py-3 rounded-md border border-[#4CCD99] focus:outline-none focus:border-2  " />
                </div>
                <div className="space-y-2 text-sm relative">
                    <label htmlFor="password" className="block">
                        Password <span className="text-red-400 text-xs">&#9733;</span>
                    </label>
                    <input type={showPassword ? "text" : "password"} required name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-[#4CCD99] focus:outline-none  focus:border-2 " />
                    <div onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-[36px]">
                        {
                            showPassword ? < FaEyeSlash size={18} /> : <FaEye size={18} />
                        }
                    </div>
                    <div>
                        {
                            error && <h5 className="text-red-400">{error}</h5>
                        }
                    </div>
                    <div className="flex justify-end text-xs ">
                        <a href="#" className="hover:underline">
                            Forgot Password?
                        </a>
                    </div>
                </div>
                {/* Sign in Button */}
                <button className="text-lg rounded-xl relative p-[10px] block w-full bg-[#4CCD99] text-white border-y-4 duration-500 overflow-hidden focus:border-[#4CCD99] z-50 group">
                    Log In
                    <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                        Let&apos;s go
                    </span>
                    <span className="bg-[#007F73] absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                    <span className="bg-[#007F73] absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                    <span className="bg-[#007F73] absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                    <span className="bg-[#007F73] absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                </button>
            </form>
            <div className="flex items-center pt-4 space-x-2">
                <div className="flex-1 h-px bg-gray-300"></div>
                <p className="text-sm text-gray-600">Login with social accounts</p>
                <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            {/* Social icons */}
            <div className="flex justify-center space-x-4">
                <button onClick={handleGoogleLonIn} aria-label="Log in with Google" className="p-3 rounded-full hover:bg-gray-200">
                    <FaGoogle size={30} />
                </button>
                <button onClick={handleGithubLogIn} aria-label="Log in with Github" className="p-3 rounded-full hover:bg-gray-200">
                    <FaGithub size={30} />
                </button>
            </div>
            <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
                Don&apos;t have an account?
                <Link to='/register' className="underline hover:text-[#007F73] font-bold">
                    Register
                </Link>
            </p>
        </div>
    );
};

export default Login;