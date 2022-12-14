import React from 'react'
import { Navbar,Jumbotron,AbsImg,AboutUs,Restaurants, Hotels,ContactUs } from '../PageImports'
export const Home = () => {
  return (
    <main>
       
        <Navbar/>
        <Jumbotron/>
        <AbsImg/>
        <AboutUs/>
        <Restaurants/>
        <Hotels/>
        <ContactUs/>
        <h1 className="5xl">Home</h1>

    </main>
  )
}
