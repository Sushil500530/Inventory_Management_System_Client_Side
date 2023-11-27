/* eslint-disable react/prop-types */
import { FaTrashAlt } from "react-icons/fa";
const GuestRow = ({ product, index, handleDelete }) => {
    // console.log(Object.keys(product).join(","));
    const { _id, product_name, quantity, product_cost, image, discount, description, location, buyer_name, email } = product || {};
    const previousPrice = parseInt(product_cost);
    const discountPrice = parseInt(discount);
    const priceCount = (discountPrice / 100) * previousPrice;
    const currentPrice = previousPrice - priceCount;
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