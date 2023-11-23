import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import First from './images/sd-2.png';
import Second from './images/uxui-2.png';
import Third from './images/r-s.png';
import MetaDecorator from './util/MetaDecorator';
import metaThumbnail from "./images/metaThumbnail.png";
const services = require("./data/Services.json");

/* Component for hero-bars */
const Bars = () => (
    <div className="row ps-container bbar">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-bars"> 
            <div className="row">                            
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-grid grid1 animated slideInDown animate-a"></div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-grid grid2 animated slideInDown animate-b"></div>
            </div>
            <div className="ps-textWrapper">
                <h1 className="animated slideInLeft"><strong>Our services</strong></h1>
                <h4 className="animated slideInLeft">Our team has a diverse skill set to match your requirements across development, design and strategy for digital products.</h4>
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


class Services extends Component{
	render() {
        return (
            <div className="container-fluid ps-gradient">
                <MetaDecorator 
                title={services.pageTitle}
                description={services.pageDescription}
                imageUrl={metaThumbnail}/>
                <Bars />
                <div>
                    <div className="row row_single_column">
                        <div className="col-lg-10 col-sm-10 col-md-10 col-xs-10 outer_column hvr-float">
                            <div className="row heading_row">
                                <div className="col-lg-12  col-sm-12 col-md-12 col-xs-12 heading">
                                    <h1>Software Development </h1>
                                </div>
                            </div>
                            <div className="row inner_two_column">
                                <div className="col-lg-7 col-sm-12 col-md-8 col-xs-12 text_content">
                                    <h1>Web Development</h1>
                                    <p>We build visually captivating websites backed by technology that is fast,
                                     reliable and scalable. Our full-stack team loves to create compelling experiences
                                      using the latest technology standards that perfectly portrays
                                       the value of your product or service. </p>
                                </div>
                                <div className="col-lg-5 col-sm-4 col-md-4 image_content">
                                    <img src={First} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row lower_row">
                        <div className="col-lg-10 col-sm-10 col-md-10 col-xs-10 lower_outer_column">
                            <div className="lower_column hvr-float">
                                <h1> Mobile Apps </h1>
                                <p>The best designs are rendered inefficacious without solid development.
                                 Our team of talented, tireless engineers will make sure you get just the 
                                 performance and speed you want from your app. We work with iOS, Android 
                                 and multi-platform applications.  </p>
                            </div>


                            <div className="lower_column hvr-float">
                                <h1> Custom development </h1>
                                <p>All digital products need to have the right blend of ideas, people and processes.
                                 It's hard to get it right. We have seen far too many ideas executed poorly, 
                                 or features left unfinished. Our team loves to solve problems Google can't answer. </p>
                            </div>
                        </div>
                    </div>      
                    <div className="row row_single_column">
                        <div className="col-lg-10 col-sm-10 col-md-10 col-xs-10 outer_column hvr-float">
                            
                            <div className="row heading_row">
                                <div className="col-lg-12  col-sm-12 col-md-12 col-xs-12 heading">
                                    <h1>User Experience and User Interface</h1>
                                </div>
                            </div>

                            <div className="row inner_two_column">
                                <div className="col-lg-8  col-sm-12 col-md-8 col-xs-12 text_content">
                                    <h1> User Experience Design </h1>
                                    <p> <br/>User research, user testing, wireframing, interactive prototyping, UX Writing,
                                     UX analysis are a few services we offer. Our goal is to create intuitive apps and 
                                     websites for the perfect interactive experience. We love sprints, scrums and sitemaps. </p>
                                </div>

                                <div className="col-lg-4 col-sm-4 col-md-4 image_content even">
                                    <img src={Second} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row lower_row">
                        <div className="col-lg-10  col-sm-10 col-md-10 col-xs-10 lower_outer_column">
                            <div className="lower_column pull-left hvr-float">
                                <h1> User Interface Design </h1>
                                <p>UI design is one of the last stages of the UX process.
                                 Our UI designers love to build clean, modern and practical 
                                 UI elements that leave no scope for coach marks. 
                                 We customize the right combination of iconography, typography and colour palettes
                                 for your product.  </p>
                            </div>


                            <div className="lower_column pull-right hvr-float">
                                <h1> Custom Graphics </h1>
                                <p> Whether it's custom illustrations for your website's landing page 
                                or bespoke icons for your app, our awesome team of designers love a challenge.
                                We start with pencil sketches and turn them into vibrant digital designs using 
                                Sketch app and Adobe creative suite. </p>
                            </div>
                        </div>
                    </div>      
                    <div className="row row_single_column">
                        <div className="col-lg-10 col-sm-10 col-md-10 col-xs-10 outer_column hvr-float">
                            
                            <div className="row heading_row">
                                <div className="col-lg-12  col-sm-12 col-md-12 col-xs-12 heading">
                                    <h1>Research and Strategy</h1>
                                </div>
                            </div>

                            <div className="row inner_two_column">
                                <div className="col-lg-8  col-sm-12 col-md-8 col-xs-12 text_content">
                                    <h1> Competitive Analysis </h1>
                                    <p> <br/>No product planning is complete without a comprehensive analysis 
                                     of the opportunities and challenges in your industry.
                                     The goal isn't quite 'understanding the competition'. 
                                     The goal is to understand how to position yourself to win against the competition
                                     in a world where everyone is chasing the ideal customer.</p>
                                </div>

                                <div className="col-lg-4 col-sm-4 col-md-4 image_content">
                                    <img src={Third} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row lower_row">
                        <div className="col-lg-10  col-sm-10 col-md-10 col-xs-10 lower_outer_column">
                            <div className="lower_column pull-left hvr-float">
                                <h1> Product Strategy </h1>
                                <p>We get our clients ahead so that they can stay ahead in a constantly evolving ecosystem.
                                 We leverage our experience in building products to help you with key decisions like 
                                 branding, marketing, social media and growth strategies. </p>
                            </div>

                            <div className="lower_column pull-right hvr-float">
                                <h1> MVP building </h1>
                                <p> And MVP is every start-up's best friend.
                                 We help identify those few core, indispensable features that create true value for your product.
                                 We are great at knowing where to draw the line - this saves you time, resources and gives faster results. </p>
                            </div>
                        </div>
                    </div>      
                </div>
                <Footer />
            </div>
        );
    }        
}
 
export default Services;