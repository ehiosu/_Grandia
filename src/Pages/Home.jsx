import React from 'react'
import { Navbar,Jumbotron,AbsImg,AboutUs,Restaurants, Hotels,ContactUs, Footer } from '../PageImports'
export const Home = () => {
  return (
    <main className='main'>
       
        <Navbar/>
        <Jumbotron/>
        <AbsImg/>
        <AboutUs/>
        <Restaurants/>
        <Hotels/>
        <ContactUs/>
        <Footer/>
       

    </main>
  )
}
