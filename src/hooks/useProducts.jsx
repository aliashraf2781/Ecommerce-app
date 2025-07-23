import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../libs/axiosInstance";


const fetchProducts = async () => {
    const { data } = await axiosInstance.get("/api/products");
    return data.data.products;
};


export default function useProducts() {
    return useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
        staleTime: 5 * 60 * 1000,
        retry: 1,
    });
}
