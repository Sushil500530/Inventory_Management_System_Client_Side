/* eslint-disable react/prop-types */
import image from '../../../assets/image/banner/1e179ea0af899c73edf4d20bba57b275.jpg'
import image2 from '../../../assets/image/banner/64b4b9b2d0d1aee7a8c5aa9b2b128898.jpg'
import image3 from '../../../assets/image/banner/1cf32d0c7f6a19ef652cc468f576ae25.jpg'
import image4 from '../../../assets/image/banner/a300d2e939bd5f2cccd08f8cb49bb112.jpg'
import BannerSection from "../../../components/Shared/BannerSection";

const Banner = () => {
  return (
    <div className="pt-12">
      <div className="carousel h-[700px]">
        <div id="slide1" className="carousel-item relative w-full">
         <BannerSection className="w-full h-full flex items-center" image={image} title={'Wonder Modern Car...!'} description={'We Are a World-Wide Used Vehicle Exporter of Quality Japanese Cars at Affordable Prices.'}></BannerSection>
          <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle mr-5 text-3xl animate-pulse">❮</a>
            <a href="#slide2" className="btn btn-circle text-3xl animate-pulse">❯</a>
          </div>
          <div>
           <h2 className="absolute z-10 text-8xl opacity-100 right-8 top-10 text-fuchsia-600 font-extrabold text-center">20% OFF</h2>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
        <BannerSection className="w-full h-full flex items-center" image={image2} title={'New Model Bike....!'} description={'We Are a World-Wide Used Vehicle Exporter of Quality Japanese Cars at Affordable Prices.'}></BannerSection>
          <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle mr-5 text-3xl animate-pulse">❮</a>
            <a href="#slide3" className="btn btn-circle text-3xl animate-pulse">❯</a>
          </div>
          <h2 className="absolute z-10 text-8xl opacity-100 right-8 top-10 text-fuchsia-600 font-extrabold text-center">25% OFF</h2>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <BannerSection className="w-full h-full flex items-center" image={image3} title={'Update Version Car....!'} description={'We Are a World-Wide Used Vehicle Exporter of Quality Japanese Cars at Affordable Prices.'}></BannerSection>
          <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle mr-5 text-3xl animate-pulse">❮</a>
            <a href="#slide4" className="btn btn-circle text-3xl animate-pulse">❯</a>
          </div>
          <h2 className="absolute z-10 text-8xl opacity-100 right-8 top-10 text-fuchsia-600 font-extrabold text-center">20% OFF</h2>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
        <BannerSection className="w-full h-full flex items-center" image={image4} title={'Boy Choices Bike....!'} description={'We Are a World-Wide Used Vehicle Exporter of Quality Japanese Cars at Affordable Prices.'}></BannerSection>
          <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle mr-5 text-3xl animate-pulse">❮</a>
            <a href="#slide1" className="btn btn-circle text-3xl animate-pulse">❯</a>
          </div>
          <h2 className="absolute z-10 text-8xl opacity-100 right-8 top-10 text-fuchsia-600 font-extrabold text-center">25% OFF</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;