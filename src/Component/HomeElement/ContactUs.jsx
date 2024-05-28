import { Link } from "react-router-dom";


const ContactUs = () => {
    return (
        <>
            <section className="bg-[#473234] py-10  text-center mb-10 rounded-lg">
                <div>
                    <h1 className="text-white lg:text-3xl text-sm font-oswald">We'd love to hear from you! Whether you have a question about our services, pricing, need a demo,<br /> or anything else, our team is ready to answer all your questions.</h1>
                </div>
                <div>
                    <Link to="/contact">
                        <button className="btn bg-gradient-to-r from-[#F3EFEC] to-[#D6E2FF] mt-4">Contact With Us</button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default ContactUs;