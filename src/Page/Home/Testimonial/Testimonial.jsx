import { Rating } from "@smastrom/react-rating";
import Heading from "../../Shared/Heading/Heading";
import "./Testimonial.css";
import { FaQuoteRight } from 'react-icons/fa';

const Testimonial = () => {
    return (
        <div data-aos="zoom-in"
        data-aos-duration="1500">
            <Heading>What They Say</Heading>
            <div className="md:grid grid-cols-2 gap-5 mb-10 p-5 md:p-0">
                <div className="bg-pink-100 radius p-5 mb-10 md:mb-0">
                    <div className="flex justify-end mr-10"><FaQuoteRight className="text-5xl"></FaQuoteRight></div>
                    <div className="flex items-center gap-5 justify-center">
                        <img className="rounded-full w-32 h-32" src="https://i.ibb.co/nrstqRf/customer-2.jpg" alt="" />
                        <div>
                            <h2 className="font-bold text-2xl">Jolly Advani</h2>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={4.6}
                                readOnly
                            />
                        </div>
                    </div>
                    <p>"Let's take most of the money we would've spent on paid advertising and paid marketing and instead of spending it on that, invest it in the customer experience/customer service and then let our customers do the marketing for us through word of mouth."</p>
                </div>
                <div className="bg-yellow-100 radius p-5">
                    <div className="flex justify-end mr-10"><FaQuoteRight className="text-5xl"></FaQuoteRight></div>
                    <div className="flex items-center gap-5 justify-center">
                        <img className="rounded-full w-32 h-32" src="https://i.ibb.co/1ZZBTVM/customerhappiness.jpg" alt="" />
                        <div>
                            <h2 className="font-bold text-2xl">Jolly Advani</h2>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={4.6}
                                readOnly
                            />
                        </div>
                    </div>
                    <p>"Let's take most of the money we would've spent on paid advertising and paid marketing and instead of spending it on that, invest it in the customer experience/customer service and then let our customers do the marketing for us through word of mouth."</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;