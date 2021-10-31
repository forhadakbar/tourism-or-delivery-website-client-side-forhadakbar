import React from 'react';

import "./Pricing.css"

const Pricing = () => {
    return (
        <div>


            <section class="price-sec">
                <div class="container-fluid">
                    <div class="container">
                        <div class="row ptables-head">
                            <h1 class="text-center">Our Pricing: Best in the Market</h1>
                        </div>
                        <div class="row">
                            <div class="col-sm-4 price-table">
                                <div class="card text-center">
                                    <div class="title">
                                        <i class="fa fa-paper-plane"></i>
                                        <h2>Basic</h2>
                                    </div>
                                    <div class="price">
                                        <h4><sup>$</sup>50</h4>
                                    </div>
                                    <div class="option">
                                        <ul>
                                            <li><i class="fa fa-check"></i> One 2 day Road trip a month</li>
                                            <li><i class="fa fa-check"></i> 3 Travel News Letter</li>
                                            <li><i class="fa fa-check"></i> 5 Pictures during tour</li>
                                            <li><i class="fa fa-times"></i> Live Support</li>
                                        </ul>
                                    </div>
                                    <a href="#">Order Now</a>
                                </div>
                            </div>

                            <div class="col-sm-4 price-table">
                                <div class="card text-center">
                                    <div class="title">
                                        <i class="fa fa-plane"></i>
                                        <h2>Standard</h2>
                                    </div>
                                    <div class="price">
                                        <h4><sup>$</sup>100</h4>
                                    </div>
                                    <div class="option">
                                        <ul>
                                            <li><i class="fa fa-check"></i> One 2 day fly trip a month</li>
                                            <li><i class="fa fa-check"></i> 5 Travel News Letter</li>
                                            <li><i class="fa fa-check"></i> 10 Pictures during tour</li>
                                            <li><i class="fa fa-times"></i> Live Support</li>
                                        </ul>
                                    </div>
                                    <a href="#">Order Now</a>
                                </div>
                            </div>

                            <div class="col-sm-4 price-table">
                                <div class="card text-center">
                                    <div class="title">
                                        <i class="fa fa-rocket"></i>
                                        <h2>Premium</h2>
                                    </div>
                                    <div class="price">
                                        <h4><sup>$</sup>150</h4>
                                    </div>
                                    <div class="option">
                                        <ul>
                                            <li><i class="fa fa-check"></i> One 2 days 5 start hotel trip a month</li>
                                            <li><i class="fa fa-check"></i> Unlimited Travel News Letter</li>
                                            <li><i class="fa fa-check"></i> 20 Pictures during tour</li>
                                            <li><i class="fa fa-check"></i> Live Support</li>
                                        </ul>
                                    </div>
                                    <a href="#">Order Now</a>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            <a href="https://www.youtube.com/watch?v=og2BwCm1m38" >credit</a>
        </div>
    );
};

export default Pricing;