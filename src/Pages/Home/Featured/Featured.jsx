import SectionTitle from "../../../Componnts/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <section className="featured-item text-white bg-fixed pt-8 my-20">
            <SectionTitle
               subHeading={'Check it out'}
               heading={'Featured Item'}
            ></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-50">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, possimus? Voluptatum laudantium eos modi? Facilis amet odio quo quasi est perferendis nisi placeat voluptas veniam, cupiditate debitis architecto. Perferendis doloribus</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 ">Order Now</button>
                </div>
            </div>
            
        </section>
    );
};

export default Featured;