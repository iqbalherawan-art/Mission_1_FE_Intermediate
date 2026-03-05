import React from 'react'
import Navbar from '../components/organism/Navbar'
import Footer from '../components/organism/Footer'
export default function HomeLayouts({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}