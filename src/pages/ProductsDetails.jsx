import { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import axiosInstance from '../libs/axiosInstance'
import useCart from '../hooks/useCart'


export default function ProductDetails() {
    const { id } = useParams()
    const { addToCart } = useCart()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axiosInstance.get(`/api/products/${id}`)
                setProduct(response.data.data)
            } catch (error) {
                console.error('Error fetching product:', error)
            }
        }

        fetchProduct()
    }, [id])
    const handleAddToCart = () => {
        if (!product) return;
        addToCart(product)
    }

    if (!product) return <div className="p-4 text-center">جاري التحميل...</div>

    return (
        <div className="  container grid md:grid-cols-2 gap-8 py-8 bg-background">
            <div className="space-y-4">
                <img src={product.image} alt={product.name} className="w-full rounded-2xl shadow-md" />
                <div className="flex gap-2">
                    {product.images.map((img, i) => (
                        <img key={i} src={img} alt="thumb" className="w-20 h-20 object-cover rounded-lg border" />
                    ))}
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-3xl font-bold">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>

                <div className="flex items-center gap-4">
                    <span className="text-2xl font-semibold text-primary">${product.price}</span>
                    <span className="line-through text-gray-400">${product.originalPrice}</span>
                </div>

                <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} fill={i < Math.round(product.rating) ? 'currentColor' : 'none'} className="w-5 h-5" />
                    ))}
                    <span className="text-gray-500 text-sm">({product.reviewCount})</span>
                </div>

                <div className="bg-gray-100 p-4 rounded-xl">
                    <h4 className="font-bold mb-2">المواصفات:</h4>
                    <ul className="grid grid-cols-2 gap-2 text-sm">
                        {Object.entries(product.specifications).map(([key, value], i) => (
                            <li key={i}><strong>{key}:</strong> {value}</li>
                        ))}
                    </ul>
                </div>

                <p className="text-sm text-gray-500">العلامة التجارية: <span className="font-medium">{product.brand}</span></p>
                <p className="text-sm text-gray-500">التصنيف: <span className="font-medium">{product.category.name}</span></p>

                <div className="flex items-center gap-4 mt-4">
                    <button className="bg-primary text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition" onClick={handleAddToCart}>أضف للسلة</button>
                    <span className="text-sm text-gray-600">الكمية المتاحة: {product.stockQuantity}</span>
                </div>
            </div>
        </div>
    )
}
