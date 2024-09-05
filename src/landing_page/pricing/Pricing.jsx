import React from 'react';
import Hero from './Hero';
import Brokrage from './Brokrage';
import OpenAccount from '../OpenAccounts';

function PricingPage() {
    return ( 
        <div>
           <Hero />
           <OpenAccount />
           <Brokrage />
        </div>
     );
}

export default PricingPage;