import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { BASE_URL } from "../../../API/BASE_URL";

import CategoryBarLoading from "../../Loading/CategoryBarLoading/CategoryBarLoading";
import { setCategory } from "../../../Redux/slicers/categorySliser";

const CategoryBar = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();

    const handleCategoryChange = (event) => {
        dispatch(setCategory(event.target.innerText));
    };

    useEffect(() => {
        fetch(BASE_URL + "products")
            .then((res) => res.json())
            .then((data) => {
                setData(data.products);
                isLoading(false);
                console.log(data);
            })
            .catch((err) => {
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            {isLoading ? (
                <CategoryBarLoading />
            ) : (
                <div className="flex gap-3 justify-between text-xs text-zinc-600 px-28">
                    {data.slice(0,8).map((element) => (
                        <Link key={element.id} to="/category">
                            <p
                                onClick={handleCategoryChange}
                                className="cursor-pointer hover:text-black hover:underline"
                            >
                                {element.category}
                            </p>
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
};

export default CategoryBar;
