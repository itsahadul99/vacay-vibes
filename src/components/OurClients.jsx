import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
// import required modules
import { FreeMode, Navigation, Autoplay } from 'swiper/modules';
const OurClients = () => {
    return (
        <div>
            <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1500"
                className="my-5 lg:my-16 flex flex-col justify-center items-center">
                <MdOutlineKeyboardArrowUp size={40} className="font-bold text-[#4CCD99]" />
                <h4 className="text-lg font-medium opacity-70 p-2">WE ALWAYS HAVE TRUST</h4>
                <h1 className="text-2xl uppercase md:text-3xl lg:text-5xl font-normal pb-2 ">Our Clients</h1>
                <hr className="bg-[#4CCD99] w-2/6 lg:w-1/6 h-1 " />
            </div>
            <Swiper
                slidesPerView={3}
                loop={true}
                autoplay={
                    {
                        delay: 2000,
                    }
                }
                spaceBetween={30}
                freeMode={true}
                navigation={true}
                pagination={true}
                modules={[FreeMode, Navigation, Autoplay]}>
                <SwiperSlide>
                    <img className="w-full" src={'https://beyot.g5plus.net/main/wp-content/uploads/2016/11/partner-03.png'} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full" src={'https://beyot.g5plus.net/main/wp-content/uploads/2016/11/partner-02.png'} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full" src={'https://beyot.g5plus.net/main/wp-content/uploads/2016/11/partner-01.png'} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full" src={'https://beyot.g5plus.net/main/wp-content/uploads/2016/11/partner-14.png'} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full" src={'https://beyot.g5plus.net/main/wp-content/uploads/2016/11/partner-04.png'} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default OurClients;