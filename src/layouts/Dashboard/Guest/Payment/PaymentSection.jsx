import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const PaymentSection = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GET_AWAY_KEY)
    return (
        <div>
            <h2 className="text-center my-7 text-2xl font-bold"> Please <span className="text-fuchsia-500">Payment</span> Here🗳 </h2>
            <div>
            <Elements stripe={stripePromise} >
                <CheckoutForm />
               </Elements>
            </div>
        </div>
    );
};

export default PaymentSection;