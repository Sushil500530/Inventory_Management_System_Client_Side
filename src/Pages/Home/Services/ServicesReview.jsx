import {Parallax } from "react-parallax";
import img2 from '../../../assets/image/banner/banner.jpg'
import img from '../../../assets/image/banner/banner2.jpg'

const ServicesReview = () => {

    return (
        <div className="w-full my-12">
            <h2 className="text-4xl font-bold text-center mb-20"><span className="text-fuchsia-500">Contribute</span> More...</h2>
            <Parallax
                blur={{ min: -100, max: 100 }}
                bgImage={img}
                bgImageAlt="car"
                strength={-200}
                style={{
                   borderRadius:'10px'
                   
                }}
            >
                <div className=" h-[700px] hero" >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="w-3/5">
                            <h1 className="mb-5 text-5xl font-bold uppercase">Car Shop</h1>
                            <p className="mb-5 text-base font-semibold">{`Inventory management refers to the process of ordering, storing, using, and selling a company's inventory. This includes the management of raw materials, components, and finished products, as well as warehousing and processing of such items.`}</p>
                            <button className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-xl hover:text-white border-none px-8">Get Started</button>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default ServicesReview;