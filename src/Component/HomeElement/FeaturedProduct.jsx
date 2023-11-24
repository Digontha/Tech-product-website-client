import useFeatured from "../../Hooks/useFeatured";

const FeaturedProduct = () => {

    const [featuredProduct]=useFeatured();
    console.log(featuredProduct);

    return (
        <div>

        </div>
    );
};

export default FeaturedProduct;