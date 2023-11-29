import useFeatured from "../../Hooks/useFeatured";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import FeatureCard from "./FeatureCard";
import Loader from "../Loader/Loader";



const FeaturedProduct = () => {

    const [featuredProduct, , isPending] = useFeatured();
    console.log(featuredProduct);

    return (
        <>
            {
                isPending ? <Loader></Loader>
                    :
                    <div className="mt-10 ">
                        <div className="w-4/12 mx-auto ">
                            <h1 className="text-3xl text-orange-400 font-medium text-center rounded-3xl border-2 border-orange-400  ">Featured Product</h1>
                        </div>
                        <Swiper

                            slidesPerView={1}
                            spaceBetween={10}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >

                            {
                                featuredProduct?.map(product =>
                                    <SwiperSlide key={product?._id}>
                                        <FeatureCard product={product}></FeatureCard>
                                    </SwiperSlide>)
                            }


                        </Swiper>


                    </div>

            }
        </>
    );
};

export default FeaturedProduct;