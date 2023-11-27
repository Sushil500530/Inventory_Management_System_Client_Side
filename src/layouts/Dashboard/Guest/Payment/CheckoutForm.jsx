import { CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
    return (
        <div>
            <h2 className="text-center text-2xl font-bold"> Use <span className="text-fuchsia-500">Card</span></h2>
            <form className='my-2 ' onSubmit='{handleSubmit}'>
                <div className="border py-2">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146'
                            },
                        },
                    }}
                ></CardElement>
                </div>
                <div className='flex mt-2 justify-around'>
                    <button
                        type='button'
                        className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                        onClick='{closeModal}'
                    >
                        Cancel
                    </button>
                    <button
                        type='submit'
                        // disabled={!stripe || !clientSecret || processing}
                        className='inline-flex justify-center cursor-pointer rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                    >
                        pay
                        {/* {processing ? (
                            <ImSpinner9 className='m-auto animate-spin' size={24} />
                        ) : (
                            `Pay ${bookingInfo.price}$`
                        )} */}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;