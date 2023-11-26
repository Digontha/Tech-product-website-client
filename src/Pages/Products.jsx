import React from 'react';
import useAllProduct from '../Hooks/useAllProduct';
import Banner from '../Component/HomeElement/Banner';
import AllProductCard from '../Component/AllProduct/AllProductCard';

const Products = () => {
    const [AllProduct] = useAllProduct()
   
    return (
        <>
            <Banner></Banner>

            <h1 className="text-3xl text-orange-400 font-medium text-center rounded-3xl border-2 border-orange-400  ">All Product</h1>

            {
            AllProduct ?
             <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 my-10'>
                {
                    AllProduct.map(product => <AllProductCard key={product._id} product={product}></AllProductCard>)
                }
            </div>
                :
                <div><span className="loading loading-bars loading-lg"></span></div>
            }

        </>
    );
};

export default Products;