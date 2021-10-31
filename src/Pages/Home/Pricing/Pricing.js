import React from 'react';

import "./Pricing.css"

const Pricing = () => {
    return (
        <div>


            <section className="price-sec">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row ptables-head">
                            <h1 className="text-center">Our Pricing: Best in the Market</h1>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 price-table">
                                <div className="card text-center">
                                    <div className="title">
                                        <i className="fa fa-paper-plane"></i>
                                        <h2>Basic</h2>
                                    </div>
                                    <div className="price">
                                        <h4><sup>$</sup>50</h4>
                                    </div>
                                    <div className="option">
                                        <ul>
                                            <li><i className="fa fa-check"></i> One 2 day Road trip a month</li>
                                            <li><i className="fa fa-check"></i> 3 Travel News Letter</li>
                                            <li><i className="fa fa-check"></i> 5 Pictures during tour</li>
                                            <li><i className="fa fa-times"></i> Live Support</li>
                                        </ul>
                                    </div>
                                    <a href="#">Order Now</a>
                                </div>
                            </div>

                            <div className="col-sm-4 price-table">
                                <div className="card text-center">
                                    <div className="title">
                                        <i className="fa fa-plane"></i>
                                        <h2>Standard</h2>
                                    </div>
                                    <div className="price">
                                        <h4><sup>$</sup>100</h4>
                                    </div>
                                    <div className="option">
                                        <ul>
                                            <li><i className="fa fa-check"></i> One 2 day fly trip a month</li>
                                            <li><i className="fa fa-check"></i> 5 Travel News Letter</li>
                                            <li><i className="fa fa-check"></i> 10 Pictures during tour</li>
                                            <li><i className="fa fa-times"></i> Live Support</li>
                                        </ul>
                                    </div>
                                    <a href="#">Order Now</a>
                                </div>
                            </div>

                            <div className="col-sm-4 price-table">
                                <div className="card text-center">
                                    <div className="title">
                                        <i className="fa fa-rocket"></i>
                                        <h2>Premium</h2>
                                    </div>
                                    <div className="price">
                                        <h4><sup>$</sup>150</h4>
                                    </div>
                                    <div className="option">
                                        <ul>
                                            <li><i className="fa fa-check"></i> One 2 days 5 start hotel trip a month</li>
                                            <li><i className="fa fa-check"></i> Unlimited Travel News Letter</li>
                                            <li><i className="fa fa-check"></i> 20 Pictures during tour</li>
                                            <li><i className="fa fa-check"></i> Live Support</li>
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