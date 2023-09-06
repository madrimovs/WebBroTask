import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../Components/Layout/Layout";

import likeIcon from "../../Assets/like.png";
import basketIcon from "../../Assets/basket.png";
import { add, remove } from "../../Redux/slicers/likeSlicer";
import { Link } from "react-router-dom";
import { addBasket, removeBasket } from "../../Redux/slicers/basketSlicer";

const Liked = () => {
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

	return (
		<Layout>
			<div className="mt-10 px-28">
				<div className="flex items-center mb-4 cursor-pointer justify-between">
					<h1 className="font-medium text-xl ">Saralanganlar</h1>
					<button className="border border-violet-600 text-xs font-medium px-16 rounded-lg py-2">
						Ommabob
					</button>
				</div>
				<hr className="mb-5" />
				<div className="flex justify-start gap-3 flex-row flex-wrap  ">
					{like.map((element) => (
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
			</div>
		</Layout>
	);
};

export default Liked;
