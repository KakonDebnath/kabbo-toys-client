import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../../assets/error-404.json";

const ErrorPage = () => {
    return (
        <div className="flex justify-around items-center">
            <Lottie animationData={animationData} loop={true} />
            <div>

                <Link to="/"><button className="btn btn-warning">Back To Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;