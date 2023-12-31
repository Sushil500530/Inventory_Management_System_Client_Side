import { Helmet } from "react-helmet-async";

const Checkout = () => {
    return (
        <div className="w-[90%] mx-auto dark:text-white">
              <Helmet>
                <title>Checkout | Inventory M</title>
            </Helmet>
             <h3 className="text-3xl text-center font-bold mt-12 mb-5 flex items-center justify-center gap-2">Checkout</h3>
        </div>
    );
};

export default Checkout;