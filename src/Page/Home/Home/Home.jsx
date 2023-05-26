import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Banner from "../Banner/Banner";
import ImageGallery from "../ImageGallery/ImageGallery";
import NewToy from "../NewToy/NewToy";
import Testimonial from "../Testimonial/Testimonial";
import useTitle from "../../../hooks/useTitle";

const Home = () => {
    useTitle("Home")
    return (
        <div >
            <Banner></Banner>
            <ImageGallery></ImageGallery>
            <ShopByCategory></ShopByCategory>
            <NewToy></NewToy>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;