import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { addBasket, removeBasket } from "../../Redux/slicers/basketSlicer";
import { add, remove } from "../../Redux/slicers/likeSlicer";

import { BASE_URL } from "../../API/BASE_URL";

import rightVector from "../../Assets/right.png";
import likeIcon from "../../Assets/like.png";
import basketIcon from "../../Assets/basket.png";

import PromotionLoading from "../../Components/Loading/PromotionLoading/PromotionLoading";


const PromotionWeek = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const [limitProduct, setLimitProduct] = useState(11);

	const { like } = useSelector((state) => state.like);
	const { basket } = useSelector((state) => state.basket);
	const dispatch = useDispatch();

	const likeHandler = (product) => {
		let hasProduct = false;

		like.forEach((element) => {
			if (element.id === product.id) {
				hasProduct = true;
			}
		});

		if (!hasProduct) {
			dispatch(add(product));
		} else {
			dispatch(remove(product));
		}
	};

	const basketHandler = (product) => {
		let hasProduct = false;

		basket.forEach((element) => {
			if (element.id === product.id) {
				hasProduct = true;
			}
		});

		if (!hasProduct) {
			dispatch(addBasket(product));
		} else {
			dispatch(removeBasket(product));
		}
	};

	useEffect(() => {
		fetch(BASE_URL + "products/")
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsLoading(false);
			});
	}, []);

	return (
		<div className="px-28 mt-10">
			<div className="flex items-center mb-4 cursor-pointer">
				<h1 className="font-medium text-xl ">Hafta aksiyalari</h1>
				<img className="w-3 mt-1 ml-5" src={rightVector} alt="" />
			</div>

			{isLoading ? (
				<PromotionLoading />
			) : (
				<div className="flex justify-between flex-row flex-wrap  ">
					{data.slice(1, limitProduct).map((element) => (
						<div
							key={element.id}
							className="mb-10 hover:drop-shadow-md w-48 h-96 ease-in-out duration-300 cursor-pointer bg-white rounded-lg relative"
						>
							<div>
								<Link to={"/single/" + element.id}>
									<img className="rounded w-48 h-60 p-0" src={element.images} alt="img" />
								</Link>
								<img
									onClick={() => likeHandler(element)}
									className="w-4 absolute right-3 top-3 hover:w-5 ease-in-out duration-200"
									src={likeIcon}
									alt=""
								/>
							</div>

							<div className="w-50 p-3">
								<p className="text-xs font-medium">{element.title}</p>
								<div className="flex items-center justify-between">
									<Link to={"/single/" + element.id}>
										<div>
											<p className="text-xs rounded-lg mt-1">{element.description}</p>
											<p className="text-xs  mt-2">{element.price} 000 so'm</p>
										</div>
									</Link>
									<img
										onClick={() => basketHandler(element)}
										className="w-4 absolute right-3 bottom-3 hover:w-5 ease-in-out duration-200"
										src={basketIcon}
										alt=""
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
			<button
				onClick={() => setLimitProduct(limitProduct + 5)}
				className="bg-zinc-100 border border-zinc-200 hover:bg-zinc-50 py-2 rounded-lg w-96 text-zinc-700  mx-auto block font-medium"
			>
				Show again 5 product
			</button>
		</div>
	);
};

export default PromotionWeek;
