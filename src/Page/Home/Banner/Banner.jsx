import 'swiper/css';
import "swiper/css/navigation";
import "./Banner.css";
const Banner = () => {
    return (
        <div className="carousel w-full h-72 md:h-[600px] mt-5">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/SmYnNyd/banner-3.jpg" className="w-full rounded-xl" />
                <div className="absolute transform left-1/2 top-3 md:top-10 -translate-x-1/2 text-white w-8/12 md:w-5/12 space-y-7 z-10">
                    <h1 data-aos="zoom-in-left" className='text-center text-2xl md:text-5xl font-bold flex-col font-family' >Find Your <span className='text-background text-4xl md:text-6xl '>Awesome Toy Car</span>  With Best Quality </h1>
                </div>
                <div className="absolute flex justify-between gap-5 transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full rounded-xl">
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/RbxgNkt/img-5.jpg" className="w-full rounded-xl" />
                <div className="absolute transform left-1/2 top-3 md:top-10 -translate-x-1/2 text-white w-8/12 md:w-5/12 space-y-7 z-10">
                    <h1 data-aos="zoom-in-left" className='text-center text-2xl md:text-5xl font-bold flex-col font-family' >Find Your <span className='text-background text-4xl md:text-6xl '>Awesome Toy Car</span>  With Best Quality </h1>
                </div>
                <div className="absolute flex justify-between gap-5 transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full rounded-xl">
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/54SLzBH/img-7.jpg" className="w-full rounded-xl" />
                <div className="absolute transform left-1/2 top-3 md:top-10 -translate-x-1/2 text-white w-8/12 md:w-5/12 space-y-7 z-10">
                    <h1 data-aos="zoom-in-left" className='text-center text-2xl md:text-5xl font-bold flex-col font-family' >Find Your <span className='text-background text-4xl md:text-6xl '>Awesome Toy Car</span>  With Best Quality </h1>
                </div>
                <div className="absolute flex justify-between gap-5 transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full rounded-xl">
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/Z6hVFJd/img-10.jpg" className="w-full rounded-xl" />
                <div className="absolute transform left-1/2 top-3 md:top-10 -translate-x-1/2 text-white w-8/12 md:w-5/12 space-y-7 z-10">
                    <h1 data-aos="zoom-in-left" className='text-center text-2xl md:text-5xl font-bold flex-col font-family' >Find Your <span className='text-background text-4xl md:text-6xl '>Awesome Toy Car</span>  With Best Quality </h1>
                </div>
                <div className="absolute flex justify-between gap-5 transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full rounded-xl">
                </div>
            </div>
        </div>
    );
};

export default Banner;