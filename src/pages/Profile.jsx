import { useContext } from "react";
import auth from "../firebase/firebase.config";
import { AuthContext } from "../providers/AuthProvider";
import { Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Profile = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <div className="flex items-center justify-center min-h-[calc(100vh-200px)]"><div className="w-10 h-10 flex gap-1 items-center justify-center"><div className="w-2 h-2 animate-[bounce_.6s_linear_.2s_infinite] bg-[#4CCD99] rounded-full"></div><div className="w-2 h-2 animate-[bounce_.6s_linear_.3s_infinite] bg-[#4CCD99] rounded-full"></div><div className="w-2 h-2 animate-[bounce_.6s_linear_.4s_infinite] bg-[#4CCD99] rounded-full"></div></div></div>;
    }
    const user = auth.currentUser;
    if(user === null){
        return <Navigate to = "/"></Navigate>
    }
    console.log(user);
    const displayName = user.displayName;
    console.log(displayName);
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
    return (
        <div className="flex flex-col justify-center items-center">
            <Helmet>
                <title>Vacay Vibes || Profile</title>
            </Helmet>
            <div data-aos="zoom-in" data-aos-duration='2000' className="flex flex-col justify-center w-full lg:w-1/2 my-5 lg:my-10 p-6 shadow-md rounded-xl sm:px-12 border">
                <img src={photoURL} alt="" className="w-32 h-32 mx-auto rounded-full  aspect-square" />
                <div className="space-y-4 text-center">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl">Name: {displayName? displayName : "Unknown"}</h2>
                        <p className="px-5 text-xs font-semibold sm:text-base">Email: {email ? email : "Not Found"}</p>
                        <p className="px-5 text-xs font-semibold sm:text-base">Verified Email: {emailVerified ? 'Yes' : "no"}</p>
                    </div>
                    <Link to="/updateProfile"><button  className=" btn btn-success mt-5 btn-outline">Update Profile</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;