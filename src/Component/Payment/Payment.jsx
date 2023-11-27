import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckOut from './CheckOut';

const stripePromise = loadStripe('pk_test_51OH44qCqMbdVgeG350dhjCuumD2cgORKsZ3dQaVZtaya1p5FidiItSe87ArUhL27RGpQ22laki1qwZAHAG2t49UQ004ly57tDQ');

const Payment = () => {
    return (
        <div>
            <div>
                First Pay
            </div>

            <div>
                <Elements stripe={stripePromise}>
                   <CheckOut></CheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;