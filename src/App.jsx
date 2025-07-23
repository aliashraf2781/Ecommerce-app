import { RouterProvider } from 'react-router-dom'
import './App.css'
import React from 'react'

import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CartProvider from './context/CartContext';
import ThemeProvider from './context/ThemeContext';
import MainRoutes from './Routes/MainRoutes'

function App() {

  return (
    <>
      <QueryClientProvider client={new QueryClient()}>
        <ThemeProvider>
          <CartProvider>
            <Toaster />
            <RouterProvider router={MainRoutes} />
          </CartProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
