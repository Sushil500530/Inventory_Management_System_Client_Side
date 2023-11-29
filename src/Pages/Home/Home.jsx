import Footer from "../Footer/Footer";
import Marque from "./Marque/Marque";
import Banner from "./Banner/Banner";
import ShopCollection from "./Shop/ShopCollection";
import { Helmet } from "react-helmet-async";
import Contribute from "./Services/Contribute";
import ContactMe from "./Services/ContactMe";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Inventory Management </title>
            </Helmet>
            <Banner />
            <Marque />
            <ShopCollection />
            <Contribute />
            <ContactMe />
            <Footer />
        </div>
    );
};

export default Home;