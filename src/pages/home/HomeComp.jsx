/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import banner from '../../assets/img/images/thumbnails/banner1-img.png'
import arrow_icn from '../../assets/img/images/icons/arrow_icn.png'
import feature_icn1 from '../../assets/img/images/icons/feature_icn1.png'
import feature_icn2 from '../../assets/img/images/icons/feature_icn2.png'
import feature_icn3 from '../../assets/img/images/icons/feature_icn3.png'
import feature_icn4 from '../../assets/img/images/icons/feature_icn4.png'
import feature_icn5 from '../../assets/img/images/icons/feature_icn5.png'
import featurebanner from '../../assets/img/images/thumbnails/feature-banner.png'
import virone from '../../assets/img/04.png'
import virtwo from '../../assets/img/5.png'
import how_it1 from '../../assets/img/images/icons/how-it-img-1.png'
import how_it2 from '../../assets/img/images/icons/how-it-img-2.png'
import how_it3 from '../../assets/img/images/icons/how-it-img-3.png'
import how_arrow_1 from '../../assets/img/images/icons/how-it-arrow1.png'
import how_arrow_2 from '../../assets/img/images/icons/how-it-arrow2.png'
import checkIcon from '../../assets/img/images/icons/check-icn.png'
import crossIcon from '../../assets/img/images/icons/cross-outline-icn.png'

const HomeComp = () => {
  return (
    <main className="cs-main-content">
    <section className="here-banner" id="discover-section">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="hero-banner-content ">
                        <article className="cs-title-wrapper">
                            <h1 className="cs-heading-h1 ">
                                Streamline Your DJ Operation
                            </h1>
                            <h3 className="cs-heading-3 font_added_h3">All-in-One Software</h3>
                            <p className="cs-para ">
                                Say goodbye to the mundane tasks and paperwork, and hello to the freedom to <br/>
                                fully immerse yourself in the art of being a DJ!</p>
                        </article>
                        <div className="banner-btn-wrapper ">
                            <a href="/register" className="theme-btn">Join Beta <span
                                    className="d-inline-block ms-2"><img src={arrow_icn}
                                        alt="arrow icon" /></span></a>
                            <a href="/register" className="theme-btn theme-btn-secondary">Explore more
                            </a>
                        </div>

                        {/* <div className="banner_widgets">
                            <article className="banner_widgets_card">
                                <h2 className="banner_widgets_title">100+</h2>
                                <p className="banner_widgets_para">Hours Given Back To You</p>
                            </article>

                            <article className="banner_widgets_card">
                                <h2 className="banner_widgets_title">Simple</h2>
                                <p className="banner_widgets_para">Profile Creation</p>
                            </article>
                        </div> */}
                    </div>
                </div>

                <div className="col-md-4 order_1">
                    <figure className="banner-img">
                        <img src={banner} alt="banner thumbnail" />
                    </figure>
                </div>

            </div>
        </div>
    </section>
    
    <section className="our-process" id="feature-section">
        <div className="container">
            <h1 className="cs-heading-h1 gradient-text ">
                First Ever SaaS built for DJs.
            </h1>
            <p className="cs-span mb-12">Experience the Revolution in DJ Business Operations with Amp Spot's
                Cutting-Edge Automation.</p>
            <article className="cs-title-wrapper in-line-title">
                <h2 className="cs-heading-h2 ">
                    Best <span className="cs-mark ">features</span>
                </h2>

                <a href="#" className="theme-btn">Explore more
                    <span className="d-inline-block ms-2">
                        <img src={arrow_icn} alt="arrow icon" />
                    </span>
                </a>
            </article>
            <div className="row our-process-content">
                <div className="col-md-6 align-self-center">
                    <ul className="our-process-lst">
                        <li>
                            <a className="our-process-item" href="#">
                                <span className="feature_icn">
                                    <img src={feature_icn1} alt="icon" />
                                </span>
                                <span className="feature_btn_txt">Streamlined Bookings</span>
                            </a>
                        </li>

                        <li>
                            <a className="our-process-item is_active" href="#">
                                <span className="feature_icn">
                                    <img src={feature_icn2} alt="icon" />
                                </span>
                                <span className="feature_btn_txt">Secure payments</span>
                            </a>
                        </li>

                        <li>
                            <a className="our-process-item" href="#">
                                <span className="feature_icn">
                                    <img src={feature_icn3} alt="icon" />
                                </span>
                                <span className="feature_btn_txt">Automated Messaging</span>
                            </a>
                        </li>

                        <li>
                            <a className="our-process-item" href="#">
                                <span className="feature_icn">
                                    <img src={feature_icn4} alt="icon" />
                                </span>
                                <span className="feature_btn_txt">Contract Management</span>
                            </a>
                        </li>

                        <li>
                            <a className="our-process-item" href="#">
                                <span className="feature_icn">
                                    <img src={feature_icn5} alt="icon" />
                                </span>
                                <span className="feature_btn_txt">View DJ Calendar</span>
                            </a>
                        </li>

                    </ul>
                </div>
                <div className="col-md-6">
                    <figure className="our-process-fig">
                        <img src={featurebanner} alt="thumbnail" />
                    </figure>
                </div>
            </div>
        </div>
    </section>

    <section className="virtual" id="virtual-section">
        <h2 className="cs-heading-h2 text-center d-block mb-6">
            Virtual manager, at your fingertips
        </h2>
        <div className="main_row">
            <div className="virtual_com">
                {/* <p className="virtual_para">Before joining AMP SPOT</p> */}
                <img src={virtwo} alt="" />
                <img className="list_one_virtual" src="./assets/images/thumbnails/List.png" alt="" />
            </div>
            <div className="virtual_com virtaul_two">
                {/* <p className="virtual_para">After joining AMP SPOT</p> */}
                <img src={virone} alt="" />
                <img className="list_one_virtual" src="./assets/images/thumbnails/Frame 1000004270.png" alt="" />
            </div>
        </div>
        <div className="banner-btn-wrapper btn-wrapper-join">
            <a href="/register" className="theme-btn">Join Beta <span className="d-inline-block ms-2"><img
                src={arrow_icn} alt="arrow icon" /></span></a>
        </div>
    </section>

   
    <section className="client-testimonial-sec service-testimonial">
        <article className="cs-title-wrapper">
            <h1 className="cs-heading-h3 gradient-text mb-6">
                Seize the most exclusive opportunity of the year! Gain access to <br />
                the Amp Spot Beta and become part of a select group shaping <br />
                the future. Limited spots available – claim yours now!
            </h1>
        </article>

        <div className="banner-btn-wrapper btn-wrapper-join">
            <a href="/register" className="theme-btn">Join Beta <span className="d-inline-block ms-2"><img
                        src={arrow_icn} alt="arrow icon" /></span></a>

        </div>
    </section>
  
    <section className="our-services" id="contact-section">
        <div className="container">
            <article className="cs-title-wrapper">
                <h3 className="cs-heading-h3">How It works</h3>
            </article>
            <div className="row align-items-center">
                <div className="col-md-5 pe-0">
                    <div className="service-box justify-content-end">
                        <div className="service-item ">
                            <img src={how_it1} alt="icons " />
                            <h6 className="service-name ">Create</h6>
                        </div>
                        <figure className="arrow-icn-wrapper">
                            <img src={how_arrow_1} alt="arrow icon" />
                        </figure>
                    </div>
                </div>
                <div className="col-md-4 p-0">
                    <div className="service-box">
                        <div className="service-item ">
                            <img src={how_it2} alt="icons " />
                            <h6 className="service-name ">Populate</h6>
                        </div>

                        <figure className="arrow-icn-wrapper ms-2">
                            <img src={how_arrow_2} alt="arrow icon" />
                        </figure>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="service-box">
                        <div className="service-item ">
                            <img src={how_it3} alt="icons " />
                            <h6 className="service-name ">Success</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="startups" id="pricing-section">
        <div className="container">
            <article className="cs-title-wrapper">
                <h2 className="cs-heading-h2 text-center d-block mb-6">
                    Make It Work For You
                </h2>
            </article>

            <div className="row align-items-flex-end">
                <div className="col-md-12 text-center">
                    <div className="price-plan-wrapper">
                        <a href="#" className="plan-btn is-active" data-plan="monthly">Monthly</a>
                        <a href="#" className="plan-btn" data-plan="yearly">Yearly</a>
                    </div>
                </div>
                <div className="col-md-4 monthly-card">
                    <div className="pricing-card">
                        <div className="price-card_header">
                            <h4>$30 <span>/month</span></h4>
                            <h3>Basic</h3>
                        </div>
                        <div className="price-card-content">
                            <h6>Features Included :</h6>
                            <ul className="price-feature-list">
                                <li>
                                    <span className="price-feature-icon">
                                        <img src={checkIcon} alt="check icon" />
                                    </span>
                                    <span className="price-feature-text">Document Management </span>
                                </li>

                                <li>
                                    <span className="price-feature-icon">
                                        <img src={checkIcon} alt="check icon" />
                                    </span>
                                    <span className="price-feature-text">Contract Handling</span>
                                </li>

                                <li>
                                    <span className="price-feature-icon"> 
                                        <img src={checkIcon} alt="check icon" />
                                    </span>
                                    <span className="price-feature-text">Storage Capacity: 30 GB </span>
                                </li>

                                <li>
                                    <span className="price-feature-icon">
                                        <img src={crossIcon} alt="check icon" />
                                    </span>
                                    <span className="price-feature-text">Prompt Engineering</span>
                                </li>

                                <li>
                                    <span className="price-feature-icon">
                                        <img src={crossIcon} alt="check icon" />
                                    </span>
                                    <span className="price-feature-text">Streamlined Booking</span>
                                </li>
                            </ul>
                        </div>

                        <div className="price-card-footer">
                            <button className="theme-btn tertary-btn d-block w-100">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 monthly-card">
                    <div className="pricing-card is-active-card">
                        <div className="price-card-badge">
                            <h6>MOST POPULAR</h6>
                        </div>
                        <div className="price-card_header">
                            <h4>$75 <span>/month</span></h4>
                            <h3>Pro</h3>
                        </div>
                        <div className="price-card-content">
                            <h6>Features Included :</h6>
                            <ul className="price-feature-list">
                                <li>
                                    <span className="price-feature-icon">
                                        <img src={checkIcon} alt="check icon" />
                                    </span>
                                    <span className="price-feature-text">Automated Contract Management</span>
                                </li>

                                <li>
                                    <span className="price-feature-icon">
                                        <img src={checkIcon} alt="check icon" />
                                    </span>
                                    <span className="price-feature-text">Automated Customer Messaging</span>
                                </li>

                                <li>
                                    <span className="price-feature-icon">
                                        <img src={checkIcon} alt="check icon" />
                                    </span>
                                    <span className="price-feature-text">Calendar & Availability</span>
                                </li>

                                <li>
                                    <span className="price-feature-icon">
                                        <img src={checkIcon} alt="check icon" />
                                    </span>
                                    <span className="price-feature-text">Event Inquiry Summaries</span>
                                </li>

                                <li>
                                    <span className="price-feature-icon">
                                        <img src={checkIcon} alt="check icon" />
                                    </span>
                                    <span className="price-feature-text">Storage Capacity: 200 GB</span>
                                </li>
                            </ul>
                        </div>

                        <div className="price-card-footer">
                            <button className="theme-btn tertary-btn d-block w-100">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 monthly-card">
                    <div className="pricing-card">
                        <div className="price-card_header">
                            <h4>$180 <span>/month</span></h4>
                            <h3>Premium</h3>
                        </div>
                        <div className="price-card-content">
                            <h6>Features Included :</h6>
                            <ul className="price-feature-list">
                                <li>
                                    <span className="price-feature-icon">
                                        <img src={checkIcon} alt="check icon" />
                                    </span>
                                    <span className="price-feature-text">Customer Relationship Builder</span>
                                </li>

                                <li>
                                    <span className="price-feature-icon">
                                        <img src={checkIcon} alt="check icon" />
                                    </span>
                                    <span className="price-feature-text">Prompt Engineering</span>
                                </li>

                                <li>
                                    <span className="price-feature-icon">
                                        <img src={checkIcon} alt="check icon" />
                                    </span>
                                    <span className="price-feature-text">Profit Maximization Dashboard </span>
                                </li>

                                <li>
                                    <span className="price-feature-icon">
                                        <img src={checkIcon} alt="check icon" />
                                    </span>
                                    <span className="price-feature-text">Secure Payments</span>
                                </li>

                                <li>
                                    <span className="price-feature-icon">
                                        <img src={checkIcon} alt="check icon" />
                                    </span>
                                    <span className="price-feature-text">Storage Capacity: Unlimited</span>
                                </li>
                            </ul>
                        </div>

                        <div className="price-card-footer">
                            <button className="theme-btn tertary-btn d-block w-100">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 yearly-card" style={{display: "none"}}>
                    <div className="pricing-card">
                        <div className="price-card_header">
                            <h4>$324 <span>/year (10% Discount)</span></h4>
                            <h3>Basic</h3>
                        </div>
                        <div className="price-card-content">
                            <h6>Features Included :</h6>
                            <ul className="price-feature-list">
                                <li>
                                    <span className="price-feature-icon">
                                        <img src={checkIcon} alt="check icon" />
                                    </span>
                                    <span className="price-feature-text">Document Management </span>
                                </li>

                                <li>
                                    <span className="price-feature-icon">
                                        <img src={checkIcon} alt="check icon" />
                                    </span>
                                    <span className="price-feature-text">Contract Handling</span>
                                </li>

                                <li>
                                    <span className="price-feature-icon">
                                        <img src={checkIcon} alt="check icon" />
                                    </span>
                                    <span className="price-feature-text">Storage Capacity: 30 GB </span>
                                </li>

                                <li>
                                    <span className="price-feature-icon">
                                        <img src={crossIcon} alt="check icon" /> 
                                    </span>
                                    <span className="price-feature-text">Prompt Engineering</span>
                                </li>

                                <li>
                                    <span className="price-feature-icon">
                                        <img src={crossIcon} alt="check icon" />
                                    </span>
                                    <span className="price-feature-text">Streamlined Booking</span>
                                </li>
                            </ul>
                        </div>

                        <div className="price-card-footer">
                            <button className="theme-btn tertary-btn d-block w-100">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 yearly-card" style={{display:"none"}}>
                    <div className="pricing-card is-active-card">
                        <div className="price-card-badge">
                            <h6>MOST POPULAR</h6>
                        </div>
                        <div className="price-card_header">
                            <h4>$810 <span>/year (10% Discount)</span></h4>
                            <h3>Pro</h3>
                        </div>
                        <div className="price-card-content">
                            <h6>Features Included :</h6>
                            <ul className="price-feature-list">
                                <li>
                                    <span className="price-feature-icon">
                                        <img src={checkIcon} alt="check icon" />
                                    </span>
                                    <span className="price-feature-text">Automated Contract Management</span>
                                </li>

                                <li>
                                    <span className="price-feature-icon">
                                        <img src={checkIcon} alt="check icon" />
                                    </span>
                                    <span className="price-feature-text">Automated Customer Messaging</span>
                                </li>

                                <li>
                                    <span className="price-feature-icon">
                                        <img src={checkIcon} alt="check icon" />
                                    </span>
                                    <span className="price-feature-text">Calendar & Availability</span>
                                </li>

                                <li>
                                    <span className="price-feature-icon">
                                        <img src={checkIcon} alt="check icon" />
                                    </span>
                                    <span className="price-feature-text">Event Inquiry Summaries</span>
                                </li>

                                <li>
                                    <span className="price-feature-icon">
                                        <img src={checkIcon} alt="check icon" />
                                    </span>
                                    <span className="price-feature-text">Storage Capacity: 200 GB</span>
                                </li>
                            </ul>
                        </div>

                        <div className="price-card-footer">
                            <button className="theme-btn tertary-btn d-block w-100">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 yearly-card" style={{display:"none"}}>
                    <div className="pricing-card">
                        <div className="price-card_header">
                            <h4>$1,944 <span>/year (10% Discount)</span></h4>
                            <h3>Premium</h3>
                        </div>
                        <div className="price-card-content">
                            <h6>Features Included :</h6>
                            <ul className="price-feature-list">
                                <li>
                                    <span className="price-feature-icon">
                                        <img src={checkIcon} alt="check icon" /> 
                                    </span>
                                    <span className="price-feature-text">Customer Relationship Builder</span>
                                </li>

                                <li>
                                    <span className="price-feature-icon">
                                        <img src={checkIcon} alt="check icon" />
                                    </span>
                                    <span className="price-feature-text">Prompt Engineering</span>
                                </li>

                                <li>
                                    <span className="price-feature-icon">
                                        <img src={checkIcon} alt="check icon" />
                                    </span>
                                    <span className="price-feature-text">Profit Maximization Dashboard </span>
                                </li>

                                <li>
                                    <span className="price-feature-icon">
                                        <img src={checkIcon} alt="check icon" />
                                    </span>
                                    <span className="price-feature-text">Secure Payments</span>
                                </li>

                                <li>
                                    <span className="price-feature-icon">
                                        <img src={checkIcon} alt="check icon" />
                                    </span>
                                    <span className="price-feature-text">Storage Capacity: Unlimited</span>
                                </li>
                            </ul>
                        </div>

                        <div className="price-card-footer">
                            <button className="theme-btn tertary-btn d-block w-100">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="price-free-trails">
                        <a href="#" className="gradient-text">15-Day free trial available </a>
                        <a href="#" className="gradient-text">30 Days Money-back refund policy </a>
                        <a href="#" className="gradient-text">Prices do not include applicable state sales tax. </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="manage-your-career">
        <div className="container">
            <h1 className="cs-heading-h1 last-head gradient-text mb-12">
                Create Unforgettable Musical <br/> Experiences, We’ll Take <br/>
                Care Of The Rest.
            </h1>
            <div className="manage-career-cad">
                <article className="cs-title-wrapper">
                    <h2 className="cs-heading-h2 ">
                        Manage your Career <br /> smoothly with <span className="cs-mark ">AMP</span>
                    </h2>
                    <p className="cs-para">Our mission is give a perfect automation system and platform for both
                        DJ’s and customers. More to come!</p>
                    <div className="banner-btn-wrapper ">
                        <a href="/register" className="theme-btn join-us-btn">Join Us Now</a>
                        <a href="/register" className="theme-btn theme-btn-secondary">Sign In
                        </a>
                    </div>
                </article>
            </div>
        </div>
    </section>
</main>
  )
}

export default HomeComp