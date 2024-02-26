import React, { useContext } from "react";
import Layout from "../../componant/layout/Layout";
import MyContext from "../../context/data/myContext";
import Filter from "../../componant/filter/Filter";
import Productcard from "../../componant/productcard/Productcard";
import Track from "../../componant/track/Track";
import Sliders from "../../componant/tesimonial/Sliders";
import SliderHero from "../../componant/herosection/SliderHero";
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'

function Home() {

  const dispatch = useDispatch();
  const cartItem = useSelector((state)=> state.cart)

  console.log(cartItem)

  const addCart = () => {
    dispatch(addToCart("shirt"));
  }

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  }
  const context = useContext(MyContext);

  return (
    <Layout>
    
      <SliderHero />
     
      <Filter />
      <Productcard />
      <Track />
      <Sliders />
    </Layout>
  );
}

export default Home;
