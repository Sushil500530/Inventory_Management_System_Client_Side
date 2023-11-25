import { IoBagAddSharp } from "react-icons/io5";
import Button from "../../../components/Shared/Button/Button";
import { Link } from "react-router-dom";

const ProductManager = () => {

    return (
        <div>
            <div className="flex pl-5 items-center justify-between gap-4 flex-col md:flex-row lg:flex-row h-12 md:border md:border-black lg:border lg:border-black my-8">
                <div>
                    <h2 className="text-2xl font-semibold text-stert">Total Product Added</h2>
                </div>
                <span>
                    <Link to='/dashboard/product-add' className="mb-[18px]">
                        <Button style={'border-black'} title={'Added Product'}
                            icon={IoBagAddSharp}
                        ></Button>
                    </Link>
                </span>
            </div>
            <h2 className="text-3xl font-bold text-center">My Product</h2>
        </div>
    );
};

export default ProductManager;