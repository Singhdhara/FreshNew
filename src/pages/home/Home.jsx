import React, { useContext } from "react";
import Layout from "../../componant/layout/Layout";
import MyContext from "../../context/data/myContext";
import Herosection from "../../componant/herosection/Herosection";
import Filter from "../../componant/filter/Filter";
import Productcard from "../../componant/productcard/Productcard";
import Track from "../../componant/track/Track";
import ImageproductSlider from "../../componant/herosection/ImageproductSlider";
import Sliders from "../../componant/tesimonial/Sliders";

function Home() {
  const context = useContext(MyContext);

  return (
    <Layout>
      <ImageproductSlider />
      <Herosection />
      <Filter />
      <Productcard />
      <Track />
      <Sliders />
    </Layout>
  );
}

export default Home;
