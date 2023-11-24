
import Banner from '../Component/HomeElement/Banner';
import { Helmet } from 'react-helmet-async';
import FeaturedProduct from '../Component/HomeElement/FeaturedProduct';



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>TechBD || Home</title>
            </Helmet>
           <Banner></Banner>
           <FeaturedProduct></FeaturedProduct>
          
        </div>
    );
};

export default Home;