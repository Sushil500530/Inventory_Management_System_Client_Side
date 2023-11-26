import useAllProduct from '../../../Hooks/useAllProduct';
import image from '../../../assets/image/banner/1cf32d0c7f6a19ef652cc468f576ae25.jpg'
import Loading from '../../../components/Shared/Loading';
import Collection from './Collection';
const ShopCollection = () => {
    const [allProducts, , isLoading] = useAllProduct();
    console.log(allProducts);
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
           {
            allProducts?.map(product => <Collection key={product?._id} product={product} /> )
           }
        </div>
    );
};

export default ShopCollection;