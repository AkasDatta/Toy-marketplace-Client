import Banner from "../Banner/Banner";
import BeneFit from "../BeneFit/BeneFit";
import Gallery from "../Gallery/Gallery";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <BeneFit></BeneFit>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;