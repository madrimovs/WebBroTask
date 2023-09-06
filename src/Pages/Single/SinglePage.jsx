import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import starIcon from "../../Assets/star.avif";
import likeIcon from "../../Assets/like.png";
import plusIcon from "../../Assets/plus.png";
import minusIcon from "../../Assets/minus.png";
import vectorIcon from "../../Assets/right.png";
import basketIcon from "../../Assets/basket.png";

import { BASE_URL } from "../../API/BASE_URL";
import { countPriceActions } from "../../Redux/slicers/counterPriceSlicer";
import Layout from "../../Components/Layout/Layout";

const SinglePage = () => {
    const { id } = useParams();

    const [product, setProduct] = useState({});
    const [isError, setIsError] = useState(false);

    const [price, setPrice] = useState();

    const { counterPrice } = useSelector((store) => store);
    const dispatch = useDispatch();

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(BASE_URL + "products/" + id);

                if (res.status === 500) {
                    throw new Error("Malumot topilmadi");
                }

                const data = await res.json();

                setProduct(data);

                setPrice(data.price);
            } catch {
                setIsError(true);
            }
        };
        getData();
    }, [id]);

    const incrementHandler = () => {
        dispatch(countPriceActions.increment());
        setPrice(price + product.price);
    };
    const decrementHandler = () => {
        if (counterPrice.countPrice > 1) {
            dispatch(countPriceActions.decrement());
            setPrice(price - product.price);
        }
    };

    return (
        <Layout>
            {!isError ? (
                <div className="px-28 flex mt-10 items-start ">
                    <div className="mr-20 w-1/3 h-96">
                        <Swiper
                            modules={[Navigation, Pagination, A11y]}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                        >
                            <SwiperSlide>
                                <img
                                    className="mr-20 w-full h-96"
                                    src={product.thumbnail}
                                    alt=""
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className="w-full pr-10">
                        <div className="flex text-xs justify-between items-center text-zinc-500">
                            <div className="flex items-center">
                                <img className="w-5" src={starIcon} alt="" />
                                <p>5.0(11 baho)</p>
                                <p className="ml-8 cursor-pointer">
                                    Ko'proq 100 buyurtma
                                </p>
                            </div>

                            <div className="flex items-center gap-1 cursor-pointer">
                                <img
                                    className="w-3 mt-0.5 ease-out duration-300"
                                    src={likeIcon}
                                    alt=""
                                />
                                <p>Istaklarga</p>
                            </div>
                        </div>

                        <div className="text-xs mt-5">
                            <h1 className="font-medium text-lg">{product.title}</h1>
                            <div className="flex items-center mt-2 gap-20">
                                <p>Sotuvchi:</p>
                                <p>John</p>
                            </div>

                            <div className="flex items-center mt-2 gap-11">
                                <p>Yetkazib berish:</p>
                                <p>1 kun bepul</p>
                            </div>
                        </div>

                        <hr className="mt-5" />

                        <div className="text-xs">
                            <p>Miqdor:</p>
                            <div className="flex items-center mt-2 border border-zinc-300 w-24 py-1 px-2 justify-between">
                                <button onClick={decrementHandler}>
                                    <img className="w-5" src={minusIcon} alt="" />
                                </button>
                                <p>{counterPrice.countPrice}</p>
                                <button onClick={incrementHandler}>
                                    <img className="w-5" src={plusIcon} alt="" />
                                </button>
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="text-xs">Narx:</p>
                            <div className="flex gap-6 items-center">
                                <h1 className="font-medium text-sm">
                                    {product.price + Number(price)} 000 so'm
                                </h1>
                                <p className="text-xs line-through">5523 000 so'm</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-3 bg-violet-100 cursor-pointer py-5 px-3 rounded-lg">
                            <p className="text-sm">
                                <span className="bg-yellow-300 px-2 py-0.5 text-xs rounded font-medium">
                                    Oyiga 5 600 so'mdan
                                </span>
                                muddatli to'lov
                            </p>
                            <img className="w-4" src={vectorIcon} alt="" />
                        </div>

                        <div className="mt-5 gap-3 flex text-sm font-medium items-center justify-between">
                            <button className="py-2 rounded-lg w-full bg-violet-600 text-white">
                                Savatga qo'shish
                            </button>
                            <button className="py-2 rounded-lg border w-full border-violet-600 text-indigo-800">
                                Tugmani 1 bosishda xarid qilish
                            </button>
                        </div>

                        <div className="flex text-xs mt-5 bg-yellow-200 py-1.5 font-medium gap-0.5 px-10 rounded-lg items-center ">
                            <img className="w-4" src={basketIcon} alt="" />
                            <p>Bu haftada 847 kishi sotib oldi</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="mt-20 text-center px-28">
                    <p className="bg-violet-500 rounded font-medium text-white text-lg">
                        Qandaydir xatolik yuz berdi iltimos qaytadan urinib ko'ring !
                    </p>
                </div>
            )}
        </Layout>
    );
};

export default SinglePage;
