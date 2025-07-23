import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/LayoutComponents/Footer/Footer'
import Header from '../../components/LayoutComponents/Header/Header'

export default function MainLayout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
