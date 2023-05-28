import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularManu from "../PopularManu/PopularManu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet  >
           <Banner></Banner>
           <Category></Category>
           {/* ai jaygay akta section hobe,, figma dekhe korte hobe */}
           <PopularManu></PopularManu>
           {/* ai jaygay o ashbe  */}
           <Featured></Featured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;