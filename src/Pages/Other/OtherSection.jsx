import useAllProduct from "../../Hooks/useAllProduct";
import Collection from "../Home/Shop/Collection";

const OtherSection = () => {
    const [allProducts, ,isLoading] = useAllProduct();
    console.log(allProducts.slice(10,18));
    return (
        <div className="my-12">
            <h2 className="text-4xl font-bold text-center my-12">Other Advance Brand <span className="text-fuchsia-500">Car</span>..!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    allProducts?.slice(10,18)?.map(product => <Collection
                        key={product?._id}
                        product={product}
                        />)
                }
            </div>
        </div>
    );
};

export default OtherSection;