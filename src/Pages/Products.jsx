import React, { useState } from 'react';
import useAllProduct from '../Hooks/useAllProduct';
import Banner from '../Component/HomeElement/Banner';
import AllProductCard from '../Component/AllProduct/AllProductCard';
import Loader from '../Component/Loader/Loader';
import { useLoaderData } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Products = () => {
    const countData = useLoaderData()
    console.log(countData);

    const itemsPerPage = 20
    const [currentPage, setCurrentPage] = useState(0)

    const Count = countData.count
    console.log(Count);

    const numberOfPages = Math.ceil(Count / itemsPerPage)


    const pages = [...Array(numberOfPages).keys()]
    const [searchTag, setSearchTag] = useState('');
    console.log(searchTag);

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }
    const [AllProduct, , isPending] = useAllProduct(currentPage, itemsPerPage, searchTag)

    const handleSearch = (event) => {
        event.preventDefault()
        setSearchTag(event.target.tag.value);
        setCurrentPage(0);
    };

    return (
        <>
            <Banner></Banner>
            <div className='flex justify-center my-7 items-center gap-3' >
                <form onSubmit={handleSearch}>
                    <input
                        type="text" placeholder="Search with tags"
                        name='tag'
                        className="input border-4 border-orange-400 input-bordered lg:w-full  " />
                    <div className=' flex justify-center mt-2 '>
                        <input className='btn btn-neutral btn-outline' type="submit" value="search" />
                    </div>
                </form>
            </div>
            <h1 className="text-3xl text-orange-400 font-medium text-center rounded-3xl border-2 border-orange-400  ">All Product:{AllProduct?.length}</h1>

            {
                isPending ?
                    <Loader></Loader>
                    :
                    <div>
                        {AllProduct?.length > 0 ? <div>

                            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 my-10'>

                                {
                                    AllProduct?.map(product => <AllProductCard key={product?._id} product={product}></AllProductCard>)

                                }

                            </div>
                            <div className='flex justify-center py-10 gap-4'>
                                <button onClick={handlePrev} className='btn btn-neutral btn-sm'>Prev</button>
                                {
                                    pages?.map(page => <button onClick={() => setCurrentPage(page)}
                                        className={currentPage === page ? 'btn btn-ghost  bg-yellow-100' : undefined}
                                        key={page}>{page}</button>)
                                }
                                <button onClick={handleNext} className='btn btn-neutral btn-sm'>Next</button>

                            </div>
                        </div>
                            :
                            <p className='text-5xl text-center my-6'>No data available for this tag</p>

                        }

                    </div>


            }


        </>
    );
};

export default Products;