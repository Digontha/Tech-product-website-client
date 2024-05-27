import useFeatured from "../../Hooks/useFeatured";
import FeatureCard from "./FeatureCard";
import Loader from "../Loader/Loader";
import Marquee from "react-fast-marquee";
import Container from "../UI/Container";
import "./Css/fea.css"


const FeaturedProduct = () => {

    const [featuredProduct, , isPending] = useFeatured();
    console.log(featuredProduct);

    return (
        <>
            {
                isPending ? <Loader></Loader>
                    :
                    <div className="font-poppins">
                       <Container>
                       <div className="">
                            <h1 className="heading text-3xl">Featured Product</h1>
                        </div>
                       </Container>


                        <Marquee>
                            {
                                featuredProduct?.map(product => <>
                                    <FeatureCard key={product?._id} product={product}></FeatureCard>
                                </>)
                            }
                        </Marquee>

                    </div>

            }



        </>
    );
};

export default FeaturedProduct;