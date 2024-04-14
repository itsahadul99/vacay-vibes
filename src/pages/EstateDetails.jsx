import { Helmet } from "react-helmet-async";
import { FaLocationPin } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
    const data = useLoaderData();
    // console.log(data);
    const { id } = useParams();
    // console.log(id);
    const matchData = data.find(item => item.id == id);
    console.log(matchData);
    return (
        <div className="my-5 lg:my-10 flex flex-col lg:flex-row justify-evenly items-center gap-5 lg:gap-10">
            <Helmet>
                <title>Estate Details Page</title>
            </Helmet>
            <div>
                <img className="w-full h-[300px]" src={matchData.image} alt="" />
            </div>
            <div className="space-y-3 px-5">
                <h1 className="text-xl lg:text-2xl font-semibold">{matchData.estate_title}</h1>
                <p className="w-full lg:w-2/3 font-medium">{matchData.description}</p>
                <div className="flex justify-between items-center font-semibold w-1/2">
                    <p>Area : {matchData.area}</p>
                    <p>Price: {matchData.price}</p>
                </div>
                <div className="flex justify-between items-center font-medium w-1/2">
                    <p className="flex gap-3 items-center"><FaLocationPin /> {matchData.location}</p>
                    <p><span className="font-bold">Category:</span> {matchData.segment_name}</p>
                </div>
                <div>
                    <h5 className="text-lg font-semibold">Facilities: </h5>
                    <div className="px-5">
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