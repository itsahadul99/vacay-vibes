import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl border-2 border-dotted bg-white   font-sans mx-auto my-5 lg:my-14">
            <h1 className="text-3xl font-bold text-center text-[#4CCD99]">Login</h1>
            {/* Input fields and the form started */}
            <form action="" className="space-y-6">
                <div className="space-y-2 text-sm">
                    <label htmlFor="username" className="block ">
                        Your name
                    </label>
                    <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border border-[#4CCD99] focus:outline-none focus:border-2  " />
                </div>
                <div className="space-y-2 text-sm">
                    <label htmlFor="password" className="block ">
                        Password
                    </label>
                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-[#4CCD99] focus:outline-none  focus:border-2 " />
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
                <button aria-label="Log in with Google" className="p-3 rounded-full hover:bg-gray-200">
                    <FaGoogle size={30} />
                </button>
                <button aria-label="Log in with Twitter" className="p-3 rounded-full hover:bg-gray-200">
                    <FaGithub size={30} />
                </button>
                <button aria-label="Log in with GitHub" className="p-3 rounded-full hover:bg-gray-200">
                    <FaFacebook  size={30}/>
                </button>
            </div>
            <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
                Don&apos;t have an account?
                <Link to='/signup' className="underline hover:text-[#007F73]">
                    Sign up
                </Link>
            </p>
        </div>
    );
};

export default Login;