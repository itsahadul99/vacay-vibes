import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Estate from "../components/Estate";
import OurAgents from "../components/OurAgents";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import OurClients from "../components/OurClients";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const data = useLoaderData();
    return (
        <div className="relative mb-5 lg:mb-10">
            <Helmet>
                <title>Vacay Vibes || Home</title>
            </Helmet>
            <Banner />
            <div className="my-5 lg:my-10">
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1800" className="my-5 lg:my-16 flex flex-col justify-center items-center">
                    <MdOutlineKeyboardArrowUp size={40} className="font-bold text-[#4CCD99]" />
                    <h4 className="text-sm lg:text-lg font-medium opacity-70 p-2">Find your dream Property</h4>
                    <h1 className="text-xl uppercase md:text-3xl lg:text-5xl font-normal pb-2">Find a Property</h1>
                    <hr className="bg-[#4CCD99] w-2/6 lg:w-1/6 h-1 " />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 justify-evenly items-center w-full my-5 lg:my-10">
                    {
                        data.map((item, idx) => (<Estate key={idx} data={item} />))
                    }
                </div>
            </div>
            <OurAgents />
            <OurClients />
        </div>
    );
};

export default Home;