import image from '../../../assets/image/banner/1cf32d0c7f6a19ef652cc468f576ae25.jpg'
const ShopCollection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
            <div className="card bg-base-100 shadow-xl">
                <figure className=' w-full h-[300px]'><img src={image} alt="Shoes" className='w-full h-full' /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <figure className=' w-full h-[300px]'><img src={image} alt="Shoes" className='w-full h-full' /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <figure className=' w-full h-[300px]'><img src={image} className='w-full h-full' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl"> 
                <figure className=' w-full h-[300px]'><img src={image} className='w-full h-full' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCollection;