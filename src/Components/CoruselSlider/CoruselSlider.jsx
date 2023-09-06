import { Navigation, Pagination, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useState } from "react";
import AdvertisingLoading from "../Loading/AdvertisingLoading/AdvertisingLoading";

export default () => {
    const [isLoading, setIsLoading] = useState(true);

    //hasFetch !
    setTimeout(() => {
        setIsLoading(false);
    }, 1000);

    return (
        <div className="px-28 mt-5 cursor-pointer">
            {isLoading ? (
                <AdvertisingLoading />
            ) : (
                <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2000 }}
                >
                    <SwiperSlide>
                        <img
                            className="w-full h-80 rounded-md"
                            src="	https://images.uzum.uz/cg5ftsvhj8j9g699ho4g/main_page_banner.jpg"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="w-full h-80 rounded-md"
                            src=" https://images.uzum.uz/cg9a5nfg49devoaaom6g/main_page_banner.jpg"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="w-full h-80 rounded-md"
                            src="	https://images.uzum.uz/cg9a74vhj8j9g69a2rdg/main_page_banner.jpg"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="w-full h-80 rounded-md"
                            src="	https://images.uzum.uz/cg9a8kfhj8j9g69a2ro0/main_page_banner.jpg"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="w-full h-80 rounded-md"
                            src="	https://images.uzum.uz/cg7c9sng49devoaaf0vg/main_page_banner.jpg"
                            alt=""
                        />
                    </SwiperSlide>
                </Swiper>
            )}
        </div>
    );
};
