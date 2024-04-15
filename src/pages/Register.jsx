/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Register = () => {
    const {createUser, user, error, setError} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false)
    const handleForm = (e) =>{
        e.preventDefault();
        setError(null)
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;
        if(password.length< 6){
            setError('Password length must be at least 6 character');
            return;
        }
        if(!/^(?=.*[A-Z])/.test(password)){
            setError('Password must have an one Uppercase letter')
            return;
        }
        if(!/^(?=.*[a-z])/.test(password)){
            setError('Password must have an one Lowercase letter')
            return;
        }
        createUser(email, password)
        .then(() => {
            toast('Successfully Register')
        })
        .catch(error => {
            setError(error.message)
        })
    }
    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl border-2 border-dotted bg-white   font-sans mx-auto my-5 lg:my-14">
            <Helmet>
                <title>Vacay Vibes || Register Page</title>
            </Helmet>
            <h1 className="text-3xl font-bold text-center text-[#4CCD99]">Register</h1>
            {/* Input fields and the form started */}
            <form onSubmit={handleForm} className="space-y-6">
                <div className="space-y-2 text-sm">
                    <label htmlFor="username" className="block ">
                        Your name
                    </label>
                    <input type="text" name="name" placeholder="Username" className="w-full px-4 py-3 rounded-md border border-[#4CCD99] focus:outline-none focus:border-2  " />
                </div>
                <div className="space-y-2 text-sm">
                    <label htmlFor="username" className="block ">
                        Email
                    </label>
                    <input type="email" required name="email" placeholder="Your email" className="w-full px-4 py-3 rounded-md border border-[#4CCD99] focus:outline-none focus:border-2  " />
                </div>
                <div className="space-y-2 text-sm">
                    <label htmlFor="username" className="block ">
                        PhotoURL
                    </label>
                    <input type="text" name="photoURL" placeholder="Your photo url" className="w-full px-4 py-3 rounded-md border border-[#4CCD99] focus:outline-none focus:border-2  " />
                </div>
                <div className="space-y-2 text-sm relative">
                    <label htmlFor="password" className="block ">
                        Password
                    </label>
                    <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-[#4CCD99] focus:outline-none  focus:border-2 " />
                    <span onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-[35px]">
                        {
                            showPassword ? < FaEyeSlash size={18} /> : <FaEye size={18}/>
                        }
                    </span>
                </div>
                <div>
                    {
                        error && <h5 className="text-red-400">{error}</h5>
                    }
                </div>
                {/* Sign in Button */}
                <button className="text-lg rounded-xl relative p-[10px] block w-full bg-[#4CCD99] text-white border-y-4 duration-500 overflow-hidden focus:border-[#4CCD99] z-50 group">
                   Register
                    <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                        Let&apos;s go
                    </span>
                    <span className="bg-[#007F73] absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                    <span className="bg-[#007F73] absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                    <span className="bg-[#007F73] absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                    <span className="bg-[#007F73] absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                </button>
            </form>
            <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
                Already have an account?
                <Link to='/login' className="underline hover:text-[#007F73] font-bold">
                    Log in
                </Link>
            </p>
        </div>
    );
};

export default Register;