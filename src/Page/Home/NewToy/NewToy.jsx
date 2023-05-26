import Heading from "../../Shared/Heading/Heading";
import "./NewToy.css";

const NewToy = () => {
    return (
        <div data-aos="fade-down" data-aos-duration="2000">
            <Heading>Our New Toy</Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5 md:px-5 px-5 bg-yellow-50 p-10 rounded-lg">
                <div className="border-2 border-yellow-500 p-3 rounded-lg relative bg-white">
                    <div className="mt-3">
                        <img src="https://i.ibb.co/59wYsMt/truck-png-33260.png" alt="" />
                        <h3 className="text-xl text-center mt-2">Awesome Covered Van</h3>
                        <button className="bg-yellow-500 rounded-xl px-5 py-2 text-lg mt-3 relative left-1/2 -translate-x-1/2 hover:bg-yellow-400 transition-all duration-300 hover:shadow-2xl">View</button>
                    </div>
                    <div className="absolute right-2 top-2 offer">
                        <h4 className=" inline-block px-2 py-1">20% off</h4>
                    </div>
                </div>
                <div className="border-2 border-yellow-500 p-3 rounded-lg relative bg-white">
                    <div className="mt-3">
                        <img src="https://i.ibb.co/1LCnT3K/cargo-truck-png-4378.png" alt="" />
                        <h3 className="text-xl text-center mt-2">Awesome Covered Van</h3>
                        <button className="bg-yellow-500 rounded-xl px-5 py-2 text-lg mt-3 relative left-1/2 -translate-x-1/2 hover:bg-yellow-400 transition-all duration-300 hover:shadow-2xl">View</button>
                    </div>
                    <div className="absolute right-2 top-2 offer">
                        <h4 className=" inline-block px-2 py-1">20% off</h4>
                    </div>
                </div>
                <div className="border-2 border-yellow-500 p-3 rounded-lg relative bg-white">
                    <div className="mt-3">
                        <img className="w-7/12 mx-auto" src="https://i.ibb.co/q9gJ87J/kindpng-7010417.png" alt="" />
                        <h3 className="text-xl text-center mt-2">Awesome Covered Van</h3>
                        <button className="bg-yellow-500 rounded-xl px-5 py-2 text-lg mt-3 relative left-1/2 -translate-x-1/2 hover:bg-yellow-400 transition-all duration-300 hover:shadow-2xl">View</button>
                    </div>
                    <div className="absolute right-2 top-2 offer">
                        <h4 className=" inline-block px-2 py-1">20% off</h4>
                    </div>
                </div>
                <div className="border-2 border-yellow-500 p-3 rounded-lg relative bg-white">
                    <div className="mt-3">
                        <img className="w-3/4 mx-auto" src="https://i.ibb.co/5TW4Mxs/kisspng-baby-toddler-car-seats-toy-all-terrain-vehicle-toys-5b30e0c65ab916-8917278815299299263716.png" alt="" />
                        <h3 className="text-xl text-center mt-2">Awesome Covered Van</h3>
                        <button className="bg-yellow-500 rounded-xl px-5 py-2 text-lg mt-3 relative left-1/2 -translate-x-1/2 hover:bg-yellow-400 transition-all duration-300 hover:shadow-2xl">View</button>
                    </div>
                    <div className="absolute right-2 top-2 offer">
                        <h4 className=" inline-block px-2 py-1">20% off</h4>
                    </div>
                </div>
            </div>
            <h6 className="flex justify-center mb-5"><button className="btn btn-warning text-gray-600">Show All</button></h6>
        </div>
    );
};

export default NewToy;