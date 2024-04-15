/* eslint-disable react/prop-types */
import { FaLocationPin } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Estate = ({ data }) => {
    const { id, status, button, estate_title, price, image, area, facilities, location, segment_name } = data;
    return (
        <div className=" mx-auto w-full  space-y-3 rounded-xl bg-gray-100 px-4 pb-8 pt-4 font-sans shadow-lg dark:bg-[#18181B]">
            <div className="relative flex h-48 w-full justify-center">
                <div data-aos="fade-up" data-aos-duration="3000" className="absolute left-4 right-6 top-4 flex items-center justify-between">
                    <div className="flex items-center"><button className="rounded-xl bg-[#4CCD99] px-3 py-1 font-medium text-white duration-200 hover:hover:bg-[#007F73]">Status:</button></div>
                    <button className="rounded-xl bg-[#4CCD99] px-3 py-1 font-medium text-white duration-200 hover:hover:bg-[#007F73]">{status}</button>
                </div>
                <img data-aos ="fade-up" data-aos-duration="2000" width={350} className="h-full rounded-lg bg-black/40" src={image} alt="card navigate ui" />
            </div>
            <div className="flex justify-between items-center font-semibold">
                <p data-aos="fade-left" data-aos-duration="1800">Area : {area}</p>
                <p data-aos="fade-left" data-aos-duration="2000">Price: {price}</p>
            </div>
            <div className="mx-auto space-y-2  font-semibold">
                <div data-aos="fade-left" data-aos-duration="2200" className="flex justify-between items-center text-sm font-medium">
                    <p className="flex gap-3 items-center"><FaLocationPin /> {location}</p>
                    <p><span className="font-bold">Category:</span> {segment_name}</p>
                </div>
                <h6 data-aos="fade-left" data-aos-duration="3000" className="text-sm md:text-lg lg:text-xl">{estate_title}</h6>
            </div>
            <div>
                <div>
                    <h5 data-aos="fade-right" data-aos-duration="1800" className="text-lg font-semibold">Facilities: </h5>
                    <div data-aos="fade-right" data-aos-duration="2200" className="px-5">
                        {
                            facilities.map((item, idx) => <li key={idx}>{item}</li>)
                        }
                    </div>
                </div>
                <Link to={`/${id}`}><button data-aos="fade-up" data-aos-duration="2500"  className="rounded-lg bg-[#4CCD99] mt-2 px-4 py-2 font-sans font-semibold text-white duration-300 hover:scale-105 hover:bg-[#007F73]">{button}</button></Link>
            </div>
        </div>
    );
};

export default Estate;