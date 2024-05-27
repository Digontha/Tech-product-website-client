import Container from "../UI/Container";
import "./Css/ban.css"
import img from "../../assets/images/man-gad.png"

const Banner = () => {
    return (
        <div className="   banner-background "  >
            <Container>
                <div className=" flex font-poppins lg:flex-row flex-col pt-40 pb-20 gap-5 lg:gap-10  justify-center items-center animated-image">
                    <div className=" text-left lg:w-1/2">
                        <div className="space-y-5">
                            <h1 className="lg:text-[50px] text-3xl font-bold banner-h1-leading">Tech Essentials <span className="text-[#83543D]">Delivered</span> to Your Doorstep</h1>
                            <h6 className=" banner-h1-leading leading-8 text-base lg:text-xl  flex flex-col gap-2">From Pixels to Play Gadgets for Every Passion, Innovate Your Lifestyle Explore Our Gadgets!</h6>
                            <div className="flex gap-5">
                                <button className=" px-5 py-2 rounded border-none  shadow-[#094F84] text-white bg-gradient-to-r from-[#333333] to-[#83543D] flex gap-2"><span>Shop Now</span> <span>
                                </span></button>
                                <button className=" px-5 py-2 rounded   text-black btn btn-outline flex gap-2"><span>Explore Us</span> <span>
                                </span></button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center  rounded-2xl lg:w-1/2">
                        <img className="lg:w-[500px] lg:h-[800px] rounded-2xl " src={img} alt="" />
                    </div>
                </div>
            </Container>

        </div>

    );
};

export default Banner;