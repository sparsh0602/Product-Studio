import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import $ from 'jquery';
import brain_right from './images/brainRight.png';
import brain_left from './images/brain_left.png';
import ilo from './images/IL2.png';
import ilt from './images/IL1.png';
import ilth from './images/IL3.png';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MetaDecorator from './util/MetaDecorator';
import metaThumbnail from "./images/metaThumbnail.png";
const home = require("./data/Home.json");

/* Component for hero-bars */
const Bars = () => (
    <div className="row ps-container bbar">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-bars"> 
            <div className="row">                            
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-grid grid1 animated slideInDown animate-a"></div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-grid grid2 animated slideInDown animate-b"></div>
            </div>
            <div className="ps-textWrapper">
                <h1 className="animated slideInLeft"><strong>Your imagination.</strong></h1>
                <h1 className="animated slideInLeft"><strong>Our design.</strong></h1>
                <h4 className="animated slideInLeft">We are a digital product and service studio that combines empathic design with technology.</h4>
            </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-bars"> 
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-grid grid3 animated slideInDown animate-c">
                    <img src={brain_left} alt="" className="animated fadeIn" />
                    <div id="background-wrap">
                        <div className="bubble x1"></div>
                        <div className="bubble x2"></div>
                        <div className="bubble x3"></div>
                        <div className="bubble x4"></div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-grid grid4 img2 animated slideInDown animate-d">
                    <img src={brain_right} alt="" className="animated fadeIn"/>
                    <div id="background-wrap">
                        <div className="bubble x5"></div>
                        <div className="bubble x6"></div>
                        <div className="bubble x7"></div>
                        <div className="bubble x8"></div>
                    </div>
                </div>
            </div>
        </div>
        <Header />        
    </div>
);

const Illustrations = () => (
<div>    
    <div className="row ps-container">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-il">
            <img src={ilo} alt="" /> 
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-content">
            <h2>We design and build products, not just apps and websites</h2>
            <p>Apps are easier than ever to develop, yet they rarely succeed.</p>
            <p>Our unique team of mentors, product managers and engineers bring deep expertise in analytics, security and scale. We design and develop products that provide value, not just metrics.</p>
        </div> 
    </div>
    <div className="row ps-container">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-ilth mobile-visible">
            <img src={ilth} alt="" /> 
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-content ps-leftContent">
            <h2>End-to-end-solutions</h2>
            <p>Over the years, we have developed expertise in strategy, design and development of mobile and web projects, including UI/UX design, end-to-end project management and ideation-to-execution product development.</p>
        </div> 
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-ilth web-visible">
            <img src={ilth} alt="" /> 
        </div>
    </div>
    <div className="row ps-container">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-ilt">
            <img src={ilt}  alt="" /> 
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-content">
            <h2>Combined leadership experience of more than 60 years</h2>
            <p>We have nurtured and grown our own products and teams over the years, and we now want to help other companies leverage the lessons we've learnt. We know how to avoid the usual stumbling blocks before they appear. This means fewer resources, frequent shipping and viable results, faster.</p>
        </div> 
    </div>
</div>    
);

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {email: '',description: ''};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeMsg = this.handleChangeMsg.bind(this);
    }
    handleChange(event) {
        this.setState({
            email: event.target.value,
        });
    }
    handleChangeMsg(event) {
        this.setState({
            description: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            email: '',
            description: ''
        });
        $.ajax({
            url: 'https://www.karmacircles.com/ps-send-email',
            type: 'POST',
            data: { 'email': this.state.email,
                    'description': this.state.description,
            },
            success: function(data) {
                alert("Hello");
                
            },
            error: function(err) {
                alert("Thanks for contacting us, we will get back to you within 24 hours.");
            }

        });
    }
    render() {
        return (
            <div className="container-fluid">
                <MetaDecorator 
                title={home.pageTitle}
                description={home.pageDescription}
                imageUrl={metaThumbnail}/>
                <Bars />
                <div className="row ps-container">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ps-head">
                        <h1><strong>WHY CHOOSE US</strong></h1> 
                    </div>
                </div>
                <Illustrations />
                <div className="row ps-container">
                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 ps-tellus">
                        <h1>Tell us about your product</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="row tu-outer">
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 tu-form">
                                    <br />
                                    <label>Your Email Address*</label><br />
                                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Your Email Address*" required/>
                                </div>
                            </div>
                            <div className="row tu-outer">
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 tu-form">
                                    <br />
                                    <label>Tell us about your product*</label><br />
                                    <input type="text" name="description" value={this.state.description} onChange={this.handleChangeMsg}  placeholder="Tell us about your product*" required/>
                                </div>
                            </div>
                            <div className="row tu-outer">
                                <div className="tu-form">
                                    <button type="submit" value="Submit" className="btn ps-button">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div> 
                </div>
                <Footer />   
            </div>     
        );
    }
}
export default Home;