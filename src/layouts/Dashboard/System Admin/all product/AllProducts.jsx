import { Helmet } from "react-helmet-async";
import ProductShop from "../manage shop/ProductShop";

const AllProducts = () => {
    return (
        <div className="w-[90%] mx-auto dark:text-white">
              <Helmet>
                <title>All Product | Admin Home</title>
            </Helmet>
               <ProductShop />
        </div>
    );
};

export default AllProducts;