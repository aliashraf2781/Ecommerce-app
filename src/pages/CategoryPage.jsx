import { useParams } from "react-router-dom";
import { useFilteredProducts } from "../hooks/useFilteredProducts";
// import Skeleton from "../components/Skeleton"; 
import ProductList from "../components/Product/ProductList";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function CategoryPage() {
    const { categoryId } = useParams();

    const { data: products, isLoading } = useFilteredProducts({ category: categoryId });
    console.log(products, isLoading);

    if (isLoading) {
        return (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
                <SkeletonTheme baseColor="#f0f0f0" highlightColor="#e0e0e0">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <Skeleton key={index} height={200} />
                    ))}
                </SkeletonTheme>
            </div>
        );
    }


    return (
        <div className="p-4 bg-background ">
            <h2 className="text-2xl font-bold mb-4 text-center text-dark"> {products[0].category?.nameEn}</h2>
            {<ProductList products={products} isLoading={isLoading} />}
        </div>
    );
}
