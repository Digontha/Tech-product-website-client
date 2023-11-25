import React, { useState } from 'react';
import useTranding from '../../Hooks/useTranding';
import TrandingCard from './TrandingCard';

const TrandingProduct = () => {

    const [trandingProduct] = useTranding()
    console.log(trandingProduct);


    return (
        <>
         <div className="w-4/12 mx-auto ">
                            <h1 className="text-3xl text-orange-400 font-medium text-center rounded-3xl border-2 border-orange-400  ">Tranding Product</h1>
                        </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 my-10'>
                {
                    trandingProduct.map(products => <TrandingCard key={products._id} product={products}></TrandingCard>)
                }
            </div>
        </>
    );
};

export default TrandingProduct;