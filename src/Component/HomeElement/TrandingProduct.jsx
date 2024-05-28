
import useTranding from '../../Hooks/useTranding';
import TrandingCard from './TrandingCard';
import Loader from '../Loader/Loader';
import Container from "../../Component/UI/Container"
import "./Css/fea.css"
const TrandingProduct = () => {

    const [trandingProduct, , isPending] = useTranding()
    console.log(trandingProduct);


    return (
        <>
            <section className='bg-white lg:my-40'>
                <Container>
                    <h1 className="heading font-poppins">Tranding Product</h1>
                </Container>


                {isPending ? <Loader></Loader> :
                    <Container>
                        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 my-10 font-poppins'>
                            {
                                trandingProduct?.map(products => <TrandingCard key={products?._id} product={products}></TrandingCard>)
                            }
                        </div>
                    </Container>
                }
            </section>
        </>
    );
};

export default TrandingProduct;