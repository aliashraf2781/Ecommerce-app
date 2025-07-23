import React from 'react'

import ProductCard from './ProductCard';

import useCart from '../../hooks/useCart';
export default function ProductList({products}) {
    const { addToCart } = useCart();


    return (
        <section className="grid grid-cols-1 sm:grid-cols-3  gap-4 container mx-auto py-8">
            {products?.map((product) => (
                <div key={product.id}>
                    <ProductCard product={product} onClick={addToCart} />
                </div>
            ))}
        </section>
    );
}
