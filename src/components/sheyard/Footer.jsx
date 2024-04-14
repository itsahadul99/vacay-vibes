import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="px-4 divide-y bg-gray-600 dark:bg-gray-100 text-gray-100 dark:text-gray-600">
            <div className="max-w-7xl mx-auto">
                <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                    <div className="lg:w-1/3">
                        <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-400 dark:bg-violet-600">
                                <img className="rounded-lg" src="/logo.png" alt="" />
                            </div>
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">Vacay<span className="text-green-400">Vibes</span></h3>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase text-gray-50 dark:text-gray-900">Product</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Features</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Integrations</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Pricing</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase text-gray-50 dark:text-gray-900">Company</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Privacy</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Terms of Service</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="uppercase text-gray-50 dark:text-gray-900">Developers</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Public API</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Documentation</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Guides</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <div className="uppercase text-gray-50 dark:text-gray-900">Social media</div>
                            <div className="flex justify-start space-x-3 *:cursor-pointer">
                                <a><FaFacebook size={30} /></a>
                                <a><FaTwitter size={30} /></a>
                                <a><FaInstagram size={30} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="py-6 text-sm text-center text-gray-400 dark:text-gray-600">© 1968 Vacay Vibes Co. All rights reserved.</div>
            </div>
        </div>
    );
};

export default Footer;