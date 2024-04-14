import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
const OurAgents = () => {
    return (
        <div>
            <div className="my-5 lg:my-16 flex flex-col justify-center items-center">
                <MdOutlineKeyboardArrowUp size={40} className="font-bold text-[#4CCD99]" />
                <h4 className="text-sm lg:text-lg font-medium opacity-70 p-2">WE HAVE PROFESSIONAL AGENTS</h4>
                <h1 className="text-xl uppercase md:text-3xl lg:text-5xl font-normal pb-2 ">Meet Our Agents</h1>
                <hr className="bg-[#4CCD99] w-2/6 lg:w-1/6 h-1 " />
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row md:flex-wrap lg:flex-nowrap gap-5">
                <div className="text-white relative p-5 flex flex-col justify-center">
                    <img className="w-full" src={'https://beyot.g5plus.net/main/wp-content/uploads/2017/02/fatmaghaly-1-270x340.png'} />
                    <div className=" w-full bg-[#222222] absolute -bottom-2 space-y-1">
                        <h3 className="text-center text-xs lg:text-lg font-semibold mt-2">Fatema Khatun</h3>
                        <p className="text-center text-gray-300 text-sm">4 properties</p>
                        <div className="bg-[#4CCD99] flex justify-center mb-3 gap-3 w-1/2 mx-auto py-2">
                            <FaFacebook size={20} className="hover:text-black cursor-pointer" />
                            <FaInstagram size={20} className="hover:text-black cursor-pointer" />
                            <FaTwitter size={20} className="hover:text-black cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="text-white relative p-5 flex flex-col justify-center">
                    <img src={'https://beyot.g5plus.net/main/wp-content/uploads/2017/01/abodyswede-270x340.png'} />
                    <div className="bg-[#222222] absolute -bottom-2 w-full space-y-1">
                        <h3 className="text-center text-lg font-semibold mt-2">Azam Khan</h3>
                        <p className="text-center text-gray-300 text-sm">6 properties</p>
                        <div className="bg-[#4CCD99] flex justify-center mb-3 gap-3 w-1/2 mx-auto py-2">
                            <FaFacebook size={20} className="hover:text-black cursor-pointer" />
                            <FaInstagram size={20} className="hover:text-black cursor-pointer" />
                            <FaTwitter size={20} className="hover:text-black cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="text-white relative p-5 flex flex-col justify-center">
                    <img src={'https://beyot.g5plus.net/main/wp-content/uploads/2017/01/ayamagdy-270x340.png'} />
                    <div className="bg-[#222222] absolute -bottom-2 w-full space-y-1">
                        <h3 className="text-center text-lg font-semibold mt-2">Tasfiya Khatun</h3>
                        <p className="text-center text-gray-300 text-sm">8 properties</p>
                        <div className="bg-[#4CCD99] flex justify-center mb-3 gap-3 w-1/2 mx-auto py-2">
                            <FaFacebook size={20} className="hover:text-black cursor-pointer" />
                            <FaInstagram size={20} className="hover:text-black cursor-pointer" />
                            <FaTwitter size={20} className="hover:text-black cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="text-white relative p-5 flex flex-col justify-center">
                    <img src={'https://beyot.g5plus.net/main/wp-content/uploads/2017/01/modymagdy-270x340.png'} />
                    <div className="bg-[#222222] absolute -bottom-2 w-full space-y-1">
                        <h3 className="text-center text-lg font-semibold mt-2">Mickel Jackson</h3>
                        <p className="text-center text-sm text-gray-300">9 properties</p>
                        <div className="bg-[#4CCD99] flex justify-center mb-3 gap-3 w-1/2 mx-auto py-2">
                            <FaFacebook size={20} className="hover:text-black cursor-pointer" />
                            <FaInstagram size={20} className="hover:text-black cursor-pointer" />
                            <FaTwitter size={20} className="hover:text-black cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurAgents;