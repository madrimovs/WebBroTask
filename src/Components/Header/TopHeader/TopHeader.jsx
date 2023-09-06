import React from "react";

import locationIcon from "../../../Assets/location-icon.png";
import flagUz from "../../../Assets/flagUz.png";

const TopHeader = () => {
	return (
		<div className="bg-zinc-100 w-full container py-1 flex justify-between items-center px-28">
			<div className="flex text-xs gap-2 text-zinc-700 items-center">
				<div className="flex items-center gap-1">
					<img className="w-3 h-3" src={locationIcon} alt="" />
					<p className="cursor-pointer">Shahar: </p>
				</div>
				<p className="mr-3 font-medium cursor-pointer underline">Toshkent</p>
				<p className="font-medium cursor-pointer">Topshirish punkitlari</p>
			</div>

			<div className="text-xs text-zinc-500 cursor-default">
				<p>Buyurtmangizni 1 kunda bepul yetkazib beramiz!</p>
			</div>

			<div className="flex text-xs gap-3 text-zinc-500 font-medium">
				<p className="cursor-pointer hover:text-black">Savol-javoblar</p>
				<p className="cursor-pointer hover:text-black">Buyurtmalarim</p>

				<div className="flex items-center">
					<img className="w-4 " src={flagUz} alt="" />
					<p className="cursor-pointer hover:text-black">O'zbekcha</p>
				</div>
			</div>
		</div>
	);
};

export default TopHeader;
