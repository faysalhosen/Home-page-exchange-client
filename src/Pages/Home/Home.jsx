import React, { useContext } from 'react';
import Banner from './Banner/Banner';
import PricingPlans from './PricingPlan/PricingPlans';
import Testimonial from './Testimonial/Testimonial';
import Features from './Features/Features';
import PopularService from './PopularService/PopularService';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    const popularServices = useLoaderData();
    const {loading} = useContext(AuthContext)
    console.log(popularServices);
    if (loading) {
        return 'loading...'
    }
    return (
        <div>
            <Helmet>
                <title>home-exhange</title>
            </Helmet>
            <Banner></Banner>
            <PopularService popularServices={popularServices}></PopularService>
            <PricingPlans></PricingPlans>
            <Features></Features>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;