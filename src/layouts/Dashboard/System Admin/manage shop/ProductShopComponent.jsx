/* eslint-disable react/prop-types */
import { FaTrashAlt } from "react-icons/fa";

const ProductShopComponent = ({ handleDelete,product }) => {
    const { product_name, product_cost, image, description, location } = product || {};
    return (
        <div className="card bg-base-100 shadow-xl pb-6">
            <figure className="w-full h-[250px]">
                <img src={image} alt="image" className="rounded-xl w-full h-full" />
            </figure>
            <div className="flex justify-between items-center mt-5 px-5">
                <h2 className="card-title">{product_name}</h2>
                <h2 className="card-title">$ {product_cost}</h2>
            </div>
            <div className=" px-3">
                <div>
                    <p>{description.slice(0, 40)}</p>
                    <p className="text-gray-600 text-[18px] font-bold">Location : <span className="text-black"> {location} </span></p>
                </div>
                <div className="card-actions mt-5 flex  justify-center items-center">
                    <button onClick={() => handleDelete(product)} className="btn hover:text-white bg-gradient-to-r from-purple-500 to-pink-500 px-20 text-[18px]">Delete <FaTrashAlt className="text-2xl ml-3" /></button>
                </div>
            </div>
        </div>
    );
};

export default ProductShopComponent;