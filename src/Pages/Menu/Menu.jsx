import { Helmet } from 'react-helmet-async';
import Cover from '../Home/Home/Shared/Cover/Cover';
import menuimg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../Componnts/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
const Menu = () => {
    const [menu]=useMenu();
    const desserts=menu.filter(item=> item.category === 'dessert')
    const soup=menu.filter(item=> item.category === 'soup')
     const salad=menu.filter(item=> item.category === 'salad')
     const pizza=menu.filter(item=> item.category === 'pizza')
     const offered=menu.filter(item=> item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>

            </Helmet  >
            <Cover img={menuimg} title='our menu'></Cover>
            {/* main cover */}
            <SectionTitle subHeading={"don't miss"} heading={"Today's Offer"}></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered} ></MenuCategory>
            {/* dessert menu item */}
            <MenuCategory items={desserts} title={"dessert"} img={dessertImg}></MenuCategory>
            {/* pizza */}
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
            {/* salad */}
            <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
            {/* soup */}

            <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
            
          
        </div>
    );
};

export default Menu;