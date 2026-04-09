import React from 'react'
import ContinueWatching from '../Molecule/ContinueWatching'
import TopRatingMovies from '../Molecule/TopRatingMovies'
import TrendingFilm from '../Molecule/TrendingFilm'
import NewRelease from '../Molecule/NewRelease'


export default function MenuPage() {
    return (
        <>
        <ContinueWatching />
        <TopRatingMovies />
        <TrendingFilm />
        <NewRelease />
        </>
    )
}