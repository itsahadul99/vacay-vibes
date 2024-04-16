import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
const Navbar = () => {
    const { user, logOut, setError, loading } = useContext(AuthContext)
    if (loading) {
        return <div className="flex items-center justify-center mt-3"><div className="w-10 h-10 flex gap-1 items-center justify-center"><div className="w-2 h-2 animate-[bounce_.6s_linear_.2s_infinite] bg-[#4CCD99] rounded-full"></div><div className="w-2 h-2 animate-[bounce_.6s_linear_.3s_infinite] bg-[#4CCD99] rounded-full"></div><div className="w-2 h-2 animate-[bounce_.6s_linear_.4s_infinite] bg-[#4CCD99] rounded-full"></div></div></div>;
    }
    const handleLogOut = () => {
        setError(null);
        logOut()
            .then(() => {
                toast('Successfully logged out !!')
            })
            .catch(error => setError(error.message))
    }
    const links = <>
        <li>
            <NavLink to='/' className={({ isActive }) =>
                isActive
                    ? "btn btn-outline btn-success font-bold text-xs lg:text-lg"
                    : "font-bold"}>
                Home</NavLink>
        </li>
        <li>
            {
                user ? '' : <NavLink to='/login' className={({ isActive }) =>
                    isActive
                        ? "btn btn-outline btn-success font-bold text-xs lg:text-lg"
                        : "font-bold"}>
                    Login</NavLink>
            }
        </li>
        {
            user && <li>
                <NavLink to='/profile' className={({ isActive }) =>
                    isActive
                        ? "btn btn-outline btn-success font-bold text-xs lg:text-lg"
                        : "font-bold"}>
                    Profile</NavLink>
            </li>
        }
        {
            user && <li>
                <NavLink to='/updateProfile' className={({ isActive }) =>
                    isActive
                        ? "btn btn-outline btn-success font-bold text-xs lg:text-lg"
                        : "font-bold"}>
                    Update Profile</NavLink>
            </li>
        }
        <li>
            <NavLink to='/contact' className={({ isActive }) =>
                isActive
                    ? "btn btn-outline btn-success font-bold text-xs lg:text-lg"
                    : "font-bold"}>
                Contact Us</NavLink>
        </li>
    </>
    return (
        <div className="navbar my-3 lg:mt-6">
            <div className="navbar-start">
                <div className="dropdown" data-aos="fade-right" data-aos-duration="2000">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <img data-aos="fade-right" data-aos-duration="2000" className="w-14 rounded-lg mr-1 lg:mr-3" src="/logo.png" alt="" />
                <h3 data-aos="fade-right" data-aos-duration="2000" className="text-xl md:text-2xl lg:text-3xl font-bold">Vacay<span className="text-[#4CCD99]">Vibes</span></h3>
            </div>
            <div data-aos="fade-up" data-aos-duration='2000' className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold text-xs lg:text-lg  space-x-3">
                    {links}
                </ul>
            </div>
            <div data-aos="fade-left" data-aos-duration='2000' className="navbar-end">
                {
                    user ?
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-12 rounded-full">
                                    <img alt="User Image" src={`${user?.photoURL}`} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a onClick={handleLogOut}>Logout</a></li>
                            </ul>
                        </div>
                        : <Link to='/register'><button className="btn bg-[#4CCD99]">Register</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;