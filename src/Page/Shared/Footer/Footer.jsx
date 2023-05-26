import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiSend } from "react-icons/fi";

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 text-base-content justify-between" >
                <div>
                    <span className="footer-title">Category</span>
                    <Link to="allToys" className="link link-hover">All Cars</Link>
                    <a className="link link-hover">Sports Car</a>
                    <a className="link link-hover">Regular Car</a>
                    <a className="link link-hover">Truck</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Contact Us</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div className="place-items-center space-y-3">
                    <span className="footer-title">Follow Us On</span>
                    <div className="grid grid-flow-col gap-4">
                        <Link to="" className="text-3xl text-yellow-500"><FaFacebook></FaFacebook></Link>
                        <Link to="" className="text-3xl text-yellow-500"><FaTwitter></FaTwitter></Link>
                        <Link to="" className="text-3xl text-yellow-500"><FaYoutube></FaYoutube></Link>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-center text-2xl mt-2">Subscribe For Newsletter</h4>
                        <div className="flex items-center">
                            <input type="email" placeholder="Your Email" className="w-full px-3 py-2 border-2 border-gray-500 focus:outline-0 focus:border-2 focus:border-yellow-500 rounded-lg" />
                            <span className="text-lg relative -left-7 cursor-pointer hover:text-yellow-500">
                                <FiSend></FiSend>
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t text-base-content border-base-300 flex justify-center">
                <div className="items-center grid-flow-col">
                    <Link to="/"><img src="https://i.ibb.co/dtgK45q/logo.png" alt="" className="w-14 md:w-20 h-14 md:h-20" /></Link>
                    <p>&copy; Kabbo Toys Ltd. All Right Reserved <br />Providing reliable tech since 2020</p>
                </div>

            </footer>
        </>
    );
};

export default Footer;