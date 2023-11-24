import Footer from "../Footer/Footer";
import Marque from "./Marque/Marque";
import Banner from "./Banner/Banner";
// import Swiper styles
import 'swiper/css';
import ShopCollection from "./Shop/ShopCollection";

const Home = () => {
    return (
        <div>
            <Banner />
            <Marque />
            <ShopCollection />
            <Footer />
        </div>
    );
};

export default Home;