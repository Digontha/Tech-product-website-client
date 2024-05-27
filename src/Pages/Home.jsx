
import Banner from '../Component/HomeElement/Banner';
import { Helmet } from 'react-helmet-async';
import FeaturedProduct from '../Component/HomeElement/FeaturedProduct';
import TrandingProduct from '../Component/HomeElement/TrandingProduct';
import AboutUs from '../Component/HomeElement/AboutUs';




const Home = () => {
    return (
        <div>
            <Helmet>
                <title>TechBD || Home</title>
            </Helmet>
           <Banner></Banner>
           <AboutUs></AboutUs>
           <FeaturedProduct></FeaturedProduct>
           <TrandingProduct></TrandingProduct>
          
        </div>
    );
};

export default Home;