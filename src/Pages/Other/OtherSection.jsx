import useAllProduct from "../../Hooks/useAllProduct";
import Loading from "../../components/Shared/Loading";
import Collection from "../Home/Shop/Collection";
import notFound from '../../assets/image/wired-outline-262-emoji-wow.gif'
const OtherSection = () => {
    const [allProducts, , isLoading] = useAllProduct();
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="my-12">
            <h2 className="text-4xl font-bold text-center my-12 dark:text-white">Other Advance Brand <span className="text-fuchsia-500">Car</span>..!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    allProducts?.length > 0 ? allProducts?.slice(10, 18)?.map(product => <Collection
                        key={product?._id}
                        product={product}
                    />) :
                        <>
                            <div className="flex flex-col items-center justify-center">
                                <img src={notFound} alt="" className="bg-white text-white w-20 h-20 rounded-xl" />
                                <h2 className="text-2xl font-bold text-center dark:text-white">Data Not Found!</h2>
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default OtherSection;