import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (

        <Carousel className='text-center '>

            <div>
                <img src="https://img.freepik.com/free-psd/horizontal-banner-template-techno-store_23-2148979527.jpg?w=1380&t=st=1700799731~exp=1700800331~hmac=398fb61b330c8ac949114aa7112561b6bc30922998cc872f2e1b53a8ed07ca1b" />

            </div>
            <div>
                <img src="https://img.freepik.com/free-psd/tech-future-banner-template-concept-template_23-2148427301.jpg?w=1380&t=st=1700799963~exp=1700800563~hmac=1e6515217306119f8feef2c45fe38ee863665e186dbdf4f1d6915859916bbfbc" />

            </div>
            <div>
                <img src="https://img.freepik.com/premium-psd/vr-event-banner-design-template_23-2149229530.jpg?w=1380" />

            </div>
            <div>
                <img src="https://img.freepik.com/free-vector/abstract-fluid-technology-youtube-thumbnail_23-2149077355.jpg?w=1380&t=st=1700799864~exp=1700800464~hmac=cc5baa2c35f4ff78e2e11f7bbbddf2586d03ca7bab92c333689a0c34c631d0eb" />

            </div>
            <div>
                <img src="https://img.freepik.com/free-psd/technology-landing-page-template-virtual-reality_23-2149513404.jpg?w=1380&t=st=1700799929~exp=1700800529~hmac=f29fe9fa371599e32003f30b76b6dc2f2a2c0c4f5555a988e07c2e157300dc72" />

            </div>

        </Carousel>

    );
};

export default Banner;