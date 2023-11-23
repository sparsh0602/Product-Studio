import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import MetaDecorator from './util/MetaDecorator';
import metaThumbnail from "./images/metaThumbnail.png";
const contactUs = require("./data/ContactUs.json");

/* Component for hero-bars */
const Bars = () => (
    <div className="row ps-container bbar">
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 ps-grid grid1 animated slideInDown animate-a"></div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 ps-grid grid2 animated slideInDown animate-b"></div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 ps-grid grid3 animated slideInDown animate-c"></div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 ps-grid grid4 animated slideInDown animate-d"></div>
        <div className="ps-textWrapper">
            <h1 className="cUs-text animated fadeIn"><strong><span>Kick start</span> your project.</strong></h1>
        </div>
        <Header />        
    </div>
);


class ContactUs extends Component {
    constructor(props){
        super(props);
        this.state = {email: '',description: '',location: '',budget: ''};
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            email: '',
            description: '',
            location: '',
            budget: ''
        });
    }
    render() {
        return (
                <div className="container-fluid  ps-gradient">
                <MetaDecorator 
                title={contactUs.pageTitle}
                description={contactUs.pageDescription} 
                imageUrl={metaThumbnail}/>
                    <Bars />
                    <div className="row ps-container">
                        <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 cUs-form">
                            <form role="form" id="testid" class="gform" action="https://script.google.com/macros/s/AKfycbweAx3J5qoc_DHjvorpwf3HwmzKvPzmkp7o2Edhh__A_lcbKRCI/exec" method="POST">

                                <div className="row">
                                    <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12 projectIdeas">
                                        <input type="Email" name="email"    placeholder="Your Email Address*" required />
                                        <input type="text" name="location" placeholder="Location*" required />
                                        <input type="text" name="description" placeholder="Tell us about your product*" required />
                                        <input type="text" name="budget" placeholder="Your estimated budget for the project" />
                                    </div>
                                    <div className="row cUs-submit cUs-hide">
                                        <button type="submit">Send message</button>
                                    </div>      
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 contacts">
                                        <h1><a href="mailto:hello@productstudio.us">hello@productstudio.us</a></h1>
                                        <h5>Have a project in mind? Want to say hi? Want to join our awesome team and work with us?</h5>
                                        <span>Send us your story.</span>
                                    </div>
                                </div>
                                <div className="row cUs-submit cUs-show">
                                    <button type="submit">Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Footer />
                </div>     
        );
    }
}
export default ContactUs;
