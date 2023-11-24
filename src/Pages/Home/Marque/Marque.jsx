import Marquee from "react-fast-marquee";
import CompanyServices from "../../../components/Shared/CompanyServices";
import image from '../../../assets/image/car company/09bc70cc4ad720c23f11f241b11019cd.jpg'
import image2 from '../../../assets/image/car company/2f3bf9f0ea31ffd6008db72fef359b2a.jpg'
import image3 from '../../../assets/image/car company/40b6ee84842f712ca0424b2ab49b6233.jpg'
import image4 from '../../../assets/image/car company/6df93c84344f02ad8f4202ae10fd45a2.jpg'
import image5 from '../../../assets/image/car company/8cbe8dfbdbd765449bff9436df5130aa.jpg'
import image6 from '../../../assets/image/car company/96cc730f169af2b34dfa169ad3a9e865.jpg'
import image7 from '../../../assets/image/car company/cd80713efbc34b194394beb26a65ce16.jpg'
import image8 from '../../../assets/image/car company/f690a583fb11011fccc953c4aa4bd439.jpg'

const Marque = () => {
    return (
        <div className="my-12 dark:text-white container mx-auto">
            <h2 className="text-4xl my-8 text-center font-bold">Our <span className="text-fuchsia-500">Product</span> Related Companies</h2>
            <Marquee speed={100} pauseOnHover={true} className=" w-[95%] mx-auto">
                <div className="w-full grid grid-cols-10 items-center justify-center gap-7 mt-8">
                    <CompanyServices image={image} />
                    <CompanyServices image={image2} />
                    <CompanyServices image={image3} />
                    <CompanyServices image={image4} />
                    <CompanyServices image={image5} />
                    <CompanyServices image={image6} />
                    <CompanyServices image={image7} />
                    <CompanyServices image={image8} />
                    <CompanyServices image={image2} />
                    <CompanyServices image={image3} />
                </div>
            </Marquee>
        </div>
    );
};

export default Marque;