import React from "react";
import Advertising from "../../Components/Advertising/Advertising";
import Layout from "../../Components/Layout/Layout";

import advertising from "../../Assets/advertising.jpg";
import advertising_2 from "../../Assets/advertising_2.jpg";
import advertising_3 from "../../Assets/advertising_3.jpg";
import Categories from "../../Components/Categories/Categories";
import CoruselSlider from "../../Components/CoruselSlider/CoruselSlider";
import PromotionWeek from "../../Components/PromotionWeek/PromotionWeek";

const Home = () => {
    return (
        <Layout>
            <CoruselSlider />
            <PromotionWeek />
            <Categories categoryName={"groceries"} />
            <Advertising image={advertising} />
            <Categories categoryName={"smartphones"} />
            <Categories categoryName={"laptops"} />
            <Advertising image={advertising_2} />
            <Categories categoryName={"skincare"} />
            <Categories categoryName={"home-decoration"} />
            <Advertising image={advertising_3} />

            <PromotionWeek />
        </Layout>
    );
};

export default Home;
