import { useState } from 'react';
import useAllProduct from '../Hooks/useAllProduct';
import "../Component/HomeElement/Css/fea.css"
import AllProductCard from '../Component/AllProduct/AllProductCard';
import Loader from '../Component/Loader/Loader';
import { useLoaderData } from 'react-router-dom';
import BannerPro from '../Component/HomeElement/BannerPro';
import Container from '../Component/UI/Container';



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
            <BannerPro></BannerPro>
            <Container>
                <div className=' my-7 items-center gap-3' >
                    <form onSubmit={handleSearch} className='flex gap-2 w-[30%]'>
                        <input
                            type="text" placeholder="Search with tags"
                            name='tag'
                            className="input border-2 appearance-none focus:outline-none focus:border-[#333333] border-non outline-none border-[#333333] input-bordered lg:w-full  " />
                        <div className=''>
                            <input className='rounded border-none btn  shadow-[#094F84] text-white bg-gradient-to-r  from-[#333333] to-[#83543D] flex gap-2' type="submit" value="search" />
                        </div>
                    </form>
                </div>
                <h1 className="heading">All Product:{AllProduct?.length}</h1>

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
            </Container>


        </>
    );
};

export default Products;