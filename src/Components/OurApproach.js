import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import ILT1 from './images/ourapproachimages/Agility_IL2.png';
import ILT2 from './images/ourapproachimages/Training_IL2.png';
import ILT3 from './images/ourapproachimages/Transparency_IL2.png';
import ILT4 from './images/ourapproachimages/Scalability_IL2.png';
import ILT5 from './images/ourapproachimages/OP9.png';
import MetaDecorator from './util/MetaDecorator';
import metaThumbnail from "./images/metaThumbnail.png";
const ourApproach = require("./data/OurApproach.json");
/* Component for hero-bars */
const Bars = () => (
    <div className="row ps-container bbar">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-bars"> 
            <div className="row">                            
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-grid grid1 animated slideInDown animate-a"></div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-grid grid2 animated slideInDown animate-b"></div>
            </div>
            <div className="ps-textWrapper">
                <h1 className="animated slideInLeft"><strong><span>Our</span> approach</strong></h1>
                <h4 className="animated slideInLeft">We've learned and adapted as we built products for ourselves and others - and we want other companies to leverage the lessons we've learned.</h4>
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

const Illustration1 = () => (
    <div className="row ps-container">
        <div className="col-lg-10 col-md-10 col-sm-10 oApp-triDiv">
            <div className="row oApp-illustrations">
                <div className="col-lg-5 col-md-5 col-sm-5 oApp-text">
                    <h1>Agility of a startup</h1>
                    <h5>We use version control systems, multiple development environments, exhaustive testing and daily status reports to keep you up to speed. Our daily stand-ups, frequent demos and rapid shipping keeps us on our toes. That's how you can constantly transform, innovate and disrupt.</h5>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-7 oApp-Img">
                    <img src={ILT1} alt="not available" />
                </div>
            </div>
        </div>
    </div>
);

const Illustration2 = () => (
    <div className="row ps-container">
        <div className="col-lg-10 col-md-10 col-sm-10 oApp-triDiv">
            <div className="row oApp-illustrations">
                <div className="col-lg-5 col-md-5 col-sm-5 oApp-text">
                    <h1>Focus on training, learning, mastering</h1>
                    <h5>We believe in writing code that's adaptable to the many changes your product will need, and that needs a developer with a solid foundation. While expertise in different languages, frameworks and stacks is appreciated, we focus on the basics to do things the right way.</h5>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-7 oApp-Img">
                    <img src={ILT2} alt="not available" />
                </div>
            </div>
        </div>
    </div> 
);

const Illustration3 = () => (
    <div className="row ps-container">
        <div className="col-lg-10 col-md-10 col-sm-10 oApp-triDiv">
            <div className="row oApp-illustrations">
                <div className="col-lg-5 col-md-5 col-sm-5 oApp-text">
                    <h1>Transparency and integrity</h1>
                    <h5>While building a product, requirements change, new ideas come up, and old ideas don't seem that great anymore. With so much volatility, we understand you need your tech team to be absolutely transparent. Dedicated resources, daily detailed status reports and daily check-ins is how we achieve this. </h5>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-7 oApp-Img">
                    <img src={ILT3} alt="not available" />
                </div>
            </div>
        </div>
    </div>
);
const Illustration4 = () => (                
    <div className="row ps-container">
        <div className="col-lg-10 col-md-10 col-sm-10 oApp-triDiv">
            <div className="row oApp-illustrations">
                <div className="col-lg-5 col-md-5 col-sm-5 oApp-text">
                    <h1>Foresight for scaling up to any device</h1>
                    <h5>Layered architecture helps you seamlessly move your product to any device. Our deep understanding of Android, iOS and web-based technology enables us to bring a level of expertise to your enterprise like no one else.</h5>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-7 oApp-Img">
                    <img src={ILT4} alt="not available" />
                </div>
            </div>
        </div>
    </div>
);

const Illustration5 = () => (
    <div className="row ps-container">
        <div className="col-lg-10 col-md-10 col-sm-10 oApp-process">
            <img src={ILT5} alt="not available" />
        </div>
    </div>
);

class OurApproach extends Component{
	render() {
        return (
                <div className="container-fluid ps-gradient">
                <MetaDecorator 
                title={ourApproach.pageTitle}
                description={ourApproach.pageDescription}
                imageUrl={metaThumbnail}/>
                    <Bars />
                    <Illustration1 />                    
                    <Illustration2 />
                    <Illustration3 />
                    <Illustration4 />
                    <Illustration5 />
                    <Footer />
                </div>
        );
    }        
}


export default OurApproach;