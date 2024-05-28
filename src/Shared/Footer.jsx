import moment from 'moment/moment';
import "./Css/fot.css"

const Footer = () => {
    return (
        <div className=''>
            <footer className="footer bg text-black p-10 bg-neutral">

                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav className='flex items-center'>
                    <h1 className='text-5xl text-neutral-content'>TechBD</h1>
                    <img className='w-20 h-20 rounded-full ' src="https://wallpapercave.com/wp/wp2823499.png" alt="" />
                </nav>

            </footer>
            <footer className="footer bg footer-center p-4 ">
                <aside>
                    <p>Copyright © {moment().format('YYYY')} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;