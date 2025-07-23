import { useState } from 'react';
import ProductList from '../components/Product/ProductList'
import { useFilteredProducts } from '../hooks/useFilteredProducts';
import useCategories from '../hooks/useCategories';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
export default function Products() {
    const { data: categories, isLoading: categoriesLoading } = useCategories();
    const [filters, setFilters] = useState({
        category: "",
        minPrice: 0,
        maxPrice: 1000,
        sortBy: '',
        sortOrder: '',
    });

    const { data, isLoading } = useFilteredProducts(filters);

    if (isLoading) {
        return (
            <SkeletonTheme baseColor="#f0f0f0" highlightColor="#e0e0e0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                    {Array.from({ length: 9 }).map((_, index) => (
                        <Skeleton key={index} height={200} />
                    ))}
                </div>
            </SkeletonTheme>
        );
    }
    return (
        <main className='bg-background p-4 text-dark'>
            <div className="bg-light  p-4  shadow mb-6">
                <div className="grid md:grid-cols-4 gap-4">
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">الفئة</label>
                        <select
                            onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        >
                            {categoriesLoading ? (
                                <option>جاري التحميل...</option>
                            ) : (
                                <>
                                    <option value="">الكل</option>
                                    {categories.map(category => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </>
                            )}
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">أقل سعر</label>
                        <input
                            type="number"
                            placeholder="مثال: 100"
                            onChange={(e) => setFilters(prev => ({ ...prev, minPrice: e.target.value }))}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">أعلى سعر</label>
                        <input
                            type="number"
                            placeholder="مثال: 5000"
                            onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: e.target.value }))}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">بحث</label>
                        <input
                            type="text"
                            placeholder="ابحث باسم المنتج"
                            onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                    </div>
                </div>
            </div>
            {data.length>0 ? <ProductList products={data} isLoading={isLoading} /> : <h1>Not found</h1>}
            

            <div className="flex justify-center items-center gap-2 mt-6">
                <button
                    disabled={filters.page === 1}
                    onClick={() => setFilters(prev => ({ ...prev, page: prev.page - 1 }))}
                    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                >
                    السابق
                </button>
                <span className="px-4 py-2 font-medium">صفحة {filters.page}</span>
                <button
                    onClick={() => setFilters(prev => ({ ...prev, page: prev.page + 1 }))}
                    className="px-4 py-2 bg-gray-200 rounded"
                >
                    التالي
                </button>
            </div>
        </main>
    )
}
