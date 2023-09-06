import React from "react";

import appStoreIcon from "../../Assets/appStore.png";
import googlePlayIcon from "../../Assets/googlePlay.png";
import instaIcon from "../../Assets/instagram.png";
import telegramIcon from "../../Assets/telegram.png";
import youtubeIcon from "../../Assets/youtube.png";
import facebookIcon from "../../Assets/facebook.png";

const Footer = () => {
	return (
		<div className="px-28 mt-20">
			<div className="flex justify-between">
				<div>
					<p className="text-xs cursor-default font-medium">Biz haqimizda</p>
					<p className="text-xs cursor-pointer my-3">Topshirish punktlari</p>
					<p className="text-xs cursor-pointer">Vakansiyalar</p>
				</div>
				<div>
					<p className="text-xs cursor-default font-medium">Foydalanuvchilarga</p>
					<p className="text-xs cursor-pointer my-3">Biz bilan bog'lanish</p>
					<p className="text-xs cursor-pointer">Savol-javob</p>
				</div>
				<div>
					<p className="text-xs cursor-default font-medium">Tadbirkorlarga</p>
					<p className="text-xs cursor-pointer my-3">Uzumda soting</p>
					<p className="text-xs cursor-pointer">Sotuvchi kabinetiga kirish</p>
				</div>
				<div>
					<p className="text-xs cursor-default font-medium">Ilovani yuklab olish</p>
					<div className="flex items-center gap-2">
						<img className="w-20 cursor-pointer" src={appStoreIcon} alt="" />
						<img className="w-20 cursor-pointer mt-1" src={googlePlayIcon} alt="" />
					</div>

					<p className="text-xs cursor-default font-medium mt-7">Uzum ijtimoiy tarmoqlarda</p>
					<div className="flex justify-between mt-4">
						<img className="w-7 cursor-pointer" src={instaIcon} alt="" />
						<img className="w-7 cursor-pointer" src={telegramIcon} alt="" />
						<img className="w-7 cursor-pointer" src={youtubeIcon} alt="" />
						<img className="w-7 cursor-pointer" src={facebookIcon} alt="" />
					</div>
				</div>
			</div>
			<hr className="mt-5" />
			<div className="flex justify-between items-center py-2">
				<div className="flex gap-2 text-xs font-medium">
					<p className="cursor-pointer">Maxfiylik kelishuvi</p>
					<p className="cursor-pointer">Foydalanuvchi kelishuvi</p>
				</div>
				<p className="text-xs cursor-default">
					«2023© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»
				</p>
			</div>
		</div>
	);
};

export default Footer;
