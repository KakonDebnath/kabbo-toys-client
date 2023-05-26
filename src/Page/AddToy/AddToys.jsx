import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from 'react-toastify';
import Heading from "../Shared/Heading/Heading";
import useTitle from "../../hooks/useTitle";

const AddToys = () => {
    const [category, setCategory] = useState("");
    const { user, } = useContext(AuthContext);
    useTitle("Add Toys");

    const handleAddToy = (e) => {
        e.preventDefault();
        const form = e.target;
        const toyName = form.name.value;
        const toyPhoto = form.photo.value;
        const toyPrice = parseInt(form.price.value);
        const toyRating = form.rating.value;
        const toyQuantity = form.quantity.value;
        const toyDescription = form.description.value;
        const toyCategory = category;
        const toyInfo = {
            toyName, toyPhoto, toyPrice, toyRating, toyQuantity, toyCategory,
            toyDescription, sellerEmail: user?.email, sellerName: user?.displayName
        }
        // console.log(toyInfo);

        fetch("https://toy-marketplace-server-side.vercel.app/addToy", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(toyInfo)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if(data.acknowledged){
                    toast("✅Successfully Added!", {
                        autoClose: 2000,
                        pauseOnHover: false,
                    });
                    form.reset();
                }
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div data-aos="fade-down"
        data-aos-duration="1500">
            <Heading>Add A Toy</Heading>
            <div className=" mb-10">
                <form onSubmit={handleAddToy}>
                    <div className="md:grid grid-cols-2 px-5 md:px-0 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input type="name" name="name" placeholder="Toy Name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Photo</span>
                            </label>
                            <input type="photo" name="photo" placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name="price" placeholder="Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ratings</span>
                            </label>
                            <input type="text" name="rating" placeholder="Ratings" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select onChange={(e) => setCategory(e.target.value)} className="focus:outline-0 border-2 rounded-lg py-3 px-3">
                                <option value="">Select A Category</option>
                                <option value="school-bus">School Bus</option>
                                <option value="police-car">Police-Car</option>
                                <option value="jeep">Jeep</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered" />
                        </div>
                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text">Product Description</span>
                            </label>
                            <textarea name="description" placeholder="Description Hare " className="input input-bordered p-3 min-h-16"></textarea>
                        </div>
                    </div>
                    <div className="flex justify-center mt-5">
                        <button type="submit" className="btn btn-warning" title="Please set atlest name price to add">Add A Toy</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToys;