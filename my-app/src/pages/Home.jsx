import React from 'react'
import HomeLayouts from '../Layout/HomeLayout'
import Hero from '../Components/Organism/Hero'
import Collection from '../components/organisems/Collection'
import Newsletter from '../components/organisems/Newsletter'

export default function Home() {
    return (
        <>
            <HomeLayouts>
                <Hero />
                <Collection />
                <Newsletter />
            </HomeLayouts>
        </>
    )
}