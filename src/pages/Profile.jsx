import { useContext } from "react";
import auth from "../firebase/firebase.config";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <div className="flex items-center justify-center min-h-[calc(100vh-200px)]"><span className="loading loading-bars loading-lg"></span></div>;
    }
    const user = auth.currentUser;
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
    return (
        user && <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center w-full lg:w-1/2 my-5 lg:my-10 p-6 shadow-md rounded-xl sm:px-12 border">
                <img data-aos="zoom-in" data-aos-duration='2000' src={photoURL} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                <div data-aos="zoom-in" data-aos-duration='3000' className="space-y-4 text-center">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl">Name: {displayName}</h2>
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