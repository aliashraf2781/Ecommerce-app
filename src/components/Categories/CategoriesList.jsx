import React from 'react'
import useCategories from '../../hooks/useCategories'
import CategoryCard from './CategoryCard'

export default function CategoriesList() {
    // const {data: categories, isLoading} = useGetCategoriesQuery()
    const { data: categories, isLoading, isError } = useCategories()

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Something went wrong</p>
    return (
        <div className="flex flex-wrap justify-center gap-6 py-4">
            {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
            ))}
        </div>
    )
}
