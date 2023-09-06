import React from "react";
import Footer from "../Footer/Footer";
import CategoryBar from "../Header/CategoryBar/CategoryBar";
import Header from "../Header/Header";
import TopHeader from "../Header/TopHeader/TopHeader";

const Layout = ({ children }) => {
	return (
		<>
			<TopHeader />
			<Header />
			<CategoryBar />

			{children}

			<Footer />
		</>
	);
};

export default Layout;
