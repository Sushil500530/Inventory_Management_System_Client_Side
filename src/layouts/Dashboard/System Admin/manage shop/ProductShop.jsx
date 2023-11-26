import useAllProduct from "../../../../Hooks/useAllProduct";
import Loading from "../../../../components/Shared/Loading";
import ProductShopComponent from "./ProductShopComponent";


const ProductShop = () => {
    const [allProducts, , isLoading] = useAllProduct();
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h3 className="text-3xl text-center font-bold  flex items-center justify-center gap-2 my-12">All Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
               {
                allProducts?.map(product => <ProductShopComponent key={product._id} product={product} />)
               }
            </div>
        </div>
    );
};

export default ProductShop;