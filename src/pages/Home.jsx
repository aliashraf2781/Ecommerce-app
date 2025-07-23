import React from 'react'
import MainSlider from '../components/HomeComponents/MainSlider'
import ProductList from '../components/Product/ProductList'
import CategoriesList from '../components/Categories/CategoriesList'
import { useFilteredProducts } from '../hooks/useFilteredProducts'

export default function Home() {
    const { data, isLoading } = useFilteredProducts({})
    console.log(data, isLoading)
    return (
        <main className='bg-background'>
            <MainSlider />
            <section>
                <h3 className='text-3xl font-bold text-center my-8'>Categories</h3>
                <CategoriesList />
            </section>
            <section>
                <h3 className='text-3xl font-bold text-center my-8'>Featured Products</h3>
                <ProductList products={data} isLoading={isLoading} />
            </section>
        </main>
    )
}
