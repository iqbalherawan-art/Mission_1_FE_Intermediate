import React from 'react'
import Navbar from '../Organism/Navbar'
import Footer from '../Organism/Footer'
export default function HomeLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}