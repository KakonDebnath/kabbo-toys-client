import { useContext, useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import Heading from '../Shared/Heading/Heading';
import { FaSearch } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';


const AllToys = () => {
    const {user} = useContext(AuthContext);
    const [allToys, setAllToys] = useState([]);
    const [searchText, setSearchText] = useState("");
    useTitle("All Toys")

    useEffect(() => {
        fetch("https://toy-marketplace-server-side.vercel.app/allToys")
            .then(res => res.json())
            .then(data => setAllToys(data))
            .catch(err => {
                console.log(err);
            })
    }, [])


    const handleDetailsBtn = ()=>{
        if(!user){
            toast("Please Login First For View Details", {
                autoClose: 2000,
                pauseOnHover: false,
            });
        }
    }
    return (
        <>
            {
                !allToys.length &&
                <div className='flex justify-center my-5'>
                    <h2 className='flex justify-center items-center font-bold text-3xl'>L <img src="https://i.ibb.co/jbTRfQd/Hourglass.gif" alt="" /> ding........</h2>
                </div>
            }

            <div data-aos="fade-up"
                data-aos-duration="1500" className="overflow-x-auto w-full">
                <Heading>All Toys</Heading>
                <div className='flex items-center justify-between'>
                    <h2 className='capitalize text-xl w-1/2'>total Item found: {allToys?.length}</h2>
                    <div className='flex flex-grow justify-end items-center w-1/2'>
                        <input onChange={(e) => setSearchText(e.target.value)} type="text" name="text" placeholder='Search Name For Your Toy' className='my-2 border-2 border-black focus:border-yellow-500 focus:outline-0 rounded-lg p-2 w-1/2' />
                        <span className='relative right-10'><FaSearch></FaSearch></span>
                    </div>
                </div>
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className='text-center'>
                            <th>Sl</th>
                            <th>Toy Image</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys && allToys?.filter((toy) => toy?.toyName.toLowerCase().includes(searchText.toLowerCase()))
                                ?.map((toy, index) => <tr key={toy._id} className='text-center'>
                                    <td>{index + 1}</td>
                                    <td>
                                        <LazyLoadImage
                                            className='h-12'
                                            effect="blur"
                                            src={toy?.toyPhoto}
                                            delayTime={1000}
                                        />
                                    </td>
                                    <td>
                                        <p className="font-bold capitalize">{toy?.sellerName}</p>
                                        <p className="text-sm opacity-70">{toy?.sellerEmail}</p>
                                    </td>
                                    <td>{toy?.toyName}</td>
                                    <td>{toy?.toyCategory}</td>
                                    <td>$ {toy?.toyPrice}.00</td>
                                    <td>{toy?.toyQuantity} units</td>
                                    <td className='p-0'>
                                        <p className='flex justify-around items-center'>
                                            <Link to={`/allToyDetails/${toy._id}`}><button onClick={handleDetailsBtn} className="btn btn-warning">details</button></Link>
                                        </p>
                                    </td>
                                </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </>
    );
};

export default AllToys;