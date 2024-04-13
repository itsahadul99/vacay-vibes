import Banner1 from '../assets/Banner1.jpg'
import Banner2 from '../assets/banner2.jpg'
import Banner3 from '../assets/banner3.jpg'
import Banner4 from '../assets/banner4.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay,  Pagination } from 'swiper/modules';
const Banner = () => {
    return (
        <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            navigation={true}
            loop={true} autoplay={{
                delay: 2500,
            }}>
            <SwiperSlide>
                <div className="hero min-h-[calc(100vh-130px)]" style={{ backgroundImage: `url(${Banner1})` }}>
                    <div className="hero-overlay bg-opacity-60l"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="text-center bg-[#20212048] p-4">
                            <h1 className="text-5xl font-bold  cursor-pointer">Find Your Dream Property</h1>
                            <p className="mb-2">We are provide the best property in suitable price. <br /> You can find your dream property by us.</p>
                            <button className="btn btn-sm bg-[#4CCD99]">Learn More</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero min-h-[calc(100vh-130px)]" style={{ backgroundImage: `url(${Banner2})` }}>
                    <div className="hero-overlay bg-opacity-60l"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="text-center bg-[#20212048] p-4">
                            <h1 className="text-5xl font-bold  cursor-pointer">Find Your Dream Property</h1>
                            <p className="mb-2">We are provide the best property in suitable price. <br /> You can find your dream property by us.</p>
                            <button className="btn btn-sm bg-[#4CCD99]">Learn More</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero min-h-[calc(100vh-130px)]" style={{ backgroundImage: `url(${Banner3})` }}>
                    <div className="hero-overlay bg-opacity-60l"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="text-center bg-[#20212048] p-4">
                            <h1 className="text-5xl font-bold  cursor-pointer">Find Your Dream Property</h1>
                            <p className="mb-2">We are provide the best property in suitable price. <br /> You can find your dream property by us.</p>
                            <button className="btn btn-sm bg-[#4CCD99]">Learn More</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero min-h-[calc(100vh-130px)]" style={{ backgroundImage: `url(${Banner4})` }}>
                    <div className="hero-overlay bg-opacity-60l"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="text-center bg-[#20212048] p-4">
                            <h1 className="text-5xl font-bold  cursor-pointer">Find Your Dream Property</h1>
                            <p className="mb-2">We are provide the best property in suitable price. <br /> You can find your dream property by us.</p>
                            <button className="btn btn-sm bg-[#4CCD99]">Learn More</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    );
};

export default Banner;