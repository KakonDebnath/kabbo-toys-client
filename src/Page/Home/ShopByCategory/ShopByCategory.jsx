import { Rating } from '@smastrom/react-rating';
import { useContext, useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Heading from '../../Shared/Heading/Heading';
import "./ShopByCategory.css";
import { AuthContext } from '../../../Provider/AuthProvider';
import { toast } from 'react-toastify';

const ShopByCategory = () => {

    const {user} = useContext(AuthContext);
    const [tabName, setTabName] = useState('school-bus');
    const [selectedToy, setSelectedToy] = useState([]);
    const handelSelectTab = (tName) => {
        setTabName(tName);
    }
    useEffect(() => {
        fetch(`https://toy-marketplace-server-side.vercel.app/allToy/category/${tabName}`)
            .then(res => res.json())
            .then(data => setSelectedToy(data))
            .catch(err => {
                console.log(err);
            })
    }, [tabName])

    const handleDetailsBtn = ()=>{
        if(!user){
            toast("Please Login First For View Details", {
                autoClose: 2000,
                pauseOnHover: false,
            });
        }
    }

    return (
        <div data-aos="slide-right" data-aos-duration='1500' className='py-10 '>
            <Heading>Shop By Category</Heading>
            <Tabs>
                <TabList>
                    <Tab onClick={() => handelSelectTab("school-bus")}  >School-Bus</Tab>
                    <Tab onClick={() => handelSelectTab("police-car")}>Police-Car</Tab>
                    <Tab onClick={() => handelSelectTab("jeep")}>Jeep</Tab>
                    <Tab onClick={() => handelSelectTab("others")}>Others</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5' >
                        {
                            !selectedToy.length &&
                            <div className='flex justify-center my-5'>
                                <h2 className='flex justify-center items-center font-bold text-4xl'>L <img src="https://i.ibb.co/jbTRfQd/Hourglass.gif" alt="" /> ding........</h2>
                            </div>
                        }
                        {
                            selectedToy && selectedToy?.map(toy =>
                                <div key={toy._id} className="card w-3/4 md:w-96 bg-base-100 shadow-lg mx-auto hover:shadow-2xl">
                                    <figure className="px-10 pt-10">
                                        <LazyLoadImage
                                            className='rounded-xl h-32 hover:scale-150 transition-all duration-500 '
                                            effect="blur"
                                            src={toy.toyPhoto}
                                            delayTime={1000}
                                        />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{toy.toyName}</h2>
                                        <div>
                                            <p>Price: $ {toy?.toyPrice}.00</p>
                                            <div className='md:flex justify-around gap-3 space-y-4 md:space-y-0'>
                                                <p>Ratings: {toy?.toyRating}</p>
                                                <Rating
                                                    style={{ maxWidth: 100 }}
                                                    value={toy?.toyRating}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                        <div className="card-actions">
                                            <Link to={`/allToyDetails/${toy._id}`}><button onClick={handleDetailsBtn} className="btn btn-warning hover:shadow-2xl">details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5' >
                        {
                            !selectedToy.length &&
                            <div className='flex justify-center my-5'>
                                <h2 className='flex justify-center items-center font-bold text-4xl'>L <img src="https://i.ibb.co/jbTRfQd/Hourglass.gif" alt="" /> ding........</h2>
                            </div>
                        }
                        {
                            selectedToy && selectedToy?.map(toy =>
                                <div key={toy._id} className="card w-3/4 md:w-96 bg-base-100 shadow-lg mx-auto hover:shadow-2xl">
                                    <figure className="px-10 pt-10">
                                        <LazyLoadImage
                                            className='rounded-xl h-32 hover:scale-150 transition-all duration-500 '
                                            effect="blur"
                                            src={toy.toyPhoto}
                                            delayTime={1000}
                                        />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{toy.toyName}</h2>
                                        <div>
                                            <p>Price: $ {toy?.toyPrice}.00</p>
                                            <div className='md:flex justify-around gap-3 space-y-4 md:space-y-0'>
                                                <p>Ratings: {toy?.toyRating}</p>
                                                <Rating
                                                    style={{ maxWidth: 100 }}
                                                    value={toy?.toyRating}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                        <div className="card-actions">
                                            <Link to={`/allToyDetails/${toy._id}`}><button className="btn btn-warning hover:shadow-2xl">details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5' >
                        {
                            !selectedToy.length &&
                            <div className='flex justify-center my-5'>
                                <h2 className='flex justify-center items-center font-bold text-4xl'>L <img src="https://i.ibb.co/jbTRfQd/Hourglass.gif" alt="" /> ding........</h2>
                            </div>
                        }
                        {
                            selectedToy && selectedToy?.map(toy =>
                                <div key={toy._id} className="card w-3/4 md:w-96 bg-base-100 shadow-lg mx-auto hover:shadow-2xl">
                                    <figure className="px-10 pt-10">
                                        <LazyLoadImage
                                            className='rounded-xl h-32 hover:scale-150 transition-all duration-500 '
                                            effect="blur"
                                            src={toy.toyPhoto}
                                            delayTime={1000}
                                        />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{toy.toyName}</h2>
                                        <div>
                                            <p>Price: $ {toy?.toyPrice}.00</p>
                                            <div className='md:flex justify-around gap-3 space-y-4 md:space-y-0'>
                                                <p>Ratings: {toy?.toyRating}</p>
                                                <Rating
                                                    style={{ maxWidth: 100 }}
                                                    value={toy?.toyRating}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                        <div className="card-actions">
                                            <Link to={`/allToyDetails/${toy._id}`}><button className="btn btn-warning hover:shadow-2xl">details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5' >
                        {
                            !selectedToy.length &&
                            <div className='flex justify-center my-5'>
                                <h2 className='flex justify-center items-center font-bold text-4xl'>L <img src="https://i.ibb.co/jbTRfQd/Hourglass.gif" alt="" /> ding........</h2>
                            </div>
                        }
                        {
                            selectedToy && selectedToy?.map(toy =>
                                <div key={toy._id} className="card w-3/4 md:w-96 bg-base-100 shadow-lg mx-auto hover:shadow-2xl">
                                    <figure className="px-10 pt-10">
                                        <LazyLoadImage
                                            className='rounded-xl h-32 hover:scale-150 transition-all duration-500 '
                                            effect="blur"
                                            src={toy.toyPhoto}
                                            delayTime={1000}
                                        />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{toy.toyName}</h2>
                                        <div>
                                            <p>Price: $ {toy?.toyPrice}.00</p>
                                            <div className='md:flex justify-around gap-3 space-y-4 md:space-y-0'>
                                                <p>Ratings: {toy?.toyRating}</p>
                                                <Rating
                                                    style={{ maxWidth: 100 }}
                                                    value={toy?.toyRating}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                        <div className="card-actions">
                                            <Link to={`/allToyDetails/${toy._id}`}><button className="btn btn-warning hover:shadow-2xl">details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;