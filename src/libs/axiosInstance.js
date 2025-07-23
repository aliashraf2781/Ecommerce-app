import axios from "axios";
import toast from "react-hot-toast";

const axiosInstance = axios.create({
  baseURL: "https://task-ecommerce-api.vercel.app",
});

// Add a request interceptor

axiosInstance.interceptors.response.use(
  (response) => {
    // You can modify the response here if needed
    return response;
  },
  (error) => {
    const message =
      error?.response?.data?.message || "حدث خطأ غير متوقع. حاول مرة أخرى.";

    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
    });

    return Promise.reject(error);
  }
);

export default axiosInstance;
