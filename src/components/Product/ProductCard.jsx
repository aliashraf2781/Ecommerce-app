import React from "react";
import { FaStar, FaRegStar, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ProductCard = ({ product, onClick }) => {
    const {
        nameEn,
        price,
        originalPrice,
        image,
        rating,
        reviewCount,
        inStock,
        brand
    } = product;


    const renderStars = () => {
        const fullStars = Math.floor(rating);
        const emptyStars = 5 - fullStars;
        return (
            <>
                {[...Array(fullStars)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
                {[...Array(emptyStars)].map((_, i) => (
                    <FaRegStar key={i} className="text-yellow-400 text-sm" />
                ))}
            </>
        );
    };

    return (
        <div className="bg-light text-dark rounded-2xl shadow-md  hover:shadow-xl transition flex flex-col min-h-[420px]">

            <NavLink to={`/products/${product.id}`} >
                <div className="w-full h-48 rounded-t-xl overflow-hidden">
                    <img
                        src={image}
                        alt={nameEn}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex-1 flex flex-col justify-between p-4">
                    <div className="mb-2">
                        <h3 className="text-lg font-bold text-dark">{nameEn}</h3>
                        <p className="text-xs text-gray-400 mt-1">Brand: {brand}</p>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                        {renderStars()}
                        <span className="text-xs text-gray-500">{reviewCount}</span>
                    </div>

                    <div className="mb-3">
                        <span className="text-[--color-primary] text-xl font-bold">{price.toFixed(2)} EGP</span>
                        <span className="line-through text-sm text-gray-400 ml-2">{originalPrice.toFixed(2)} EGP</span>

                    </div>

                </div>
            </NavLink>
            <div className="flex items-center justify-between mt-auto p-4">
                <span className={`text-sm ${inStock ? "text-green-600" : "text-red-500"}`}>
                    {inStock ? "متوفر" : "غير متوفر"}
                </span>
                <button
                    className="bg-primary text-light px-4 py-3 text-lg rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition cursor-pointer"
                    disabled={!inStock}
                    onClick={() => onClick(product)}
                >
                    <FaShoppingCart />
                </button>
            </div>
        </div>

    );
};

export default ProductCard;
