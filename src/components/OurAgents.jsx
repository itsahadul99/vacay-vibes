import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const OurAgents = () => {
    return (
        <div>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-normal text-center my-5 lg:my-14">Meet Our Agents</h1>
            <div className="flex gap-5 justify-center items-center">
                <div className="text-white relative p-5 flex flex-col justify-center">
                    <img src={'https://beyot.g5plus.net/main/wp-content/uploads/2017/02/fatmaghaly-1-270x340.png'} />
                    <div className="bg-[#222222] absolute -bottom-2 w-full space-y-2">
                        <h3 className="text-center text-lg font-semibold mt-2">Fatema Khatun</h3>
                        <p className="text-center text-gray-300">5 properties</p>
                        <div className="bg-orange-500 flex justify-center mb-3 gap-3 w-1/2 mx-auto">
                            <FaFacebook size={20}/>
                            <FaInstagram  size={20}/>
                            <FaTwitter  size={20}/>
                        </div>
                    </div>
                </div>
                <div className="text-white relative p-5 flex flex-col justify-center">
                    <img src={'https://beyot.g5plus.net/main/wp-content/uploads/2017/01/abodyswede-270x340.png'} />
                    <div className="bg-[#222222] absolute -bottom-2 w-full space-y-2">
                        <h3 className="text-center text-lg font-semibold mt-2">Azam Khan</h3>
                        <p className="text-center text-gray-300">5 properties</p>
                        <div className="bg-orange-500 flex justify-center mb-3 gap-3 w-1/2 mx-auto">
                            <FaFacebook size={20}/>
                            <FaInstagram  size={20}/>
                            <FaTwitter  size={20}/>
                        </div>
                    </div>
                </div>
                <div className="text-white relative p-5 flex flex-col justify-center">
                    <img src={'https://beyot.g5plus.net/main/wp-content/uploads/2017/01/ayamagdy-270x340.png'} />
                    <div className="bg-[#222222] absolute -bottom-2 w-full space-y-2">
                        <h3 className="text-center text-lg font-semibold mt-2">Tasfiya Khatun</h3>
                        <p className="text-center text-gray-300">5 properties</p>
                        <div className="bg-orange-500 flex justify-center mb-3 gap-3 w-1/2 mx-auto">
                            <FaFacebook size={20}/>
                            <FaInstagram  size={20}/>
                            <FaTwitter  size={20}/>
                        </div>
                    </div>
                </div>
                <div className="text-white relative p-5 flex flex-col justify-center">
                    <img src={'https://beyot.g5plus.net/main/wp-content/uploads/2017/01/modymagdy-270x340.png'} />
                    <div className="bg-[#222222] absolute -bottom-2 w-full space-y-2">
                        <h3 className="text-center text-lg font-semibold mt-2">Mickel Jackson</h3>
                        <p className="text-center text-gray-300">9 properties</p>
                        <div className="bg-orange-500 flex justify-center mb-3 gap-3 w-1/2 mx-auto *:cursor-pointer">
                            <FaFacebook size={20}/>
                            <FaInstagram  size={20}/>
                            <FaTwitter  size={20}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurAgents;