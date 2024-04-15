import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { toast } from "react-toastify";

const UpdateProfile = () => {
    const {error, setError, loading} = useContext(AuthContext)
    if (loading) {
        return <div className="flex items-center justify-center min-h-[calc(100vh-200px)]"><span className="loading loading-bars loading-lg"></span></div>;
    }
    const handleUpdateProfileInfo =(e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        const photoURL = e.target.photoURL.value;
        setError(null)
        // if(password.length< 6){
        //     setError('Password length must be at least 6 character');
        //     return;
        // }
        // if(!/^(?=.*[A-Z])/.test(password)){
        //     setError('Password must have an one Uppercase letter')
        //     return;
        // }
        // if(!/^(?=.*[a-z])/.test(password)){
        //     setError('Password must have an one Lowercase letter')
        //     return;
        // }
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL,
        }).then(() =>{
            toast('Successfully update');
        })
        .catch()
    }
    return (
        <div className="max-w-md min-h-[calc(100vh-200px)] mx-auto my-6 lg:my-12 p-3 lg:p-6 border bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Update Profile Information</h1>
            <form onSubmit={handleUpdateProfileInfo}>
                <div className="mb-4">
                    <label htmlFor="name" className="block font-semibold mb-2">Name:</label>
                    <input type="text" name="name"className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#4CCD99]" required />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="photoURL" className="block font-semibold mb-2">Photo URL:</label>
                    <input type="url" name="photoURL"className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#4CCD99]" />
                </div>
                
                {/* <div className="mb-4">
                    <label htmlFor="email" className="block font-semibold mb-2">Email:</label>
                    <input type="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#4CCD99]" required />
                </div>
                
                <div className="mb-2">
                    <label htmlFor="password" className="block font-semibold mb-2">Password:</label>
                    <input type="password"name="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#4CCD99]" required />
                </div> */}
                <div>
                    {
                        error && <h5 className="text-red-400 mb-2">{error}</h5>
                    }
                </div>
                <button type="submit" className="w-full bg-[#4CCD99] text-white px-4 py-2 rounded-lg hover:bg-[#007F73]">Update</button>
            </form>
        </div>
    );
};

export default UpdateProfile;