import React from 'react';
import Awards from './Awards';
import Hero from './Hero';
import States from './States';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccounts';
import Navbar from '../Navbar';
import Footer  from '../Footer'


function HomePage() {
    return ( 
        <>
       
        <Hero />
        <Awards />
        <States />
        <Pricing />
        <Education />
        <OpenAccount />
       

        </>
     );
}

export default HomePage;