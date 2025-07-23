import React from 'react'
// import useProducts from '../../hooks/useProducts';
import ProductCard from './ProductCard';

import useCart from '../../hooks/useCart';
export default function ProductList({products, isLoading}) {
    const { addToCart, loading } = useCart();

    if (isLoading) return <p>جاري التحميل...</p>;

    return (
        <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 container mx-auto py-8">
            {products.map((product) => (
                <div key={product.id}>
                    <ProductCard product={product} onClick={addToCart} loading={loading} />
                </div>
            ))}
        </section>
    );
}
