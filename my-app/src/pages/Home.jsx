import React from 'react'
import HomeLayout from '../Components/Layout/HomeLayout'
import Hero from '../Components/Organism/Hero'
import MenuPage from '../Components/Layout/MenuPage'
import '../Components/FontSetting.css'

export default function Home() {
    return (
        <HomeLayout>
            <Hero />
            <MenuPage />
        </HomeLayout>
    )
}