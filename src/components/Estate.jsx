/* eslint-disable react/prop-types */
import { FaLocationPin  } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Estate = ({ data }) => {
    // console.log(data);
    const { id, status, button, estate_title, price, image, area, facilities, location } = data;
    return (
        <div className="mx-auto w-full  space-y-3 rounded-xl bg-gray-100 px-4 pb-8 pt-4 font-sans shadow-lg dark:bg-[#18181B]">
            <div className="relative flex h-48 w-full justify-center">
                <div className="absolute left-4 right-6 top-4 flex items-center justify-between">
                    {/* love  */}
                    <div className="flex items-center"></div>
                    <button className="rounded-xl bg-[#4CCD99] px-3 py-1 font-medium text-white duration-200 hover:hover:bg-[#007F73]">For {status}</button>
                </div>
                <img width={350} className="h-full rounded-lg bg-black/40" src={image} alt="card navigate ui" />
            </div>
            <div className="flex justify-between items-center font-semibold">
                <p>Area : {area}</p>
                <p>Price: {price}</p>
            </div>
            <div className="mx-auto space-y-2  font-semibold">
                <p className="flex gap-3 items-center text-sm font-medium"><FaLocationPin  /> {location}</p>
                <h6 className="text-sm md:text-lg lg:text-xl">{estate_title}</h6>
            </div>
            <div>
                <div>
                    <h5 className="text-lg font-semibold">Facilities: </h5>
                    <div className="px-5">
                        {
                            facilities.map((item, idx) => <li key={idx}>{item}</li>)
                        }
                    </div>
                </div>
                <Link to={`/${id}`}><button className="rounded-lg bg-[#4CCD99] mt-2 px-4 py-2 font-sans font-semibold text-white duration-300 hover:scale-105 hover:bg-[#007F73]">{button}</button></Link>
            </div>
        </div>
    );
};

export default Estate;