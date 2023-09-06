import React, { useState } from "react";
import AdvertisingLoading from "../Loading/AdvertisingLoading/AdvertisingLoading";

const Advertising = ({ image }) => {
	const [isLoading, setIsLoading] = useState(true);

	setTimeout(() => {
		setIsLoading(false);
	}, 2000);

	return (
		<div className="px-28 my-5">
			{isLoading ? (
				<AdvertisingLoading />
			) : (
				<img className="w-full h-96 rounded-lg cursor-pointer" src={image} alt="" />
			)}
		</div>
	);
};

export default Advertising;
