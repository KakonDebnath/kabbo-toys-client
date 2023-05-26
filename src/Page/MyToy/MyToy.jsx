import { useContext, useEffect, useState } from 'react';
import { FaPencilAlt, FaSearch, FaTrashAlt } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Rating } from '@smastrom/react-rating';
import Heading from '../Shared/Heading/Heading';
import useTitle from '../../hooks/useTitle';


const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [allToys, setAllToys] = useState([]);
    const [category, setCategory] = useState("");
    const [updatedData, setUpdatedData] = useState(null);
    const [updatedId, setUpdatedId] = useState("");
    const [toyDetails, setToyDetails] = useState(null);
    const [searchText, setSearchText] = useState("");
    const [sortValue, setSortValue] = useState(-1);
    useTitle("My toys");

    // console.log(user.email);
    useEffect(() => {
        fetch(`https://toy-marketplace-server-side.vercel.app/myToys?email=${user?.email}&sort=${sortValue}`)
            .then(res => res.json())
            .then(data => setAllToys(data))
            .catch(err => {
                console.log(err);
            })
    }, [user, sortValue])

    // Client Side Sorting
    // useEffect(() => {
    //     const sortFunction = async () => {
    //         const sortedData = []
    //         if (sortValue === "highToLow") {
    //             sortedData.push(...allToys.sort((a, b) => b.toyPrice - a.toyPrice))
    //             setAllToys(sortedData);
    //         }if (sortValue === "lowToHigh") {
    //             sortedData.push(...allToys.sort((a, b) => a.toyPrice - b.toyPrice))
    //             setAllToys(sortedData);
    //         }
    //     }
    //     sortFunction();
    // }, [sortValue])

    // Delete a toy
    const handleDeleteToys = (id) => {
        fetch(`https://toy-marketplace-server-side.vercel.app/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount > 0) {
                    toast("✅Successfully Delete!", {
                        autoClose: 2000,
                        pauseOnHover: false,
                    });
                    const remainingData = allToys.filter(toy => toy._id !== id);
                    setAllToys(remainingData);
                }
            })
        // console.log(id);
    }
    // get updated toy data
    const handleGetUpdateData = (id) => {
        setUpdatedId(id);
        fetch(`https://toy-marketplace-server-side.vercel.app/update/${id}`)
            .then(res => res.json())
            .then(data => setUpdatedData(data))
            .catch(err => console.log(err));
    }
    // Close Modal After updating data
    const closeUpdateModal = (targetBtn) => {
        const closeBtnUpdate = document.getElementById(targetBtn);
        closeBtnUpdate.click();
    }

    // Update data
    const handleUpdateToy = (e) => {
        e.preventDefault();
        const form = e.target;
        const toyName = form.name.value;
        const toyPhoto = form.photo.value;
        const toyPrice = parseInt(form.price.value);
        const toyRating = form.rating.value;
        const toyQuantity = form.quantity.value;
        const toyDescription = form.description.value;
        const toyCategory = category || updatedData?.toyCategory;
        const toyUpdateInfo = {
            toyName, toyPhoto, toyPrice, toyRating, toyQuantity, toyCategory,
            toyDescription, sellerEmail: user?.email, sellerName: user?.displayName
        }
        fetch(`https://toy-marketplace-server-side.vercel.app/update/${updatedId}`, {
            method: 'put',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(toyUpdateInfo),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount !== 0) {
                    toast("✅Successfully Update!", {
                        autoClose: 2000,
                        pauseOnHover: false,
                    });
                    closeUpdateModal("closeBtnUpdate");
                    fetch(`https://toy-marketplace-server-side.vercel.app/myToys?email=${user?.email}&sort=${sortValue}`)
                        .then(res => res.json())
                        .then(data => setAllToys(data))
                        .catch(err => {
                            console.log(err);
                        })
                } else {
                    alert("Please Change Something to Update")
                }
            })
    }


    // handleDetails 
    const handleDetails = (id) => {
        console.log(id);
        setUpdatedId(id);
        fetch(`https://toy-marketplace-server-side.vercel.app/myToy/details/${id}`)
            .then(res => res.json())
            .then(data => setToyDetails(data))
            .catch(err => console.log(err));
    }

    return (
        <>
            <div
                data-aos="fade-down"
                data-aos-duration="1500"
                className="overflow-x-auto w-full"
            >
                <Heading>My Toys Page</Heading>

                {/* Search Btn */}
                <div className='flex justify-end items-center'>
                    <div className='mr-5 '>
                        <select onChange={(e) => setSortValue(e.target.value)} className="border-2 rounded-lg py-3 px-3">
                            <option value={-1}>High-to-low</option>
                            <option value={1}>Low-to-high</option>
                        </select>
                    </div>
                    <input onChange={(e) => setSearchText(e.target.value)} type="text" name="text" placeholder='Search Name For Your Toy' className='my-5 border-2 border-black focus:border-yellow-500 focus:outline-0 rounded-lg w-1/4 p-2 ' />
                    <span className='relative right-10'><FaSearch></FaSearch></span>
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !allToys.length &&
                            <tr className='flex justify-center my-5'>
                                <td className='flex justify-center items-center font-bold text-3xl'>L <img src="https://i.ibb.co/jbTRfQd/Hourglass.gif" alt="" /> ding........</td>
                            </tr>
                        }
                        {
                            allToys && allToys?.filter(toy => toy?.toyName.toLowerCase().includes(searchText.toLowerCase()))
                                .map((toy, index) => <tr key={toy._id} className='text-center'>
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
                                        <div className='flex justify-around items-center'>
                                            <label htmlFor="my-modal-3" onClick={() => handleDetails(toy._id)} className="btn btn-warning">details</label>
                                            {
                                                user && <div className='text-warning flex justify-center items-center gap-1'>
                                                    <label onClick={() => handleGetUpdateData(toy._id)} htmlFor="edit-modal" className='text-blue-500 p-3 hover:bg-blue-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300' ><FaPencilAlt /></label>
                                                    <button onClick={() => handleDeleteToys(toy._id)} className="text-red-500 p-3 hover:bg-red-500 rounded-lg hover:text-white transition-all duration-300"><FaTrashAlt /></button>
                                                </div>
                                            }
                                        </div>
                                    </td>
                                </tr>)
                        }
                    </tbody>

                </table>
            </div>

            {/* UPdate Modal Section */}
            <input type="checkbox" id="edit-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl ">
                    <label htmlFor="edit-modal" id='closeBtnUpdate' className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-3xl text-center py-5">Now You Can Edit Your Toys</h3>
                    <>
                        <form onSubmit={handleUpdateToy}>
                            <div className="md:grid grid-cols-2 px-5 md:px-0 gap-3">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <input type="name" name="name" placeholder="Toy Name" className="input input-bordered" defaultValue={updatedData?.toyName} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Toy Photo</span>
                                    </label>
                                    <input type="photo" name="photo" placeholder="Photo URL" className="input input-bordered" defaultValue={updatedData?.toyPhoto} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name="price" placeholder="Price" className="input input-bordered" defaultValue={updatedData?.toyPrice} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Ratings</span>
                                    </label>
                                    <input type="text" name="rating" placeholder="Ratings" className="input input-bordered" defaultValue={updatedData?.toyRating} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <select onChange={(e) => setCategory(e.target.value)} className="focus:outline-0 border-2 rounded-lg py-3 px-3" >
                                        <option value="">Select A Category</option>
                                        <option value="school-bus">School Bus</option>
                                        <option value="jeep">Jeep</option>
                                        <option value="police-car">Police-Car</option>
                                        <option value="others">Others</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered" defaultValue={updatedData?.toyQuantity} />
                                </div>
                                <div className="form-control col-span-2">
                                    <label className="label">
                                        <span className="label-text">Product Description</span>
                                    </label>
                                    <textarea name="description" placeholder="Description Hare " className="input input-bordered p-3 min-h-16" defaultValue={updatedData?.toyDescription}></textarea>
                                </div>
                            </div>
                            <div className="modal-action flex justify-center mt-5">
                                <button type="submit" className="btn btn-warning">Update Toy</button>
                            </div>
                        </form>
                    </>
                </div>
            </div>


            {/* Details Modal Section*/}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative w-8/12 max-w-5xl">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-center text-3xl capitalize font-bold before:border-r-8 before:mr-5 before:border-yellow-500 before:rounded-l-2xl">Toy Details</h3>

                    <div className="card card-side bg-base-100 p-5 items-center">
                        <figure>
                            <LazyLoadImage
                                className='w-52'
                                effect="blur"
                                src={toyDetails?.toyPhoto}
                                delayTime={1000}
                            />
                        </figure>
                        <div className="card-body w-1/2">
                            <h2 className="card-title">{toyDetails && toyDetails.toyName}</h2>
                            <p>Seller: {toyDetails && toyDetails.sellerName}</p>
                            <p>Seller Email: {toyDetails && toyDetails.sellerEmail}</p>
                            <p>Price: $ {toyDetails && toyDetails.toyPrice}</p>
                            <div className="flex gap-4 justify-start">
                                <p className="flex-grow-0">Ratings:  {toyDetails?.toyRating}</p>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={toyDetails?.toyRating}
                                    readOnly
                                />
                            </div>
                            <p>Quantity:  {toyDetails && toyDetails.toyQuantity}</p>
                            <p>Description:  {toyDetails && toyDetails.toyDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyToy;