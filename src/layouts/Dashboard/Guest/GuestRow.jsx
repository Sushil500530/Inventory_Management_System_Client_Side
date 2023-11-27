/* eslint-disable react/prop-types */
import { FaTrashAlt } from "react-icons/fa";
const GuestRow = ({ product, index, handleDelete }) => {
    // console.log(Object.keys(product).join(","));
    const {  product_name, product_cost, image, currentPrice } = product || {};
    // console.log();
    console.log(currentPrice);

    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <th>
                    <div className="">
                        <div className="w-20 h-20 rounded-md">
                            <img src={image} alt="image" className="w-full h-full rounded-md" />
                        </div>
                    </div>
                </th>
                <td>{product_name}</td>
                <td>$ {product_cost}</td>
                <td>$ {currentPrice}</td>
                <td>
                    <button onClick={() => handleDelete(product?._id)} className="btn bg-red-500 text-2xl text-white hover:text-black"><FaTrashAlt></FaTrashAlt></button>
                </td>
            </tr>
        </>
    );
};

export default GuestRow;