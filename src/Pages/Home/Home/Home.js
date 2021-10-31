import React from 'react';
import Banner from '../Banner/Banner';
import Pricing from '../Pricing/Pricing';
import Services from '../Services/Services';
import Subscription from '../Subscription/Subscription';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Pricing></Pricing>
            <Subscription></Subscription>

        </div>
    );
};

export default Home;