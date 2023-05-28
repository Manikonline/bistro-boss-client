import orderCoverImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Home/Home/Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from "react";
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import {useParams} from 'react-router-dom'

import OrderTab from './OrderTab/OrderTab';
import { Helmet } from 'react-helmet-async';
const Order = () => {
    const categories=['salad', 'pizza', 'soup','dessert', 'drinks']
    const {category}=useParams()
    const initialIndex= categories.indexOf(category)
    const [tabindex, setTabindex]= useState(initialIndex);
    const [menu]=useMenu();
    
    const desserts=menu.filter(item=> item.category === 'dessert')
    const soup=menu.filter(item=> item.category === 'soup')
     const salad=menu.filter(item=> item.category === 'salad')
     const pizza=menu.filter(item=> item.category === 'pizza')
     const drinks=menu.filter(item=> item.category === 'drinks')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order food</title>

            </Helmet  >
            <Cover img={orderCoverImg} title={"Order Food"}></Cover>
            <Tabs defaultIndex={tabindex} onSelect={(index) =>setTabindex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                 <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Order;
