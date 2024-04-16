import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { toast } from "react-toastify";

const UpdateProfile = () => {
    const handleUpdateProfileInfo =(e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL,
        }).then(() =>{
            toast('Successfully update');
        })
        .catch()
    }
    return (
        <div className="max-w-md mx-auto my-6 lg:my-12 p-3 lg:p-6 border bg-white rounded-lg shadow-md">
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
                <button className="text-lg rounded-xl relative p-[10px] block w-full bg-[#4CCD99] text-white border-y-4 duration-500 overflow-hidden focus:border-[#4CCD99] z-50 group">
                   Update
                    <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                        Let&apos;s update
                    </span>
                    <span className="bg-[#007F73] absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                    <span className="bg-[#007F73] absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                    <span className="bg-[#007F73] absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                    <span className="bg-[#007F73] absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                </button>
            </form>
        </div>
    );
};

export default UpdateProfile;