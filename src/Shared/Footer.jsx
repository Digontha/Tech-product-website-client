import moment from 'moment/moment';
import "./Css/fot.css"
import logo from "../assets/images/tech-logo.png"
import Container from '../Component/UI/Container';

const Footer = () => {
    return (
        <div className='bg'>
            
                <Container>
                <footer className="footer  text-black p-10  font-poppins">
                    <nav>
                        <img className='w-20 h-20 rounded-full ' src={logo} alt="" />
                        <h1 className='text-3xl font-oswald font-medium'> Make Your Life Easy <br /> With <span className="text-[#83543D]">Tech BD</span> </h1>
                    </nav>
                    <nav>
                        <header className="footer-title">Services</header>
                        <a href='/products' className="link link-hover">Product</a>
                        <a href='/register' className="link link-hover">Join Now</a>
                        <a href='/login' className="link link-hover">shop</a>

                    </nav>
                    <nav>
                        <header className="footer-title">Get In Touch</header>
                        <a href='/contact' className="link link-hover">Contact</a>
                        <a href='/' className="link link-hover">Index</a>

                    </nav>
                    </footer>
                    <footer className="footer  footer-center p-4 ">
                <aside>
                    <p>Copyright © {moment().format('YYYY')} - All right reserved by Tech BD</p>
                </aside>
            </footer>
                </Container>



        
          
        </div>
    );
};

export default Footer;