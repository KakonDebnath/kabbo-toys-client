import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Heading from '../../Shared/Heading/Heading';

const MyImageGallery = () => {
    const [images, setImages] = useState([]);
    const placeHolderImg = "https://i.ibb.co/xzSH8Ym/placeholder.jpg";

    useEffect(() => {
        fetch("https://toy-marketplace-server-side.vercel.app/allImg")
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])
    return (
        <div data-aos="slide-left" className='w-full '>
            <Heading>Awesome Image Gallery</Heading>
            {
                !images.length &&
                <div className='flex justify-center my-5'>
                    <h2 className='flex justify-center font-bold text-3xl'>L <img src="https://i.ibb.co/jbTRfQd/Hourglass.gif" alt="" /> ding........</h2>
                </div>
            }
            <div className="w-full md:h-96 h-72 overflow-y-auto grid grid-cols-2 md:grid-cols-5 gap-4 bg-slate-100">
                {
                    images && images?.map((img, i) =>
                        <LazyLoadImage
                            className='hover:scale-110 transition-all duration-300'
                            key={i}
                            effect="blur"
                            src={img.src}
                            delayTime={1000}
                            placeholderSrc={placeHolderImg}
                        />)
                }
            </div>
        </div>
    );
};

export default MyImageGallery;