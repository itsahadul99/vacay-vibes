import { Helmet } from "react-helmet-async";
import { FaLocationPin } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";
const EstateDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const matchData = data.find(item => item.id == id);
    return (
        <div className="my-5 lg:my-10 flex flex-col lg:flex-row justify-evenly items-center gap-5 lg:gap-10">
            <Helmet>
                <title>Estate Details Page</title>
            </Helmet>
            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <img className="w-full h-[300px]" src={matchData.image} alt="" />
            </div>
            <div className="space-y-3 px-5">
                <h1 data-aos="fade-left" data-aos-duration="1500" className="text-xl lg:text-2xl font-semibold">{matchData.estate_title}</h1>
                <p data-aos="fade-left" data-aos-duration="2000"  className="w-full lg:w-2/3 font-medium">{matchData.description}</p>
                <div data-aos="fade-left" data-aos-duration="2500"  className="flex justify-between items-center font-semibold w-1/2">
                    <p>Area : {matchData.area}</p>
                    <p>Price: {matchData.price}</p>
                </div>
                <div data-aos="fade-left" data-aos-duration="2800"  className="flex justify-between items-center font-medium w-1/2">
                    <p className="flex gap-3 items-center"><FaLocationPin /> {matchData.location}</p>
                    <p><span className="font-bold">Category:</span> {matchData.segment_name}</p>
                </div>
                <div>
                    <h5 data-aos="fade-right" data-aos-duration="2000" className="text-lg font-semibold">Facilities: </h5>
                    <div data-aos="fade-up" data-aos-duration="3000"  className="px-5">
                        {
                            matchData.facilities.map((item, idx) => <li key={idx}>{item}</li>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;