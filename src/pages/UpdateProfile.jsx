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
                <button type="submit" className="w-full bg-[#4CCD99] text-white px-4 py-2 rounded-lg hover:bg-[#007F73]">Save Change</button>
            </form>
        </div>
    );
};

export default UpdateProfile;