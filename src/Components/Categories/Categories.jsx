import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ElectronicsLoading from "../Loading/ElectronicsLoading/ElectronicsLoading";

import { BASE_URL } from "../../API/BASE_URL";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import basketIcon from "../../Assets/basket.png";
import likeIcon from "../../Assets/like.png";
import rightVector from "../../Assets/right.png";
import { Link } from "react-router-dom";
import { add, remove } from "../../Redux/slicers/likeSlicer";
import { addBasket, removeBasket } from "../../Redux/slicers/basketSlicer";

export default ({ categoryName }) => {
    const [data, setData] = useState([]);
    const [category, setCategory] = useState("");

    const [isLoading, setIsLoading] = useState(true);

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
                setCategory(categoryName);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
            });
    }, []);

    const categoryProducts = data.filter((product) => product.category.name === category);

    return (
        <div className="px-28 mt-5 ">
            <div className="flex items-center mb-4 cursor-pointer">
                <h1 className="font-medium text-xl ">{category}</h1>
                <img className="w-3 mt-1 ml-5" src={rightVector} alt="" />
            </div>
            {isLoading ? (
                <ElectronicsLoading />
            ) : (
                <Swiper
                    cssMode={true}
                    navigation={true}
                    // pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="flex gap-3 mx-auto">
                            {categoryProducts.slice(1, 6).map((element) => (
                                <div
                                    key={element.id}
                                    className="mb-10  hover:drop-shadow-md w-48 h-96 ease-in-out duration-300 cursor-pointer bg-white rounded-lg relative"
                                >
                                    <div>
                                        <Link to={"/single/" + element.id}>
                                            <img
                                                className="rounded w-48 h-60 p-0"
                                                src={element.images}
                                                alt="img"
                                            />
                                        </Link>
                                        <img
                                            onClick={() => likeHandler(element)}
                                            className="w-4 absolute right-3 top-3 hover:w-5 ease-in-out duration-200"
                                            src={likeIcon}
                                            alt=""
                                        />
                                    </div>

                                    <div className="w-50 p-3">
                                        <p className="text-xs font-medium">
                                            {element.title}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <Link to={"/single/" + element.id}>
                                                <div>
                                                    <p className="text-xs rounded-lg mt-1">
                                                        {element.description}
                                                    </p>
                                                    <p className="text-xs  mt-2">
                                                        {element.price} 000 so'm
                                                    </p>
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex gap-3 mx-auto">
                            {categoryProducts.slice(6, 11).map((element) => (
                                <div
                                    key={element.id}
                                    className="mb-10  hover:drop-shadow-md w-48 h-96 ease-in-out duration-300 cursor-pointer bg-white rounded-lg relative"
                                >
                                    <div>
                                        <Link to={"/single/" + element.id}>
                                            <img
                                                className="rounded w-48 h-60 "
                                                src={element.images}
                                                alt="img"
                                            />
                                        </Link>
                                        <img
                                            onClick={() => likeHandler(element)}
                                            className="w-4 absolute right-3 top-3 hover:w-5 ease-in-out duration-200"
                                            src={likeIcon}
                                            alt=""
                                        />
                                    </div>

                                    <div className="w-50 p-3">
                                        <p className="text-xs font-medium">
                                            {element.title}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <Link to={"/single/" + element.id}>
                                                <div>
                                                    <p className="text-xs rounded-lg mt-1">
                                                        {element.description}
                                                    </p>
                                                    <p className="text-xs  mt-2">
                                                        {element.price} 000 so'm
                                                    </p>
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex gap-3 mx-auto">
                            {categoryProducts.slice(11, 16).map((element) => (
                                <div
                                    key={element.id}
                                    className="mb-10  hover:drop-shadow-md w-48 h-96 ease-in-out duration-300 cursor-pointer bg-white rounded-lg relative"
                                >
                                    <div>
                                        <Link to={"/single/" + element.id}>
                                            <img
                                                className="rounded w-48 h-60 p-0"
                                                src={element.images}
                                                alt="img"
                                            />
                                        </Link>
                                        <img
                                            onClick={() => likeHandler(element)}
                                            className="w-4 absolute right-3 top-3 hover:w-5 ease-in-out duration-200"
                                            src={likeIcon}
                                            alt=""
                                        />
                                    </div>

                                    <div className="w-50 p-3">
                                        <p className="text-xs font-medium">
                                            {element.title}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <Link to={"/single/" + element.id}>
                                                <div>
                                                    <p className="text-xs rounded-lg mt-1">
                                                        {element.description}
                                                    </p>
                                                    <p className="text-xs  mt-2">
                                                        {element.price} 000 so'm
                                                    </p>
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
                    </SwiperSlide>
                </Swiper>
            )}
        </div>
    );
};
