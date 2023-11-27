// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { FaRegCreditCard } from "react-icons/fa";
import useSaleCollection from "../../../../Hooks/useSaleCollection";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [products, refetch, ,] = useSaleCollection();
    const axiosSecure = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const [showError, setShowError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const { user } = useAuth();
    const navigate = useNavigate();

    // console.log(products);

    const totalPrice = products?.reduce((total, currentItem) => total + parseInt(currentItem?.currentPrice), 0);
    // console.log(totalPrice);

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(response => {
                    console.log('client secrete--->', response?.data?.clientSecret);
                    setClientSecret(response?.data?.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice]);

    const handlePayment = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            setShowError(error?.message)
        }
        else {
            console.log('condition of payment method is --->', paymentMethod);
            setClientSecret('')
        }

        // confirm payment 
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        });
        if (confirmError) {
            console.log('confirm error is--->', confirmError);
        }
        else {
            if (paymentIntent?.status === 'succeeded') {
                console.log('payment intent id is ---->', paymentIntent?.id);
                setTransactionId(paymentIntent?.id);

                // payment details save to database 
                const paymentInfo = {
                    email: user?.email,
                    price: totalPrice,
                    transactionId: paymentIntent?.id,
                    date: new Date(),
                    saleIds: products?.map(item => item?._id),
                    menuItemIds: products?.map(item => item?.menuId),
                    status: 'Pending'
                }
                const response = await axiosSecure.post('/payments', paymentInfo);
                console.log('payment status --->', response?.data);
                if (response?.data?.insertedId) {
                    setShowError('')
                    Swal.fire({
                        title: "Payment Success!",
                        text: "Thenak you for Paymented!",
                        icon: "success",
                        timer: 1000,
                    });
                     return navigate('/dashboard/guest-home')
                }
            }
        }
    }




    return (
        <div>
            <h2 className="text-center text-2xl font-bold flex items-center justify-center gap-2"> Use <span className="text-fuchsia-500">Card</span> <FaRegCreditCard className="text-3xl ml-3" /></h2>
            <form onSubmit={handlePayment} className='my-2 '>
                <div className="border p-3 mx-12">
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
                {transactionId && <p className="text-green-500 mt-5 font-medium text-center">Your Transaction id is:  {transactionId}</p>}
                <p className="text-red-500 mt-5 font-medium text-center">{showError}</p>
                <div className='flex mt-2 justify-around'>
                    <button onClick={() => navigate(-1)} type='button' className='btn bg-pink-500 text-[18px] px-10 hover:text-red-500 my-5'>
                        Cancel
                    </button>
                    <button className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-xl px-10 hover:text-green-500 my-5" type="submit" >pay</button>
                </div>
            </form>




            {/* {processing ? (
                            <ImSpinner9 className='m-auto animate-spin' size={24} />
                        ) : (
                            `Pay ${bookingInfo.price}$`
                        )} */}
        </div>
    );
};

export default CheckoutForm;