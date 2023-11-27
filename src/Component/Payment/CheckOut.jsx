import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { AuthContext } from '../../AuthProvider/AuthProvider';

import { useNavigate } from 'react-router-dom';

const CheckOut = () => {

    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext)
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const axiosPublic = useAxiosPublic()
    const totalPrice = 20
    const navigate = useNavigate()

    useEffect(() => {
        if (totalPrice > 0) {
            axiosPublic.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosPublic, totalPrice])

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }


        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email,
                    name: user?.displayName
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {

                axiosPublic.put(`/users?email=${user.email}`)
                    .then(res => {
                        console.log(res.data);
                        navigate(-1)

                    })

            }
        }
    };

    return (
        <div className='flex justify-center mt-20 mb-60 card w-96 mx-auto p-10 h-60 bg-neutral text-white'>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: 'white',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn text-white mt-4 btn-outline w-full ' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className="text-red-600">{error}</p>
            </form>
        </div>
    );
};

export default CheckOut;