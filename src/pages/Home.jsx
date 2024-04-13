import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Estate from "../components/Estate";
import OurAgents from "../components/OurAgents";

const Home = () => {
    const data = useLoaderData();
    return (
        <div className="mb-5 lg:mb-10">
            <Banner />
            <div className="my-5 lg:my-10">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-normal text-center my-5 lg:my-14">Choice Your Property</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 justify-evenly items-center w-full my-5 lg:my-10">
                    {
                        data.map((item, idx) => (<Estate key={idx} data={item} />))
                    }
                </div>
            </div>
            <OurAgents />
        </div>
    );
};

export default Home;