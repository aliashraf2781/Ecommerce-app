import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../libs/axiosInstance";

export function useFilteredProducts(filters) {
    return useQuery({
        queryKey: ['products', filters],
        queryFn: async () => {
            const params = new URLSearchParams();

            if (filters.category) params.append('category', filters.category);
            if (filters.minPrice) params.append('minPrice', filters.minPrice);
            if (filters.maxPrice) params.append('maxPrice', filters.maxPrice);
            if (filters.sortBy) params.append('sortBy', filters.sortBy);
            if (filters.sortOrder) params.append('sortOrder', filters.sortOrder);
            if (filters.inStock !== undefined) params.append('inStock', filters.inStock);
            if (filters.brand) params.append('brand', filters.brand);

            const res = await axiosInstance.get(`/api/products?${params.toString()}`);
            return res.data.data.products;
        }
    });
}
