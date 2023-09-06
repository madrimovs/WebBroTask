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
			<Categories categoryName={"Electronics"} />
			<Advertising image={advertising} />
			<Categories categoryName={"Shoes"} />
			<Categories categoryName={"Furniture"} />
			<Advertising image={advertising_2} />
			<Categories categoryName={"nuevo"} />
			<Categories categoryName={"Others"} />
			<Advertising image={advertising_3} />

			<PromotionWeek />
		</Layout>
	);
};

export default Home;
