import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../libs/axiosInstance";


const fetchCategories = async () => {
    const { data } = await axiosInstance.get("/api/categories");
    // console.log(data.data);
    return data?.data;

};


export default function useCategories() {
    return useQuery({
        queryKey: ["categories"],
        queryFn: fetchCategories,
        staleTime: 5 * 60 * 1000,
        retry: 1,
    });
}
