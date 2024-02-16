import React, { useContext } from "react";
import Layout from "../../componant/layout/Layout";
import MyContext from "../../context/data/myContext";
import Herosection from "../../componant/herosection/Herosection";
import Filter from "../../componant/filter/Filter";
import Productcard from "../../componant/productcard/Productcard";
import Testimonial from "../../componant/tesimonial/Testimonial";
import Track from "../../componant/track/Track";

function Home() {
  const context = useContext(MyContext);
 
  return (
    <Layout>
      <Herosection />
      <Filter />
      <Productcard />
    <Track />
      <Testimonial />
    </Layout>
  );
}

export default Home;
