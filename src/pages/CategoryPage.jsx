import { useParams } from "react-router-dom";
import { useFilteredProducts } from "../hooks/useFilteredProducts";
import ProductList from "../components/Product/ProductList";
import SkeletonLoader from "../components/Skeleton/SkeletonLoader";


export default function CategoryPage() {
    const { categoryId } = useParams();

    const { data: products, isLoading } = useFilteredProducts({ category: categoryId });



    return (
        <div className="p-4 bg-background ">
            <h2 className="text-2xl font-bold mb-4 text-center text-dark">
                {products?.[0]?.category?.nameEn || "Category Name"}
            </h2>
            {products?.length > 0 ? <ProductList products={products} /> : isLoading ? <SkeletonLoader isLoading={isLoading}><ProductList products={products} /></SkeletonLoader> : <div className='text-5xl text-center py-14'>No products available</div>}
        </div>
    );
}
