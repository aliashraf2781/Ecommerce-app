// src/context/CartContext.js
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();


import React from 'react'
import toast from "react-hot-toast";

export default function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });
    



    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prev) => {
            const exists = prev.find((item) => item.id === product.id);
            if (exists) {
                return prev.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        toast.success(`${product.nameEn} added successfully` );
    };

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const totalPrice = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
}
