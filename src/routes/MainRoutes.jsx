import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Products from "../pages/Products";
import ProductDetails from "../pages/productsDetails";
import NotFound from "../pages/NotFound";
import CategoryPage from "../pages/CategoryPage";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="home" replace />
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'products/:id',
                element: <ProductDetails/>
            },
            {
                path: 'products',
                element: <Products />
            },
            {
                path: "/category/:categoryId",
                element: <CategoryPage />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
]);


export default routes;