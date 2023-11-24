import useFeatured from "../../Hooks/useFeatured";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import FeatureCard from "./FeatureCard";



const FeaturedProduct = () => {

    const [featuredProduct] = useFeatured();
    console.log(featuredProduct);

    return (
        <div className="mt-10">
<div>
    <h1 className="text-5xl text-center underline">Featured Product</h1>
</div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >

                {
                    featuredProduct.map(product =>
                        <SwiperSlide key={product._id}>
                         <FeatureCard product={product}></FeatureCard>
                        </SwiperSlide>)
                }


            </Swiper>


        </div>
    );
};

export default FeaturedProduct;