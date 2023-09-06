import React from "react";

import uzumLogo from "../../Assets/logo.svg";
import catalogIcon from "../../Assets/catalog.png";
import userIcon from "../../Assets/user.png";
import likeIcon from "../../Assets/like.png";
import basketIcon from "../../Assets/basket.png";
import searchIcon from "../../Assets/search.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
	const { like } = useSelector((state) => state.like);
	const { basket } = useSelector((state) => state.basket);

	return (
		<div className="flex items-center justify-between px-28">
			<Link to={"/"}>
				<img className="py-4 mr-4 cursor-pointer" src={uzumLogo} alt="" />
			</Link>
			<div className="flex items-center">
				<div className="flex items-center bg-violet-100 hover:bg-violet-200 px-4 py-2 rounded-sm mr-2 cursor-pointer">
					<img className="w-4" src={catalogIcon} alt="" />
					<p className="ml-1 font-medium text-xs text-violet-700">Katalog</p>
				</div>
				<input
					className="border-solid border-2 border-zinc-200 rounded-sm w-96 pl-3 text-sm py-1"
					type="text"
					placeholder="Mahsulotlar va turkumlar izlash"
				/>
				<button className="bg-zinc-100 py-2 pl-3 pr-3">
					<img className="w-4" src={searchIcon} alt="" />
				</button>
			</div>

			<div className="flex items-center justify-between gap-2 text-xs">
				<Link to={"/login"}>
					<div className="flex items-center cursor-pointer hover:bg-zinc-200 px-2 py-1.5 rounded gap-1 font-medium">
						<img className="w-5" src={userIcon} alt="" />
						<p>Kirish</p>
					</div>
				</Link>

				<Link to="liked">
					<div className="flex items-center cursor-pointer hover:bg-zinc-200 px-2 py-2 rounded gap-1 font-medium">
						<img className="w-4 mt-0.5" src={likeIcon} alt="" />
						<p className=" text-violet-600">{like.length}</p>
						<p>Saralangan</p>
					</div>
				</Link>

				<Link to="/basket">
					<div className="flex items-center cursor-pointer hover:bg-zinc-200 px-2 py-2 rounded gap-1 font-medium">
						<img className="w-4" src={basketIcon} alt="" />
						<p className=" text-violet-600">{basket.length}</p>
						<p>Savat</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Header;
