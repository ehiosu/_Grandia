import React from 'react'
import { Navbar,Jumbotron,AbsImg,AboutUs,Restaurants, Hotels } from '../PageImports'
export const Home = () => {
  return (
    <main>
       
        <Navbar/>
        <Jumbotron/>
        <AbsImg/>
        <AboutUs/>
        <Restaurants/>
        <Hotels/>
        <h1 className="5xl">Home</h1>

    </main>
  )
}
