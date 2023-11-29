
import { useEffect } from 'react';
import Collection from './Collection';
import { useState } from 'react';
import Loading from '../../../components/Shared/Loading';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const ShopCollection = () => {
    const [products, setProducts] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(7)
    const [currentPage, setCurrentPage] = useState(0);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5000/products-count')
            .then(res => res.json())
            .then(data => setCount(data.count))
    }, [])
console.log('count data is --->',count);
    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/all-products?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setProducts(data))
        setLoading(false)
    }, [currentPage, itemsPerPage]);
    console.log('product data is --->',products);
    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];



    const handleItemsPerPageChange = e => {
        const valu = parseInt(e.target.value)
        setItemsPerPage(valu);
        setCurrentPage(0);
    }
    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }


    return (
        <div>
            {/* pagination  */}
            <h2 className="text-center text-4xl font-bold mt-12">All <span className='text-fuchsia-500'>Categories</span> Shop Products Here🛒</h2>
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
                {
                    products?.length > 0 ? products?.map(product => <Collection key={product?._id} product={product} />) :
                    <Loading />
                }
            </div>
            <div className='pagination text-[18px] font-bold lg:w-1/2 md:w-1/2 w-full mx-auto text-center flex flex-col items-center gap-5'>
                <p>current page {currentPage}</p>
                <div className='space-x-8'>
                    <button onClick={handlePrevPage} className='mr-5 btn bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white text-[18px] font-medium'>Previous</button>
                    {
                        pages.map(page => <button className={currentPage === page ? 'px-[15px] py-2 mx-5 focus:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white rounded-full text-center' : undefined}
                            onClick={() => setCurrentPage(page)}
                            key={page}
                        >{page}</button>)
                    }
                    <button className='btn bg-gradient-to-r from-purple-500 to-pink-500 text-[18px] hover:text-white font-medium' onClick={handleNextPage}>Next</button>
                    <select value={itemsPerPage} onChange={handleItemsPerPageChange} name='' className='border p-3' id=''>
                        <option value='4'>4</option>
                        <option value='8'>8</option>
                        <option value='12'>12</option>
                        <option value='16'>16</option>
                        <option value='20'>20</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ShopCollection;