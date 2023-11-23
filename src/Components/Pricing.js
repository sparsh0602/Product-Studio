import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Money from './images/bluepiggy.png';
import 'react-bootstrap';
import MetaDecorator from './util/MetaDecorator';
import metaThumbnail from "./images/metaThumbnail.png";
const pricing = require("./data/Pricing.json");

/* Component for hero-bars */
const Bars = () => (
    <div className="row ps-container bbar">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-bars"> 
            <div className="row">                            
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-grid grid1 animated slideInDown animate-a"></div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-grid grid2 animated slideInDown animate-b"></div>
            </div>
            <div className="ps-textWrapper">
                <h1 className="animated slideInLeft"><strong>Pricing and FAQs</strong></h1>
                <h4 className="animated slideInLeft">The cost involved in building a product can sometimes be the difference between reality and fantasy. We understand that, and we've tried our best to answer your questions.</h4>
            </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-bars"> 
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-grid grid3 animated slideInDown animate-c"></div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-grid grid4 img2 animated slideInDown animate-d"></div>
            </div>
        </div> 
        <Header />           
    </div>
);

class Pricing extends Component{
	render() {
        return (
                <div className="container-fluid ps-gradient">
                <MetaDecorator 
                title={pricing.pageTitle}
                description={pricing.pageDescription}
                imageUrl={metaThumbnail} />
                    <Bars />
                    <div className="row ps-container">
                    	<div className="col-lg-7 col-md-7 col-sm-7 col-xs-6 pricing-pModel">
                    		<h1><strong>High-end solutions with pricing models to suit every need</strong></h1>
                    		<h4>We never want technology costs to be a hindrance in the growth path of any business. Whether you want a dedicated resource for a large project, need help with a new feature, or even maintenance, we customize solutions without burning a hole in your pocket.</h4>
                    	</div>
                    	<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 pricing-pModel">
                    		<img src={Money} alt=""/>
                    	</div>
                    </div>
                    <div className="row ps-container">
                    	<div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 pricing-faqSection">
                    		<div className="row pricing-faqContainer">
                    			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pricing-faqHead">
                    				<h1>Frequently asked questions</h1>
                        			<hr />
                    			</div>

                    			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  pricing-faqPoints">
                    				<h1>1. How do you structure your pricing? Is it hourly, or a flat-fee based on the project?</h1>
                    				<h1 className="answers">One size doesn't fit all. This means we will create a pricing structure that's right for your project. Skip to the next question for details!</h1>
                    			</div>

                    			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  pricing-faqPoints">
                    				<h1>2. What are the different ways I can engage with your team?</h1>
                    				<h1 className="answers">Typically, our clients will fall into either of the following buckets - 
                                    <p><span>a.</span>  Turnkey projects are the ones with a specified time frame with resources entering and exiting the project as required. This means our designers will do the heavy lifting until your prototype is ready, after which our developers take over, and eventually our testers step in. We usually offer our clients a payment method that corresponds to the milestones achieved.</p>
                                    <p><span>b.</span>  In our Staff augmentation model, you can supplement your existing staff with one of our team members on an ongoing basis. We've even had our developers be part of a one-man engineering team for some clients. In this model, you will have exclusive access to that particular team member's time. </p>
                                    <p><span>c.</span>  Technical consultations are everything in between - short-term research projects, maintenance assignments, an addition of a new feature, or spec-writing, to quote a few examples.</p>
                    			     </h1>
                                 <hr />
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  pricing-faqPoints">
                                    <h1>3. Do you have a dedicated project manager who will be managing this project?</h1>
                                    <h1 className="answers">Yes. Our project managers build timelines, schedule meetings, coordinate feedback and mitigate & reduce delays. Degrees of involvement of your project manager may differ with the complexity of your project or the number of resources employed.</h1>
                                    <hr />
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  pricing-faqPoints">
                                    <h1>4. Can I come and visit or work out of your offices while your team works on my project?</h1>
                                    <h1 className="answers">Absolutely. We love visiting clients! 
Most of our dev team is based in Delhi, India. Getting a visa to India is super easy, and we'll help you out with all the logistics.</h1>
                                    <hr />
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  pricing-faqPoints">
                                    <h1>5. How do I ensure my developer isn't working on other projects simultaneously?</h1>
                                    <h1 className="answers">We're really into transparency. Daily status reports and catch-up calls are part of the package when you sign us on. We also encourage every client to come work in our office with us to really be part of the process whenever possible.</h1>
                                    <hr />
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  pricing-faqPoints">
                                    <h1>6. Will training be offered/included</h1>
                                    <h1 className="answers">During project close-out and handover, we walk our clients through every phase of the project and that's when we ensure transfer of knowledge. In most cases, up to 4 hours of hand-off training will be included.</h1>
                                    <hr />
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  pricing-faqPoints">
                                    <h1>7. Can I cancel our association whenever I want?</h1>
                                    <h1 className="answers">In staff augmentation model, a two-weeks notice period is all that's required to cancel an on-going engagement. For turnkey projects and technical consultations, the notice period may be as long as 4 weeks.</h1>
                                    <hr />
                                </div>
                               
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  pricing-faqPoints">
                                    <h1>8. How are ProductStudio and KarmaCircles related?</h1>
                                    <h1 className="answers"> <a href="http://www.karmacircles.com" rel="noopener noreferrer" target="_blank">KarmaCircles</a>, our in-house product, is a labor of love. Our tech team put their blood, sweat and tears into the product and we've reached a stage where we tweak it only occasionally. We realised we have a rare combination – 
                                        <p><span>a.</span> A tech team that works exceptionally well together</p> 
                                        <p><span>b.</span> A tech team with real-world experience of a product that's seen roadblocks and mistakes, which they'll now know to avoid.</p>
                                        To sum it up, our team has a product-mindset that ProductStudio clients need and absolutely love.
                                    </h1>
                                    <hr />
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  pricing-faqPoints">
                                    <h1>9. How do you recruit and train your team members?</h1>
                                    <h1 className="answers">Our recruiting and training process is different from most dev shops. Each new member we hire is trained on KarmaCircles for the first 6 months. While recruiting, we focus tremendously on a candidate's logical & cognitive abilities in addition to the computer science fundamentals. Our experience tells us the stronger their fundamentals, the quicker they'll pick up any new language, framework or library.</h1>
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  pricing-faqPoints">
                                    <h1>10. Do you partner with students/alumni of any school? Are any discounts offered?</h1>
                                    <h1 className="answers">If you are from Haas, Wharton, Booth or Sloan, please let us know in advance to get special discounts. If you would like us to partner with your school, please send an email to <a href="mailto:hello@productstudio.us">hello@productstudio.us</a>.</h1>
                                    <hr />
                                </div>
                    		</div>
                    	</div>
                    </div>
                    <Footer />
                </div>
        );
    }        
}



export default Pricing;