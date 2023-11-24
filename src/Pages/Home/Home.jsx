import Footer from "../Footer/Footer";
import Marque from "./Marque/Marque";
import Banner from "./Banner/Banner";
// import Swiper styles
import 'swiper/css';

const Home = () => {
    return (
        <div>
            <Banner />
            <Marque />
            <Footer />
        </div>
    );
};

export default Home;