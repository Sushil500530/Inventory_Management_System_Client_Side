import Swal from "sweetalert2";
import useAllProduct from "../../../../Hooks/useAllProduct";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Loading from "../../../../components/Shared/Loading";
import ProductShopComponent from "./ProductShopComponent";


const ProductShop = () => {
    const [allProducts,refetch,isLoading] = useAllProduct();
    const axiosSecure = useAxiosSecure();
    const handleDelete = (product) => {
        console.log(product);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure.delete(`/delete-product/${product?._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: `${product?.product_name}User has been deleted.`,
                                icon: "success",
                                timer: 1000
                            });
                        }
                    })
            }
        });
    }
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h3 className="text-3xl text-center font-bold  flex items-center justify-center gap-2 my-12">All Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
               {
                allProducts?.map(product => <ProductShopComponent 
                    key={product._id}
                    handleDelete={handleDelete}
                     product={product} />)
               }
            </div>
        </div>
    );
};

export default ProductShop;