import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen space-y-5">
            <h1 className="text-4xl lg:text-6xl font-medium">☹</h1>
            <h3 className="text-4xl lg:text-7xl font-semibold text-black">404</h3>
            <h4 className="text-lg font-semibold">Page Not Found</h4>
            <Link to= "/"><button className="btn btn-outline">Go back Home</button></Link>
        </div>
    );
};

export default ErrorPage;