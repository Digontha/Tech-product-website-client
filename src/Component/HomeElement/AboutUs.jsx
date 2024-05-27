import Container from "../../Component/UI/Container"
import game from "../../assets/images/game1.png"
import "./Css/about.css"
import { MdBrightnessLow } from "react-icons/md";
const AboutUs = () => {
    return (
        <>
            <Container>
                <section className="font-poppins">
                    <div className="flex lg:flex-row flex-col-reverse items-center gap-5 p-5 py-20">
                        <div className="w-full h-fit mb-32 sm:mb-40 md:mb-52 lg:mb-0 ">
                            <img src={game} alt="" />
                        </div>
                        <div>
                            <h1 className="heading text-xl font-semibold">
                                About Us
                            </h1>
                            <h1 className="text-black text-4xl mt-2 font-bold">
                                Welcome to <span className="text-[#83543D]">Tech BD</span>
                            </h1>
                            <h1 className="text-[#716F6F] text-base mt-3 font-medium w-[90%]">
                                Our mission is simple to provide our customers with high-quality, reliable, and state-of-the-art gadgets that cater to their diverse needs. Whether you're a tech enthusiast, a professional seeking productivity tools, or someone looking for the perfect gift, we have something for everyone.
                            </h1>

                            <div className="space-y-5 mt-5">
                                <div className="">
                                    <div className="flex justify-start gap-1 items-center">
                                        <div>
                                            <MdBrightnessLow />
                                        </div>
                                        <h1 className="text-black font-semibold">Cutting-Edge Innovation</h1>
                                    </div>
                                    <h1 className="text-black  font-normal">
                                        Experience the latest in technology with our range of state-of-the-art gadgets
                                    </h1>
                                </div>
                                <div className="">
                                    <div className="flex justify-start gap-1 items-center">
                                        <div>
                                            <MdBrightnessLow />
                                        </div>
                                        <h1 className="text-black font-semibold">   Quality Assurance</h1>
                                    </div>
                                    <h1 className="text-black  font-normal">

                                        At TechGadgetHub, quality is our top priority. Every product is carefully selected
                                    </h1>
                                </div>
                                <div className="">
                                    <div className="flex justify-start gap-1 items-center">
                                        <div>
                                            <MdBrightnessLow />
                                        </div>
                                        <h1 className="text-black font-semibold">Competitive Pricing</h1>
                                    </div>
                                    <h1 className="text-black  font-normal">

                                        We believe advanced technology should be accessible to everyone.
                                    </h1>
                                </div>
                                <div className="">
                                    <div className="flex justify-start gap-1 items-center">
                                        <div>
                                            <MdBrightnessLow />
                                        </div>
                                        <h1 className="text-black font-semibold">Exceptional Customer Service</h1>
                                    </div>
                                    <h1 className="text-black  font-normal">

                                        Our customers are at the heart of everything we do.
                                    </h1>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    );
};

export default AboutUs;