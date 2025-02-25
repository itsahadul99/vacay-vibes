/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-5 px-5 lg:px-8 py-5 lg:py-10 bg-[#31363F] text-white my-5 lg:my-10 text-opacity-80 rounded-lg">
            <Helmet>
                <title>Vacay Vibes || Contact Page</title>
            </Helmet>
            <h1 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2000" className="text-xl md:text-4xl lg:text-5xl font-semibold pb-5" >Contact Us</h1>
            <form className="flex flex-col lg:flex-row justify-center">
                <div data-aos="fade-right" data-aos-duration="2000" className="flex-1 space-y-3 ">
                    <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold">Get in Touch</h3>
                    <p className="text-sm md:text-lg font-semibold"><span className=" font-medium">Email: </span> vacayvibes2343@gmail.com</p>
                    <p className="text-sm md:text-lg font-semibold"><span className=" font-medium">Phone: 01967271561</span> </p>
                    <p className="text-xs md:text-sm ">Questions about properties? We've got you covered. Reach out to our expert team today for all your real estate needs. Let's get started on finding your dream property or perfect buyer!</p>
                </div>
                <div data-aos="fade-left" data-aos-duration="3000"  className="flex-1 space-y-5 mt-4">
                    <div className="flex flex-col gap-3 md:flex-row *:p-4 justify-between *:border-2 *:border-[#4CCD99] *:rounded-md *:bg-[#31363F]">
                        <input data-aos="fade-left" data-aos-duration="1500" type="text" placeholder="Name" />
                        <input data-aos="fade-left" data-aos-duration="2000" type="email" required placeholder="Email" />
                    </div>
                    <textarea data-aos="fade-left" data-aos-duration="2500" placeholder="Message" className="w-full lg:h-36 bg-[#31363F] border-2 border-[#4CCD99] p-5"></textarea>
                    <button
                     className="btn btn-outline border-2 border-[#4CCD99] text-white">Send</button>
                </div>
            </form>
        </div>
    );
};

export default ContactUs;