import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useParams } from "react-router-dom";
import Heading from "../Shared/Heading/Heading";

const AllToyDetails = () => {
    const [singleToyDetails, setSingleToyDetails] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://toy-marketplace-server-side.vercel.app/myToy/details/${id}`)
            .then(res => res.json())
            .then(data => setSingleToyDetails(data))
            .catch(err => console.log(err));
    }, [])
    return (
        <div data-aos="fade-down-right">
            <Heading>Details Of the Selected Toy</Heading>
            <div className="card card-side bg-base-100 p-5 md:w-3/4 md:mx-auto border border-yellow-500 hover:shadow-2xl transition-all duration-300 mb-5 mx-5 ">
                <div className="md:flex items-center">
                    <figure>
                        <LazyLoadImage
                            className='w-52'
                            effect="blur"
                            src={singleToyDetails?.toyPhoto}
                            delayTime={1000}
                        />
                    </figure>
                    <div className="card-body md:w-1/2 text-justify">
                        <h2 className="card-title">{singleToyDetails?.toyName}</h2>
                        <p>Seller: {singleToyDetails?.sellerName}</p>
                        <p>Seller Email: {singleToyDetails?.sellerEmail}</p>
                        <p>Price: $ {singleToyDetails?.toyPrice}</p>
                        <div className="flex gap-4 justify-start">
                            <p className="flex-grow-0">Ratings:  {singleToyDetails?.toyRating}</p>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={singleToyDetails?.toyRating}
                                readOnly
                            />
                        </div>
                        <p>Quantity:  {singleToyDetails?.toyQuantity}</p>
                        <p>Description:  {singleToyDetails?.toyDescription}</p>
                        <Link><button className="btn btn-warning hover:shadow-xl">Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllToyDetails;