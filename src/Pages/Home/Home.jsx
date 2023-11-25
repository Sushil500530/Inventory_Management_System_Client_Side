import Footer from "../Footer/Footer";
import Marque from "./Marque/Marque";
import Banner from "./Banner/Banner";
// import Swiper styles
import 'swiper/css';
import ShopCollection from "./Shop/ShopCollection";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Inventory Management</title>
            </Helmet>
            <Banner />
            <Marque />
            <ShopCollection />
            <Footer />
        </div>
    );
};

export default Home;