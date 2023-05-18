import Banner from "../Banner/Banner";
import BeneFit from "../BeneFit/BeneFit";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <BeneFit></BeneFit>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;